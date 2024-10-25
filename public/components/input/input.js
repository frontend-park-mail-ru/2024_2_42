'use strict';

import { BaseComponent } from '../base/base.js';

/**
 * Represents an Input Component.
 * @class
 */
export class InputComponent extends BaseComponent {
	/**
	 * The function that will handle the input change event.
	 * @type {Function}
	 */
	#changeHandler = () => { };

	/**
	 * Creates an instance of InputComponent.
	 * @constructor
	 * @param {HTMLElement} parent - The parent element where the input will be rendered.
	 * @param {Object} [state] - The initial state of the input component. (optional)
	 * @param {Function} [changeHandler] - The function that will handle the input change event. (optional)
	 */
	constructor(parent, state = {}, changeHandler = () => {}) {
		super(parent, state);
		this.#changeHandler = changeHandler;
	}

	/**
	 * Renders the input component.
	 * @returns {string} - The rendered HTML template of the input.
	 */
	renderTemplate() {
		const template = Handlebars.templates['input.hbs'];
		const renderedTemplate = template(this.getState());

		const parent = this.Parent;
		if (parent) {
			parent.innerHTML += renderedTemplate;

		}

		return renderedTemplate;
	}

	/**
	 * Handles the input change event.
	 * @param {Event} event - The input change event object.
	 */
	handleInputChange(event) {
		if (typeof this.#changeHandler === 'function') {
			this.#changeHandler(event.target.value);
		}
	}

	/**
	 * Sets the change event handler for the input.
	 * @param {Function} changeHandler - The function to handle the input change event.
	 */
	setChangeHandler(changeHandler) {
		this.#changeHandler = changeHandler;
	}

	/**
	 * Gets the current change event handler for the input.
	 * @returns {Function} - The current change event handler.
	 */
	getChangeHandler() {
		return this.#changeHandler;
	}
}
