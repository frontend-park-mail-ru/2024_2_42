'use strict';

import { InputComponent as Input } from '../../components/input/input.js';
import { ButtonComponent as Button } from '../../components/button/button.js';

import { postMethod } from '../../modules/network.js'
import { BACKEND_LOGIN_ROUTE } from '../../constants/api.js';

/**
 * Represents a Login Component.
 * @class
 */
export class LoginComponent {
	/**
	 * The parent element where the button will be rendered.
	 * @type {HTMLElement}
	 */
	#parent;
	#inputs = [];
	#inputsData;
	#buttonData;
	#buttonFooterData;

	/**
	 * The state of the input component.
	 * @type {Object}
	 * @property {string} inputValue - The current value of the input.
	 * @property {string} inputImageLeft - The path to the image file for the left icon.
	 * @property {string} inputImageRight - The path to the image file for the right icon
	 * @property {string} inputType - The type attribute of the input element (e.g., text, email, password).
	 * @property {string} inputPlaceholder - The placeholder text for the input.
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

	addSubmitBtnHandler(apiRoute) {
		const submitBtn = document.getElementsByClassName('button submit')[0]
		// if (submitBtns.length === 0) {
		// 	return
		// }

		submitBtn.addEventListener('click', (event) => {
			event.preventDefault()

			const inputs = document.getElementsByClassName('input');

			const loginData = {
				email: inputs[0].value,
				password: inputs[1].value
			};

			console.log('loginData:', loginData)

			postMethod(apiRoute, loginData)
		})
	}
};
