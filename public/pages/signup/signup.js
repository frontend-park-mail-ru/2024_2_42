'use strict';

import { InputComponent as Input } from '../../components/input/input.js';
import { ButtonComponent as Button } from '../../components/button/button.js';

import { postMethod } from '../../modules/network.js';
import { ROUTES } from '../../constants/routes.js';

import { app } from '../../index.js';

import {
	validateInput,
	getCaptionSetForRule,
} from '../../modules/validation.js';

/**
 * Represents a Signup Component.
 * @class
 */
export class SignUpComponent {
	/**
	 * The parent element where the sign up form will be rendered.
	 * @type {HTMLElement}
	 */
	#parent;
	#inputs = [];
	#inputsErrors = {};
	#inputsSavedValues = {};
	#inputsData;
	#buttonData;
	#buttonFooterData;

	/**
	 * Creates an instance of SignUpForm Component.
	 * @constructor
	 * @param {HTMLElement} parent - The parent element where the signup form will be rendered.
	 * @param {Object} inputsData - data provided for inputs propagation.
	 * @param {Object} buttonData - data provided for submit button propagation.
	 * @param {Object} buttonFooterData - data provided for redirect button propagation.
	 */
	constructor(parent, inputsData, buttonData, buttonFooterData) {
		this.#parent = parent;
		this.#inputsData = inputsData;
		this.#buttonData = buttonData;
		this.#buttonFooterData = buttonFooterData;

		this.#inputsData.userName.captions = getCaptionSetForRule({
			isUserName: true,
		});
		this.#inputsData.email.captions = getCaptionSetForRule({ isEmail: true });
		this.#inputsData.password.captions = getCaptionSetForRule({
			isPassword: true,
		});
	}

	/**
	 * Renders the SignUpForm component.
	 * @returns {string} - The rendered HTML template of the signup form.
	 */
	renderTemplate() {
		Object.entries(this.#inputsData).forEach(([key, value]) => {
			const input = new Input({ key, ...value });
			this.#inputs.push(input);
		});

		const button = new Button('', this.#buttonData);
		const button_form_footer = new Button('', this.#buttonFooterData);

		const template = Handlebars.templates['signup.hbs'];
		const renderedTemplate = template({
			inputs: this.#inputs.map((input) => input.renderTemplate()),
			className: 'signup-form-container',
			button: button.renderTemplate(),
			button_form_footer: button_form_footer.renderTemplate(),
		});

		this.#parent.innerHTML += renderedTemplate;
		this.#inputs.forEach((input) => {
			input.parent = this.htmlElement;
		});

		const [userNameCaptionsBlock, emailCaptionsBlock, passwordCaptionsBlock] =
			document.getElementsByClassName('input__helper-text-list');

		for (const captionText of this.#inputsData.userName.captions) {
			const nextCaption = document.createElement('input__helper-text');
			nextCaption.textContent = captionText;
			userNameCaptionsBlock.appendChild(nextCaption);
		}

		for (const captionText of this.#inputsData.email.captions) {
			const nextCaption = document.createElement('input__helper-text');
			nextCaption.textContent = captionText;
			emailCaptionsBlock.appendChild(nextCaption);
		}

		for (const captionText of this.#inputsData.password.captions) {
			const nextCaption = document.createElement('input__helper-text');
			nextCaption.textContent = captionText;
			passwordCaptionsBlock.appendChild(nextCaption);
		}

		document.querySelector('.tomain__tap-button').addEventListener('click', (event) => {
			event.preventDefault();

			root.innerHTML = '';
			app.renderPage(ROUTES.main);
		});

		document.querySelector('.logo-auth').addEventListener('click', (event) => {
			event.preventDefault();

			root.innerHTML = '';
			app.renderPage(ROUTES.main);
		});

		return renderedTemplate;
	}

	/**
	 * Adds click handler for submit button
	 * @param {string} apiRoute - url address of corresponding backend resource.
	 */
	addSubmitBtnHandler(apiRoute) {
		const submitBtn = document.getElementsByClassName('button submit')[0];
		submitBtn.addEventListener('click', async (event) => {
			event.preventDefault();

			const [userNameInput, emailInput, passwordInput] = document.getElementsByClassName('input');
			const userNameState = validateInput(userNameInput.value, { isUserName: true })
			const emailState = validateInput(emailInput.value, { isEmail: true });
			const passwordState = validateInput(passwordInput.value, { isPassword: true });
			if (userNameState.isValid && emailState.isValid && passwordState.isValid) {
				const signUpData = {
					user_name: userNameInput.value,
					email: emailInput.value,
					password: passwordInput.value,
				};

				const resp = await postMethod(apiRoute, signUpData, true);
				if (resp.user_id) {
					this.#parent.innerHTML = '';
					app.renderPage(ROUTES.login);
				}
			}
		});
	}

	/**
	 * Adds focus/blur handlers for data inputs
	 */
	addInputFocusHandler() {
		const [userNameInput, loginInput, passwordInput] =
			document.getElementsByClassName('input');
		const [userNameCaptionsBlock, emailCaptionsBlock, passwordCaptionsBlock] =
			document.getElementsByClassName('input__helper-text-list');

		userNameInput.addEventListener('focus', (event) => {
			event.preventDefault();

			if (this.#inputsErrors.userName === undefined) {
				userNameCaptionsBlock.style.display = '';
			}
		});
		loginInput.addEventListener('focus', (event) => {
			event.preventDefault();

			if (this.#inputsErrors.email === undefined) {
				emailCaptionsBlock.style.display = '';
			}
		});
		passwordInput.addEventListener('focus', (event) => {
			event.preventDefault();

			if (this.#inputsErrors.password === undefined) {
				passwordCaptionsBlock.style.display = '';
			}
		});

		userNameInput.addEventListener('blur', (event) => {
			event.preventDefault();
			userNameCaptionsBlock.style.display = 'none';
		});
		loginInput.addEventListener('blur', (event) => {
			event.preventDefault();
			emailCaptionsBlock.style.display = 'none';
		});
		passwordInput.addEventListener('blur', (event) => {
			event.preventDefault();
			passwordCaptionsBlock.style.display = 'none';
		});
	}

	/**
	 * Adds input handler to track its value changes
	 */
	addInputOnChangeHandler() {
		const [userNameInput, loginInput, passwordInput, passwordRepeatInput] =
			document.getElementsByClassName('input');
		const [userNameCaptionsBlock, emailCaptionsBlock, passwordCaptionsBlock] =
			document.getElementsByClassName('input__helper-text-list');
		const [
			userNameErrBlock,
			emailErrBlock,
			passwordErrBlock,
			passwordRepeatErrBlock,
		] = document.getElementsByClassName('input__error-text-list');

		const userNameErrTextBlock = document.createElement('input__error-text');
		const emailErrTextBlock = document.createElement('input__error-text');
		const passwordErrTextBlock = document.createElement('input__error-text');
		const passwordRepeatErrTextBlock =
			document.createElement('input__error-text');

		userNameInput.addEventListener('input', (event) => {
			event.preventDefault();

			const inputState = validateInput(userNameInput.value, {
				isUserName: true,
			});
			if (userNameInput.value.length > 0 && !inputState.isValid) {
				this.#inputsErrors.userName = inputState.error;
				userNameErrTextBlock.textContent = inputState.error;
				userNameErrBlock.appendChild(userNameErrTextBlock);
				userNameErrBlock.style.display = '';
				userNameCaptionsBlock.style.display = 'none';
			} else {
				this.#inputsErrors.userName = undefined;
				if (userNameErrBlock.contains(userNameErrTextBlock)) {
					userNameErrBlock.removeChild(userNameErrTextBlock);
				}
				userNameErrBlock.style.display = 'none';
				userNameCaptionsBlock.style.display = '';
			}
		});

		loginInput.addEventListener('input', (event) => {
			event.preventDefault();

			const inputState = validateInput(loginInput.value, { isEmail: true });
			if (loginInput.value.length > 0 && !inputState.isValid) {
				this.#inputsErrors.email = inputState.error;
				emailErrTextBlock.textContent = inputState.error;
				emailErrBlock.appendChild(emailErrTextBlock);
				emailErrBlock.style.display = '';
				emailCaptionsBlock.style.display = 'none';
			} else {
				this.#inputsErrors.email = undefined;
				if (emailErrBlock.contains(emailErrTextBlock)) {
					emailErrBlock.removeChild(emailErrTextBlock);
				}
				emailErrBlock.style.display = 'none';
				emailCaptionsBlock.style.display = '';
			}
		});

		passwordInput.addEventListener('input', (event) => {
			event.preventDefault();

			if (passwordRepeatInput.value.length > 0) {
				const inputState = validateInput(passwordInput.value, {
					compareWith: passwordRepeatInput.value,
				});
				if (!inputState.isValid) {
					this.#inputsErrors.passwordRepeat = inputState.error;
					passwordRepeatErrTextBlock.textContent = inputState.error;
					passwordRepeatErrBlock.appendChild(passwordRepeatErrTextBlock);
					passwordRepeatErrBlock.style.display = '';
				} else {
					this.#inputsErrors.passwordRepeat = undefined;
					if (passwordRepeatErrBlock.contains(passwordErrTextBlock)) {
						passwordRepeatErrBlock.removeChild(passwordErrTextBlock);
					}
					passwordRepeatErrBlock.style.display = 'none';
				}
			}

			const inputState = validateInput(passwordInput.value, {
				isPassword: true,
			});
			if (passwordInput.value.length > 0 && !inputState.isValid) {
				this.#inputsErrors.password = inputState.error;
				passwordErrTextBlock.textContent = inputState.error;
				passwordErrBlock.appendChild(passwordErrTextBlock);
				passwordErrBlock.style.display = '';
				passwordCaptionsBlock.style.display = 'none';
			} else {
				this.#inputsErrors.password = undefined;
				if (passwordErrBlock.contains(passwordErrTextBlock)) {
					passwordErrBlock.removeChild(passwordErrTextBlock);
				}
				passwordErrBlock.style.display = 'none';
				passwordCaptionsBlock.style.display = '';
			}
		});

		passwordRepeatInput.addEventListener('input', (event) => {
			event.preventDefault();

			const inputState = validateInput(passwordRepeatInput.value, {
				compareWith: passwordInput.value,
			});
			if (passwordRepeatInput.value.length > 0 && !inputState.isValid) {
				this.#inputsErrors.passwordRepeat = inputState.error;
				passwordRepeatErrTextBlock.textContent = inputState.error;
				if (!passwordRepeatErrBlock.contains(passwordRepeatErrTextBlock)) {
					passwordRepeatErrBlock.appendChild(passwordRepeatErrTextBlock);
				}
				passwordRepeatErrBlock.style.display = '';
			} else {
				this.#inputsErrors.passwordRepeat = undefined;
				if (passwordRepeatErrBlock.contains(passwordRepeatErrTextBlock)) {
					passwordRepeatErrBlock.removeChild(passwordRepeatErrTextBlock);
				}
				passwordRepeatErrBlock.style.display = 'none';
			}
		});
	}

	/**
 * Handles inputs value storage for login form
 * @param {Object} app - object of the Application class
 */
	addInputsSaveHandler(app) {
		const signUpBtn = document.getElementsByClassName('button link')[0];
		signUpBtn.addEventListener('click', (event) => {
			event.preventDefault();

			const [_, login, password] = document.getElementsByClassName('input');
			this.#inputsSavedValues = {
				login: login.value,
				password: password.value,
			};

			root.innerHTML = '';
			app.renderPage(ROUTES.login);
		});
	}

	/**
	 * Clears inputs saved values
	 */
	clearStoredInputsValues() {
		for (const value in this.#inputsSavedValues) {
			delete this.#inputsSavedValues[value];
		}
	}

	/**
	 * Getter for inputs saved values
	 */
	get inputsStoredValues() {
		return this.#inputsSavedValues;
	}
}
