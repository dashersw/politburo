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
        this.id_ = null;
        this.element = null;

        CultureMinistry.setCulture(this);
    }

    get id() {
        return this.id_;
    }

    get el() {
        let rv = this.element;
        if (!rv) rv = this.element = document.getElementById(this.id);

        return rv;
    }

    toString() {
        return this.template();
    }

    $$(selector) {
        let rv = null, el = this.el;

        if (el) rv = el.querySelectorAll(selector);

        if (!rv.length) rv = null;

        return rv;
    }

    $(selector) {
        let rv = null, el = this.el;

        if (el) rv = selector == undefined ? el : el.querySelector(selector);

        return rv;
    }

    render(opt_base, opt_index) {
        if (opt_base) {
            this.element = CultureMinistry.createElement(this.toString());
            this.element.id = this.id;
            opt_base.insertBefore(this.element, opt_base.childNodes[opt_index] || null);
        }
    }

    template() {
        return `<div></div>`;
    }

    dispose() {
        CultureMinistry.removeCulture(this);
        this.element && this.element.parentNode.removeChild(this.element);
        this.element = null;
        this.id_ = null;
    }
}
