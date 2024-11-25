'use strict';

import { BaseComponent } from "../base/base.js"

/**
 * A component that is used to display options when clicking on 'more' button.
 */
export class DetailsMenuComponent extends BaseComponent {
    /**
     * An array of options objects.
     */
    #options;

    /**
     * Creates a DetailsMenuComponent.
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {*} options - an array of options for this details menu.
     */
    constructor(parent, options) {
        super(parent);
        this.#options = options;
    }

    /**
     * Renderes a template of detailes menu container.
     * @returns rendered template of detailes menu container.
     */
    renderTemplate() {
        const template = Handlebars.templates['details-menu.hbs'];
        const renderedTemplate = template({
            options: this.#options,
        });

        return renderedTemplate;
    }
}
