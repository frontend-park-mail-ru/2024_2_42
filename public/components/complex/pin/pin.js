'use strict';

import { BaseComponent } from '../../base.js';

/**
 * Represents an Image Card Component.
 * @class
 */
export class PinComponent extends BaseComponent {
    #state = {
        pin_id: 0,
        author_avatar: '',
        author_name: '',
        media_url: '',
    };

    /**
     * Creates an instance of PinComponent.
     * @param {HTMLElement} parent - The parent element for rendering the pin.
     * @param {Object} [state=this.#state] - The initial state of the pin.
     * @param {string} state.author_avatar - The author avatar.
     * @param {string} state.author_name - The author name.
     * @param {string} state.media_url - Url link associated with the pin.
     */
    constructor(state, parent) {
        super(parent, state);
        this.#state = state;
    }

    /**
     * Renders the pin template and appends it to the parent container.
     * Updates the button components based on the state.
     * @returns {string} - The rendered template for debugging purposes.
     */
    renderTemplate() {
        const template = Handlebars.templates['pin.hbs'];
        const renderedTemplate = template({
            pin: this.#state,
        });

        return renderedTemplate; // Can be kept for debugging if needed
    }
}
