'use strict';

import { InputComponent as Input } from '../../components/input/input.js';
import { ButtonComponent as Button } from '../../components/button/button.js';

import { postMethod } from '../../modules/network.js';
import { ROUTES } from '../../constants/routes.js';

import {
  validateInput,
  getCaptionSetForRule,
} from '../../modules/validation.js';

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
  #inputsErrors = {};
  #inputsSavedValues = {};
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
    this.#inputsData = inputsData;
    this.#buttonData = buttonData;
    this.#buttonFooterData = buttonFooterData;

    this.#inputsData.email.captions = getCaptionSetForRule({ isEmail: true });
    this.#inputsData.password.captions = getCaptionSetForRule({
      isPassword: true,
    });
  }

  /**
   * Renders the input component.
   * @returns {string} - The rendered HTML template of the input.
   */
  renderTemplate() {
    this.#inputs = [];
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

    const [emailCaptionsBlock, passwordCaptionsBlock] =
      document.getElementsByClassName('input__helper-text-list');

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

    return renderedTemplate;
  }

  addSubmitBtnHandler(apiRoute) {
    const submitBtn = document.getElementsByClassName('button submit')[0];
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();

      const inputs = document.getElementsByClassName('input');

      const loginData = {
        email: inputs[0].value,
        password: inputs[1].value,
      };

      console.log('loginData:', loginData);

      postMethod(apiRoute, loginData);
    });
  }

  addInputFocusHandler() {
    const [loginInput, passwordInput] =
      document.getElementsByClassName('input');
    const [emailCaptionsBlock, passwordCaptionsBlock] =
      document.getElementsByClassName('input__helper-text-list');

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

    loginInput.addEventListener('blur', (event) => {
      event.preventDefault();
      emailCaptionsBlock.style.display = 'none';
    });
    passwordInput.addEventListener('blur', (event) => {
      event.preventDefault();
      passwordCaptionsBlock.style.display = 'none';
    });
  }

  addInputOnChangeHandler() {
    const [loginInput, passwordInput] =
      document.getElementsByClassName('input');
    const [emailCaptionsBlock, passwordCaptionsBlock] =
      document.getElementsByClassName('input__helper-text-list');
    const [emailErrBlock, passwordErrBlock] = document.getElementsByClassName(
      'input__error-text-list',
    );

    const emailErrTextBlock = document.createElement('input__error-text');
    const passwordErrTextBlock = document.createElement('input__error-text');

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
  }

  addInputsSaveHandler(app) {
    const signUpBtn = document.getElementsByClassName('button link')[0];
    signUpBtn.addEventListener('click', (event) => {
      event.preventDefault();

      const [login, password] = document.getElementsByClassName('input');
      this.#inputsSavedValues = {
        login: login.value,
        password: password.value,
      };

      root.innerHTML = '';
      app.renderPage(ROUTES.signup);
    });
  }

  clearStoredInputsValues() {
    for (const value in this.#inputsSavedValues) {
      delete this.#inputsSavedValues[value];
    }
  }

  get inputsStoredValues() {
    return this.#inputsSavedValues;
  }
}
