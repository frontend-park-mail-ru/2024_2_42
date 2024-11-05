'use strict'

import { BaseComponent } from "../base.js"

/**
 * Drop down menu component which is used on profile icon hover.
 */
export class DropDownMenuComponent extends BaseComponent {
    /**
     * Creates a DropDownMenuComponent.
     * @param {HTMLElement} parent - HTML element of the parent container.
     */
    constructor(parent) {
        super(parent);
    }

    /**
     * Renders a template of drop down menu component.
     * @returns {HTMLElement} - rendered template of drop down menu component.
     */
    renderTemplate() {
        const template = Handlebars.templates['drop-down-menu.hbs'];
        const renderedTemplate = template();
        return renderedTemplate;
    }
} ;
