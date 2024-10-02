'use strict';

import { InputComponent as Input } from '../../input/input.js';
import { ButtonComponent as Button } from '../../button/button.js';
import { headerConfig } from '../../../constants/config.js';

import { isAuthorized } from '../../../modules/network.js';

/**
 * Represents the Header Component.
 * This class is responsible for rendering the header section of the page, which includes the app icon, navigation menu,
 * search bar, and login/profile buttons. The component's state tracks the login status and which sections are available based on that status.
 *
 * @class
 */
export class HeaderComponent {
	#parent;
	#state = {
		isLoggedIn: false, // Whether the user is logged in or not
		iconUrl: headerConfig.images.logoUrl, // URL for the app icon
		profileIconUrl: headerConfig.images.profileIconUrl, // URL for the profile icon
		sections: [
			{ name: 'Домой', href: '/', disabled: false },
			{ name: 'Исследовать', href: '/explore', disabled: true },
			{ name: 'Сохдать', href: '/create', disabled: true },
			{ name: 'Сохраненные', href: '/saved', disabled: true },
		],
	};

	/**
	 * Creates an instance of HeaderComponent.
	 *
	 * @constructor
	 * @param {HTMLElement} parent - The parent element where the header will be rendered.
	 * @param {Object} [state] - Optional initial state to override default state.
	 */
	constructor(parent, state = this.#state) {
		this.#parent = parent;
		this.#state = { ...this.#state, ...state };
	}

	/**
	 * Renders the header template to the parent element.
	 * It creates buttons for navigation, login, register, and profile based on the user's login status.
	 *
	 * @returns {string} - The rendered HTML template.
	 */
	renderTemplate() {
		// Render search input
		const searchInput = new Input({
			...headerConfig.searchInput,
		});

		// Render login and register buttons if the user is not logged in
		let loginButton = '',
			registerButton = '';
		if (!this.#state.isLoggedIn) {
			loginButton = new Button(document.createElement('div'), {
				...headerConfig.buttons.loginButton,
			}).renderTemplate();
			registerButton = new Button(document.createElement('div'), {
				...headerConfig.buttons.registerButton,
			}).renderTemplate();
		}

		// Render notification and profile buttons if the user is logged in
		let notificationButton = '',
			profileButton = '';
		if (this.#state.isLoggedIn) {
			notificationButton = new Button(document.createElement('div'), {
				...headerConfig.buttons.notificationButton,
			}).renderTemplate();
			profileButton = new Button(document.createElement('div'), {
				...headerConfig.buttons.profileButton,
			}).renderTemplate();
		}

		// Get and compile the Handlebars template
		const template = Handlebars.templates['header.hbs'];
		const renderedTemplate = template({
			buttons: this.#state.sections,
			searchInput: searchInput.renderTemplate(),
			notificationButton,
			profileButton,
			loginButton,
			registerButton,
			isLoggedIn: this.#state.isLoggedIn,
			iconUrl: this.#state.iconUrl,
		});

		// Initialize dropdown functionality
		this.initDropdown();

		return renderedTemplate;
	}

	/**
	 * Initializes the dropdown menu functionality.
	 * Handles showing and hiding of the dropdown content on button click and closes the dropdown if clicked outside.
	 */
	async initDropdown() {
		if (!await isAuthorized()) {
			return
		}

		const dropdownButton = this.#parent.querySelector('.dropDownButton');
		const dropdownContent = this.#parent.querySelector('#dropdown__items');

		// Toggle dropdown visibility on button click
		dropdownButton.addEventListener('click', (event) => {
			event.stopPropagation(); // Prevent event bubbling
			dropdownContent.style.display =
				dropdownContent.style.display === 'block' ? 'none' : 'block';
		});

		// Close dropdown if clicked outside
		window.addEventListener('click', (event) => {
			if (
				!dropdownButton.contains(event.target) &&
				!dropdownContent.contains(event.target)
			) {
				dropdownContent.style.display = 'none';
			}
		});
	}

	/**
	 * Updates the state of the HeaderComponent and re-renders the template.
	 *
	 * @param {Object} newState - The new state object to update the component with.
	 */
	setState(newState) {
		this.#state = { ...this.#state, ...newState };
		this.renderTemplate();
	}

	/**
	 * Updates the login status and disables/enables navigation sections based on that status.
	 *
	 * @param {boolean} isLoggedIn - Whether the user is logged in or not.
	 */
	setLoginStatus(isLoggedIn) {
		this.#state.isLoggedIn = isLoggedIn;
		this.#state.sections.forEach((section) => {
			section.disabled = !isLoggedIn;
		});
		this.renderTemplate();
	}
}
