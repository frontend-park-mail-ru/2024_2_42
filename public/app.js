'use strict'

import { LoginComponent as Login } from './pages/login/login.js';
import { SignUpComponent as SignUp } from './pages/signup/signup.js';
import { MainPageComponent } from './pages/main/main.js';
import { getMethod, postMethod } from './modules/network.js';

import { ROUTES } from './constants/routes.js';
import { BACKEND_LOGIN_ROUTE, BACKEND_SIGNUP_ROUTE, BACKEND_FEED_ROUTE, BACKEND_LOGOUT_ROUTE } from './constants/api.js';

/**
 * Represents core Application class
 * @class
 */
export default class App {
	state;
	handlers = {};
	#structure = {};
	config;
	root;

	/**
     * Creates an instance of App.
     * @constructor
     * @param {Object} config - data provided for components propagation
     * @param {HTMLElement} root - The parent element where app components will live
	 */
	constructor(config, root) {
		this.config = config;
		this.root = root;
	}

	/**
     * Renders the component depending on what route is given.
     * @param {string} pageRoute - the route of the page.
     */
	render(pageRoute) {
		switch (pageRoute) {
			case ROUTES.main:
				history.pushState({}, '', ROUTES.main);
				this.#renderFeed();
				break;
			case ROUTES.login:
				history.pushState({}, '', ROUTES.login);
				this.#renderLogin();
				break;
			case ROUTES.signup:
				history.pushState({}, '', ROUTES.signup);
				this.#renderSignup();
				break;
			case ROUTES.logOut:
				history.pushState({}, '', ROUTES.logOut);
				this.#handleLogout();
				break;
			default:
				this.#handleUnknownRoute();
				break;
		}
	}

	/**
     * Clears all page data if it's needed and renders the page depending on what route is given.
     * @param {string} pageRoute - the route of the page.
     * @param {boolean} deleteEverything - flag for clearing all page data.
     */
	renderPage(pageRoute, deleteEverything = false) {
		this.clear(deleteEverything);
		this.render(pageRoute);
	}

	/**
     * Renders login component and saves inputs values if they are typed in.
     */
	#renderLogin() {
		const config = this.config.loginConfig;
		const login = new Login(this.root, config.inputs, config.button, config.button_form_footer);
		login.renderTemplate();

		login.addSubmitBtnHandler(BACKEND_LOGIN_ROUTE);
		login.addInputFocusHandler();
		login.addInputOnChangeHandler();
		login.addInputsSaveHandler(this);

		this.#structure.login = login;

		// Add values to inputs if it's stored
		if (this.#structure.signUp) {
			const formInputs = document.getElementsByClassName('input');
			const storedValues = this.#structure.signUp.inputsStoredValues;
			if (Object.keys(storedValues).length > 0) {
				formInputs[0].value = storedValues.login;
				formInputs[1].value = storedValues.password;
			}
		}
	}

	/**
     * Renders sign up component and saves inputs values if they are typed in.
     */
	#renderSignup() {
		const config = this.config.signupConfig;
		const signUp = new SignUp(this.root, config.inputs, config.button, config.button_form_footer);
		signUp.renderTemplate();

		signUp.addSubmitBtnHandler(BACKEND_SIGNUP_ROUTE);
		signUp.addInputFocusHandler();
		signUp.addInputOnChangeHandler();
		signUp.addInputsSaveHandler(this);

		this.#structure.signUp = signUp;

		// Add values to inputs if it's stored
		if (this.#structure.login) {
			const formInputs = document.getElementsByClassName('input');
			const storedValues = this.#structure.login.inputsStoredValues;
			if (Object.keys(storedValues).length > 0) {
				formInputs[1].value = storedValues.login;
				formInputs[2].value = storedValues.password;
			}
		}
	}

	/**
     * Renders feed including header and pins set
     */
	async #renderFeed() {
		const pinSet = await getMethod(BACKEND_FEED_ROUTE);

		const samplePins = []
		pinSet.pins.forEach(pin => {
			samplePins.push({
				pinUrl: pin.media_url,
				boards: ['Доска 1', 'Доска 2', 'Доска 3', 'Доска 4', 'Доска 5'],
				disabled: false,
				buttons: {
					saveButton: {
						label: 'Сохранить',
						type: 'primary',
						disabled: false,
					},
					shareButton: {
						label: 'Share',
						iconLeft: 'share-icon.png',
						type: 'link',
						disabled: false,
					},
					menuButton: {
						label: 'Menu',
						iconLeft: 'menu-icon.png',
						type: 'link',
						disabled: false,
					},
				},
			})
		});

		const mainPage = new MainPageComponent(this.root, samplePins);
		mainPage.renderTemplate();
		this.#structure.mainPage = mainPage;
	}

	/**
	 * Handles unknown route request, renders corresponding page template
	 * @returns {string} - rendered page of unknown route
	 */
	#handleUnknownRoute() {
		if (this.#structure.login) {
			this.#structure.login.clearStoredInputsValues();
		}
		if (this.#structure.signup) {
			this.#structure.signup.clearStoredInputsValues();
		}
		if (this.#structure.mainPage) {
			this.#structure.mainPage.clearStoredInputsValues();
		}

		this.clear(true);

		const template = Handlebars.templates['unknown.hbs']
		const renderedTemplate = template()
		this.root.innerHTML += renderedTemplate;

		document.querySelector('.tomain__tap-button').addEventListener('click', (event) => {
			event.preventDefault();

			this.root.innerHTML = '';
			this.renderPage(ROUTES.main);
		});

		return renderedTemplate
	}

	/**
	 * Handles logout functionality, removes cookie and demands backend to remove current active session
	 */
	async #handleLogout() {
		const s = await postMethod(BACKEND_LOGOUT_ROUTE, {}, true)
		this.renderPage(BACKEND_FEED_ROUTE);
		document.cookie = 'session_token' + '=; Max-Age=0'
	}

	/**
     * Clear all page data if it's needed.
     * @param {boolean} deleteEverything - flag for clearing all page data.
     */
	clear(deleteEverything) {
		document.removeEventListener('scroll', this.handlers.scrollHandler);
		Object.keys(this.#structure).forEach((key) => {
			if (deleteEverything) {
				this.#structure[key].remove();
				delete this.#structure[key];
			}
		});
	}
}
