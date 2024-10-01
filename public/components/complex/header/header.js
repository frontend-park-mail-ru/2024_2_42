'use strict';

import { InputComponent as Input } from '../../input/input.js';
import { ButtonComponent as Button } from "../../button/button.js";


/**
 * Represents the Header Component.
 * @class
 */
export class HeaderComponent {
  #parent;
  #state = {
    isLoggedIn: false,  // Track login status
    iconUrl: "", // URL for the app icon
    notificationIconUrl: "", // URL for notification icon
    profileIconUrl: "", // URL for profile icon
    sections: [          // Define sections and which are disabled when not logged in
      { name: "Home", disabled: false },
      { name: "Explore", disabled: true },
      { name: "Create", disabled: true },
      { name: "Saved", disabled: true },
    ],
  };

  constructor(parent, state = this.#state) {
    this.#parent = parent;
    this.#state = { ...this.#state, ...state };
  }

  renderTemplate() {
    console.log("header renderTemplate")
    // Create InputComponent for the search bar
    const searchInput = new Input({
      inputType: 'text',
      inputPlaceholder: 'Search...',
      disabled: true
    });

    // Create ButtonComponents for navigation sections
    const sectionButtons = this.#state.sections.map((section) => 
      new Button(this.#parent, {
        label: section.name,
        type: 'primary',
        disabled: section.disabled,
      }).renderTemplate()
    );

    // Create ButtonComponents for notifications and profile (disabled if not logged in)
    const notificationButton = new Button('', {
      iconLeft: this.#state.notificationIconUrl,
      type: 'icon',
      disabled: !this.#state.isLoggedIn,
    }).renderTemplate();

    const profileButton = new Button('', {
      iconLeft: this.#state.profileIconUrl,
      type: 'icon',
      disabled: !this.#state.isLoggedIn,
    }).renderTemplate();

    // Create Login and Register buttons if not logged in
    let loginButton = '', registerButton = '';
    if (!this.#state.isLoggedIn) {
      loginButton = new Button('', { label: 'Login', type: 'primary' }).renderTemplate();
      registerButton = new Button('', { label: 'Register', type: 'primary' }).renderTemplate();
    }

    const template = Handlebars.templates['header.hbs'];
    const renderedTemplate = template({
      buttons: sectionButtons,
      searchInput: searchInput.renderTemplate(),
      notificationButton,
      profileButton,
      loginButton,
      registerButton,
    });

    this.#parent.innerHTML = renderedTemplate;

    return renderedTemplate;
  }

  setState(newState) {
    this.#state = { ...this.#state, ...newState };
    this.renderTemplate();
  }
  
  setLoginStatus(isLoggedIn) {
    this.#state.isLoggedIn = isLoggedIn;
    this.#state.sections.forEach((section) => {
      section.disabled = !isLoggedIn;
    });
    this.renderTemplate();
  }
}