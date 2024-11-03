'use strict'

import { HeaderComponent as Header } from '../../components/complex/header/header.js'
import { GridComponent as Grid } from '../../components/complex/grid/grid.js'
import { isAuthorized } from '../../modules/network.js'

import { postMethod } from '../../modules/network.js'
import { BACKEND_LOGOUT_ROUTE } from '../../constants/api.js'
import { ROUTES } from '../../constants/routes.js'

import { app } from '../../index.js'
import { BaseComponent } from '../../components/base/base.js'

/**
 * Represents the Main Page Component.
 * @class
 */
export class MainPageComponent extends BaseComponent {
    /**
     * An array of pins.
     */
    #pins

    /**
     * Creates an instance of MainPage Component.
     * @constructor
     * @param {HTMLElement} parent - The parent element where the main page will be rendered.
     * @param {Object} pins - data provided for pins propagation.
     */
    constructor(parent, pins) {
        super(parent);
        this.#pins = pins
    }

    /**
     * Renders the MainPage component.
     * @returns {string} - The rendered HTML template of the main page.
     */
    async renderTemplate() {
        const template = Handlebars.templates['main.hbs'];

        const grid = new Grid(this.Parent, this.#pins);

        const renderedTemplate = template({
            header: new Header(this.Parent, { isLoggedIn: await isAuthorized() }).renderTemplate(),
            grid: grid.renderTemplate(),
        });

        this.Parent.innerHTML += renderedTemplate;

        for (const pin of this.#pins) {
            grid.buildPinPreview(pin);
        }

        document.body.addEventListener('load', (event) => {
            event.preventDefault();
			grid.buildLayout();
		}, true);

        const headerLogInButton = document.querySelector('.header__login-btn')
        if (headerLogInButton) {
            headerLogInButton.addEventListener('click', (event) => {
                event.preventDefault();

                root.innerHTML = '';
                app.renderPage(ROUTES.login);
            });
        }

        const headerSignUpButton = document.querySelector('.header__signup-btn')
        if (headerSignUpButton) {
            headerSignUpButton.addEventListener('click', (event) => {
                event.preventDefault();

                root.innerHTML = '';
                app.renderPage(ROUTES.signup);
            });
        }

        const headerLogOutButton = document.querySelector('.header__logout-btn');
        if (headerLogOutButton) {
            headerLogOutButton.addEventListener('click', async (event) => {
                event.preventDefault();

                const resp = await postMethod(BACKEND_LOGOUT_ROUTE, {}, true);
                if (!resp.code_status) {
                    document.cookie = "session_token" + '=; Max-Age=0'
                    this.Parent.innerHTML = '';
                    app.renderPage(ROUTES.main);
                }
            });
        }

        return renderedTemplate;
    }
};
