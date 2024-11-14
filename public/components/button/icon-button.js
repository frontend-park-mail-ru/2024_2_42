'use strict';

import { BaseComponent } from '../base.js';

/**
 * Component that is used to display button with icon inside of it.
 */
export class IconButtonComponent extends BaseComponent {
    /**
     * Creates an IconButtonComponent.
     * @param {HTMLElement} parent - HTML element of the parent container.
     * @param {String} iconPath - file path to the icon.
     */
    constructor(parent, state) {
        super(parent, state);
    }

    /**
     * Renders a template of IconButtonComponent.
     * @returns rendered template of IconButtonComponent.
     */
    renderTemplate() {
        const template = Handlebars.templates['icon-button.hbs'];
        const renderedTemplate = template({
            state: this.State,
        });

        return renderedTemplate;
    }
}
