'use strict'

import { LoginComponent as Login } from './pages/login/login.js';
import { SignUpComponent as SignUp } from './pages/signup/signup.js';
import { getMethod } from './modules/network.js';

import { ROUTES } from './constants/routes.js';
import { BACKEND_LOGIN_ROUTE, BACKEND_SIGNUP_ROUTE, BACKEND_FEED_ROUTE } from './constants/api.js';

export default class App {
    state;
    handlers = {};
    #structure = {};
    config;
    root;

    constructor(config, root) {
        this.config = config;
        this.root = root;
    }

    render(pageRoute) {
        switch (pageRoute) {
            case ROUTES.login:
                history.pushState({}, '', ROUTES.login);
                this.#renderLogin();
                break;
            case ROUTES.signup:
                history.pushState({}, '', ROUTES.signup);
                this.#renderSignup();
                break;
            case ROUTES.feed:
                this.#renderFeed();
                break;
            default:
                this.#structure.login.clearStoredInputsValues();
                this.#structure.signup.clearStoredInputsValues();
                break;
        }
    }

    renderPage(pageRoute, deleteEverything = false) {
        this.clear(deleteEverything);
        this.render(pageRoute);
    }

    clear(deleteEverything) {
        document.removeEventListener('scroll', this.handlers.scrollHandler);
        Object.keys(this.#structure).forEach((key) => {
            if (deleteEverything) {
                this.#structure[key].remove();
                delete this.#structure[key];
            }
        });
    }

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

    #renderFeed() {
        getMethod(BACKEND_FEED_ROUTE);
    }
}
