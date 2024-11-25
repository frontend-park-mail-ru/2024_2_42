'use strict';

import { BaseComponent } from '../../base/base.js';

import { SearchInputComponent as SeachInput } from '../../search-input/search-input.js';
import { ButtonComponent as Button } from '../../button/button.js';
import { headerConfig } from '../../../constants/config.js';

/**
 * Represents the Header Component.
 * This class is responsible for rendering the header section of the page, which includes the app icon,
 * search bar, and login/profile buttons. The component's state tracks the login status and which sections are available based on that status.
 *
 * @class
 */
export class HeaderComponent extends BaseComponent {
    #config;
    #isAuth;
    #avatarUrl;

    /**
     * Creates an instance of HeaderComponent.
     *
     * @constructor
     * @param {HTMLElement} parent - The parent element where the header will be rendered.
     * @param {Object} [state] - Optional initial state to override default state.
     */
    constructor(parent, authState, avatarState) {
        super(parent);
        this.#config = headerConfig;
        this.#isAuth = authState;
        this.#avatarUrl = avatarState;
    }

    /**
     * Renders the header template to the parent element.
     * It creates buttons for navigation, login, register, and profile based on the user's login status.
     *
     * @returns {string} - The rendered HTML template.
     */
    renderTemplate() {
        // Get and compile the Handlebars template
        const template = Handlebars.templates['header.hbs'];

        const renderedTemplate = template({
            header: {
                logoUrl: this.#config.LogoUrl,
                profileUrl: this.#avatarUrl || this.#config.ProfileUrl,
                searchInput: new SeachInput(this.Parent, {
                    Placeholder: this.#config.Placeholder,
                }).renderTemplate(),
                isAuthorized: this.#isAuth,
                loginButton: new Button(this.Parent, this.#config.LoginButton).renderTemplate(),
                createButton: new Button(this.Parent, this.#config.CreateButton).renderTemplate(),
            },
        });

        return renderedTemplate;
    }
}
