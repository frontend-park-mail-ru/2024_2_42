'use strict'

import { LoginComponent as Login } from './pages/login/login.js';
import { SignUpComponent as SignUp } from './pages/signup/signup.js';
import { MainPageComponent } from './pages/main/main.js';
import { ProfilePageComponent as ProfilePage } from './pages/profile/profile.js';

import { ROUTES } from './constants/routes.js';
import { BACKEND_LOGIN_ROUTE, BACKEND_SIGNUP_ROUTE, BACKEND_FEED_ROUTE, BACKEND_LOGOUT_ROUTE } from './constants/api.js';

import { getMethod } from './modules/network.js';

/**
 * Represents core Application class
 * @class
 */
export default class App {
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
			case ROUTES.profile:
				history.pushState({}, '', ROUTES.profile);
				this.#renderProfile();
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
		// const pinSet = await getMethod(BACKEND_FEED_ROUTE);

		const pinSet = [
			{
				PinID: 1,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 2,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 3,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 4,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 5,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 6,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 7,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 8,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 9,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 10,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 11,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 12,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 13,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 14,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 15,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 16,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 17,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 18,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 19,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 20,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 21,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 22,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 23,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 24,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 25,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 26,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 27,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 28,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 29,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 30,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 31,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 32,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 33,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 34,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 35,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 36,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 37,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 38,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 39,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 40,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 41,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 42,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 43,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 44,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 45,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 46,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 47,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy",
				BoardID: 1,
			},
			{
				PinID: 48,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 49,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 50,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 51,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 52,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
				BoardID: 1,
			},
			{
				PinID: 53,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 54,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 55,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
			{
				PinID: 56,
				AuthorName: "Mary Jane",
				AuthorAvatar: './assets/imgs/avatar.jpg',
				AuthorFollowersNumber: 100,
				MediaUrl: "https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D",
			},
		];

		const mainPage = new MainPageComponent(this.root, pinSet);
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
		this.root.insertAdjacentHTML('beforeend', renderedTemplate);

		document.querySelector('.tomain__tap-button').addEventListener('click', (event) => {
			event.preventDefault();

			this.root.innerHTML = '';
			this.renderPage(ROUTES.main);
		});

		return renderedTemplate
	}

	#renderProfile() {
		const profileState = {
			userName: 'Иван Иванов',
			userNickname: 'ivanvanov',
			avatarUrl: './assets/imgs/bono_avatar.jpg',
			followersNumber: 19,
			followingsNumber: 60,
			personalWebsiteLink: 'https://sales-generator.ru/blog/brend-marketing/',
			geolocation: 'Россия, Москва',
			bio: `Я — директор по бренд-маркетингу с опытом управления глобальными командами и многомиллионными кампаниями.
				Ее опыт в области стратегии бренда, визуального дизайна и управления учетными записями определяет ее осознанный, но...`,
			currentUser: true,
			socialNetworks: {
				vk: true,
				telegram: true,
				github: true,
				pinterest: true,
			},
			boards: [
				{
					boardID: 1,
					coverUrl: './assets/imgs/bookmarks-board-cover.jpg',
					title: 'Закладки',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: true,
				},
				{
					boardID: 2,
					coverUrl: './assets/imgs/michael.jpg',
					title: 'Singers',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: true,
				},
				{
					boardID: 3,
					coverUrl: './assets/imgs/art.jpg',
					title: 'Work-of-art',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: false,
				},
				{
					boardID: 4,
					coverUrl: './assets/imgs/recipe.jpg',
					title: 'Recipes',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: true,
				},
				{
					boardID: 5,
					coverUrl: './assets/imgs/michael.jpg',
					title: 'Singers',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: true,
				},
				{
					boardID: 6,
					coverUrl: './assets/imgs/avatar.jpg',
					title: 'Singers',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: false,
				},
				{
					boardID: 7,
					coverUrl: './assets/imgs/michael.jpg',
					title: 'Singers',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: true,
				},
				{
					boardID: 8,
					coverUrl: './assets/imgs/avatar.jpg',
					title: 'Work-of-art',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: false,
				},
				{
					boardID: 9,
					coverUrl: './assets/imgs/art.jpg',
					title: 'Work-of-art',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: false,
				},
				{
					boardID: 10,
					coverUrl: './assets/imgs/recipe.jpg',
					title: 'Recipes',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: true,
				},
				{
					boardID: 11,
					coverUrl: './assets/imgs/michael.jpg',
					title: 'Singers',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: true,
				},
				{
					boardID: 12,
					coverUrl: './assets/imgs/avatar.jpg',
					title: 'Singers',
					bookmarkedNumber: 139,
					rewardedNumber: 128,
					lastModifyTime: '1 нед. назад',
					private: false,
				},
			]
		};

		const profile = new ProfilePage(this.root, profileState);
		return profile.renderTemplate()
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

	/**
	 * Returns url of the last visited page.
	 */
	get LastPage() {
		return document.referrer;
	}
}
