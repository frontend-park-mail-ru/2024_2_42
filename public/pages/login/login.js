'use strict';

import { InputComponent as Input } from '../../components/input/input.js';
import { ButtonComponent as Button } from '../../components/button/button.js';

/**
 * Represents a Login Component.
 * @class
 */
export class LoginComponent {
	/**
	 * The parent element where the login form will be rendered.
	 * @type {HTMLElement}
	 */
	#parent;

	#inputs = [];
	#inputsData;
	#buttonData;
	#buttonFooterData;

	/**
     * Creates an instance of LoginComponent.
     * @constructor
     * @param {HTMLElement} parent - The parent element where the input will be rendered.
     * @param {Object} inputsData - data provided for inputs propagation.
     * @param {Object} buttonData - data provided for submit button propagation.
     * @param {Object} buttonFooterData - data provided for redirect button propagation.
     */
	constructor(parent, inputsData, buttonData, buttonFooterData) {
		this.#parent = parent;
		this.#inputsData = inputsData
		this.#buttonData = buttonData
		this.#buttonFooterData = buttonFooterData
	}

	/**
	 * Renders the input component.
	 * @returns {string} - The rendered HTML template of the input.
	 */
	renderTemplate() {
		Object.entries(this.#inputsData).forEach(([key, value]) => {
			const input = new Input({ key, ...value });
			this.#inputs.push(input);
		});

		const button = new Button('', this.#buttonData);
		const button_form_footer = new Button('', this.#buttonFooterData);

		const template = Handlebars.templates['login.hbs'];
		const renderedTemplate = template({
			inputs: this.#inputs.map((input) => input.renderTemplate()),
			className: 'login-form-container',
			button: button.renderTemplate(),
			button_form_footer: button_form_footer.renderTemplate(),
		});

		this.#parent.innerHTML += renderedTemplate;
		this.#inputs.forEach((input) => {
			input.parent = this.htmlElement;
		});

		return renderedTemplate;
	}
};
