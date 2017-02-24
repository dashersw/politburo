import getUid from '../lib/uid';
import CultureMinistry from './CultureMinistry';

export default class Culture {
    /**
     * Culture is a role that determines your user interface. It defines what
     * your users see on the page. Culture includes a lot of predefined
     * behaviors, like what happens when a user clicks on a button. Cultures
     * are extremely dummy, in that they have no memory, or state, of their
     * own. They know how to draw a user interface and how to handle user
     * input; which they delegate to the Representatives.
     */
    constructor() {
        /**
         * @type {string}
         *
         * @private
         */
        this.id_ = getUid();

        /**
         * @type {?Element}
         */
        this.element = null;

        CultureMinistry.setCulture(this);
    }

    /**
     * @return {string}
     */
    get id() {
        return this.id_;
    }

    /**
     * @return {?Element}
     */
    get el() {
        let rv = this.element;
        if (!rv) rv = this.element = document.getElementById(this.id);

        return rv;
    }

    /**
     * @override
     */
    toString() {
        return this.template();
    }

    /**
     * @param {string} selector Selector
     * @return {?Element|NodeList}
     */
    $$(selector) {
        let rv = null, el = this.el;

        if (el) rv = el.querySelectorAll(selector);

        if (!rv.length) rv = null;

        return rv;
    }

    /**
     * @param {string} selector Selector
     * @return {?Element}
     */
    $(selector) {
        let rv = null, el = this.el;

        if (el) rv = selector == undefined ? el : el.querySelector(selector);

        return rv;
    }

    /**
     * @param {?HTMLElement=} opt_base Base element
     * @param {number=} opt_index Base element
     */
    render(opt_base, opt_index) {
        if (opt_base) {
            this.element = CultureMinistry.createElement(this.toString());
            this.element.id = this.id;

            var child = opt_base.childNodes[opt_index ? opt_index : opt_base.childNodes.length - 1];
            opt_base.insertBefore(this.element, child || null);
        }
    }

    /**
     * @return {string}
     */
    template() {
        return `<div></div>`;
    }

    /**
     * Call when removing this Culture from memory
     */
    dispose() {
        CultureMinistry.removeCulture(this);
        this.element && this.element.parentNode.removeChild(this.element);
        this.element = null;
    }
}
