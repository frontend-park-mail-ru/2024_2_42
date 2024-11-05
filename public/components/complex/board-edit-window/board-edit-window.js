'use strict'

import { BaseComponent } from "../../base.js"

/**
 * Component that displays a modal windows
 */
export class BoardEditWindowComponent extends BaseComponent {
    /**
     * Creates a BoardEditWindowComponent.
     * @param {HTMLElement} parent - HTML of the parent container.
     * @param {Object} state - state of the window.
     */
    constructor(parent, state) {
        super(parent, state);
    }

    renderTemplate() {
        const template = Handlebars.templates['board-edit-window.hbs'];
        const renderedTemplate = template({
            state: this.State,
        });

        return renderedTemplate;
    }
};
