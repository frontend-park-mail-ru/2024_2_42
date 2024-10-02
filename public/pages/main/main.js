'use strict'

import { HeaderComponent as Header } from '../../components/complex/header/header.js'
import { NetComponent as Net } from '../../components/complex/net/net.js'
import { isAuthorized } from '../../modules/network.js'

import { postMethod } from '../../modules/network.js'
import { BACKEND_LOGOUT_ROUTE } from '../../constants/api.js'
import { ROUTES } from '../../constants/routes.js'

import { app } from '../../index.js'

export class MainPageComponent {
    #parent
    #pins

    constructor(parent, pins) {
        this.#parent = parent
        this.#pins = pins
    }

    async renderTemplate() {
        const template = Handlebars.templates['main.hbs'];

        const authorized = await isAuthorized();
        const renderedTemplate = template({
            header: new Header(this.#parent, { isLoggedIn: authorized }).renderTemplate(),
            net: new Net({ pins: this.#pins }, this.#parent).renderTemplate(),
        });

        this.#parent.innerHTML += renderedTemplate;

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
                    this.#parent.innerHTML = '';
                    app.renderPage(ROUTES.main);
                }
            });
        }

        return renderedTemplate;
    }
};
