'use strict';

import { BaseComponent } from '../../base.js';

/**
 * Represents an Image Card Component.
 * @class
 */
export class PinComponent extends BaseComponent {
	#state = {
		PinID: 0,
		AuthorAvatar: "",
		AuthorName: "",
		MediaUrl: "",
	};

	/**
	 * Creates an instance of PinComponent.
	 * @param {HTMLElement} parent - The parent element for rendering the pin.
	 * @param {Object} [state=this.#state] - The initial state of the pin.
	 * @param {string} state.AuthorAvatar - The author avatar.
	 * @param {string} state.AuthorName - The author name.
	 * @param {string} state.MediaUrl - Url link associated with the pin.
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
			pin: this.#state
		});

		return renderedTemplate; // Can be kept for debugging if needed
	}
}
