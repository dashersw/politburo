var CultureMinistry = require('./CultureMinistry.js');

export default class Culture {
    constructor() {
        CultureMinistry.setCulture(this);
    }

    get id() {
        return this.id_;
    }

    get el() {
        var rv = this.element;
        if (!rv) rv = this.element = document.getElementById(this.id);

        return rv;
    }

    toString() {
        return this.templates_base();
    }

    $$(selector) {
        var rv = null, el = this.el;

        if (el) rv = el.querySelectorAll(selector);

        if (!rv.length) rv = null;

        return rv;
    }

    $(selector) {
        var rv = null, el = this.el;

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

    templates_base() {
        return `<div></div>`;
    }

    dispose() {
        CultureMinistry.removeCulture(this);
        this.element && this.element.parentNode.removeChild(this.element);
        this.element = null;
        this.id_ = null;
    }
};
