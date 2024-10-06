'use strict';
import { ButtonComponent } from '../../button/button.js';

/**
 * Represents an Image Card Component.
 * @class
 */
export class PinComponent {
	#parent; // DOM element for rendering the component
	#state = {
		pinUrl: '', // Path to the image
		boards: [], // List of boards
		disabled: true, // Default disabled flag
		showText: false,
		buttons: {
			saveButton: {
				label: 'Сохранить', // Label for save button
				type: 'primary', // Type of save button
				disabled: true, // Save button is disabled by default
			},
			shareButton: {
				label: '', // Label for share button
				iconLeft: '', // Icon for the left side of the share button
				type: 'link', // Type of share button
				disabled: true, // Share button is disabled by default
			},
			menuButton: {
				label: '', // Label for menu button
				iconLeft: '', // Icon for the left side of the menu button
				type: 'link', // Type of menu button
				disabled: true, // Menu button is disabled by default
			},
		},
	};

	/**
	 * Creates an instance of PinComponent.
	 * @param {HTMLElement} parent - The parent element for rendering the pin.
	 * @param {Object} [state=this.#state] - The initial state of the pin.
	 * @param {string} state.pinUrl - The URL of the pin image.
	 * @param {Array} state.boards - An array of boards associated with the pin.
	 * @param {boolean} state.disabled - Flag indicating if the pin is disabled.
	 * @param {Object} state.buttons - Configuration for the buttons.
	 * @example
	 * const pin = new PinComponent(document.getElementById('pin-container'), {
	 *   pinUrl: './image.jpg',
	 *   boards: ['Board 1', 'Board 2'],
	 *   disabled: false,
	 * });
	 */
	constructor(state, parent = this.#parent) {
		this.#state = state;
		this.#parent = parent;
	}

	/**
	 * Renders the pin template and appends it to the parent container.
	 * Updates the button components based on the state.
	 * @returns {string} - The rendered template for debugging purposes.
	 */
	renderTemplate() {
		const template = Handlebars.templates['pin.hbs'];
		const renderedTemplate = template({
			boards: this.#state.boards,
			pinUrl: this.#state.pinUrl,
			buttons: {
				saveButton: new ButtonComponent(this.#parent, this.#state.buttons.saveButton).renderTemplate(),
			},
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
