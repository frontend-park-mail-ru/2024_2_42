'use strict';

import { BaseComponent } from '../../base/base.js';

import { ButtonComponent } from '../../button/button.js';

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

	/**
	 * Updates the state of the pin component and re-renders the template.
	 * @param {Object} newState - The new state to update the component.
	 */
	setState(newState) {
		this.#state = { ...this.#state, ...newState };
		this.renderTemplate();
	}

	/**
	 * Retrieves the current state of the pin component.
	 * @returns {Object} - The current state of the component.
	 */
	getState() {
		return this.#state;
	}

	/**
	 * Updates the list of boards associated with the pin and adjusts button states.
	 * @param {Object} newState - The new state including the boards.
	 * @param {Array} newState.boards - The updated list of boards.
	 */
	setBoardsInPin(newState) {
		this.#state = { ...this.#state, ...newState };

		// If there are boards, activate the select and save button
		if (this.#state.boards.length > 0) {
			this.#state.disabled = false;
			this.#state.buttons.saveButton.disabled = false;
		} else {
			// If no boards, disable the select and save button
			this.#state.disabled = true;
			this.#state.buttons.saveButton.disabled = true;
		}

		this.renderTemplate();
	}
}
