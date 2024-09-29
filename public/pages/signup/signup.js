'use strict';

import {InputComponent as Input} from '../../components/input/input.js';
import {ButtonComponent as Button} from '../../components/button/button.js';
// import validateInput from '../../modules/validation.js'

/**
 * Represents a Login Component.
 * @class
 */
export class SignUpComponent {
    /**
     * The parent element where the button will be rendered.
     * @type {HTMLElement}
     */
    #parent;
    #inputs = [];
    #inputsData;
	#buttonData;

    /**
     * The state of the input component.
     * @type {Object}
     * @property {string} inputValue - The current value of the input.
     * @property {string} inputImageLeft - The path to the image file for the left icon.
     * @property {string} inputImageRight - The path to the image file for the right icon
     * @property {string} inputType - The type attribute of the input element (e.g., text, email, password).
     * @property {string} inputPlaceholder - The placeholder text for the input.
     */

    constructor(parent, inputsData, buttonData) {
        this.#parent = parent;
        this.#inputsData = inputsData
        this.#buttonData = buttonData
    }

    /**
     * Renders the input component.
     * @returns {string} - The rendered HTML template of the input.
     */
    renderTemplate() {
        Object.entries(this.#inputsData).forEach(([key, value]) => {
            console.log(value)

			const input = new Input({key, ...value});
			this.#inputs.push(input);
		});
		const button = new Button('', this.#buttonData);

		const template = Handlebars.templates['signup.hbs'];
		const renderedTemplate = template({
			inputs: this.#inputs.map((input) => input.renderTemplate()),
			className: 'signup-form-container',
			button: button.renderTemplate(),
		});

		this.#parent.innerHTML += renderedTemplate;
		this.#inputs.forEach((input) => {
			input.parent = this.htmlElement;
		});

		return renderedTemplate;
    }
};
