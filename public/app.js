import { LoginComponent as Login } from './pages/login/login.js';
import { SignUpComponent as SignUp } from './pages/signup/signup.js';

export const ROUTES = {
    login: '/login',
    signup: '/signup',
};

/**
 * Represents a core Application class
 * @class
 */
export default class App {
    /**
     * The parent element where all the pages will be rendered
     * @type {HTMLElement}
     */
    root;

    state;
    handlers = {};
    #structure = {};
    #inputs = {};
    config;

    /**
     * Creates an instance of App.
     * @constructor
     * @param {Object} config - data provided for components propagation
     * @param {HTMLElement} root - The parent element where the input will be rendered
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
            case ROUTES.login:
                history.pushState({}, '', ROUTES.login);
                this.#renderLogin();
                break;
            case ROUTES.signup:
                history.pushState({}, '', ROUTES.signup);
                this.#renderSignup();
                break;
            default:
                for (var input in this.#inputs) {
                    delete this.#inputs[input];
                }
        }
    }

    /**
     * Clears all page data if it's needed and renders the page depending on what route is given.
     * @param {string} pageRoute - the route of the page.
     * @param {boolean} deleteEverything - flag for clearing all page data.
     */
    goToPage(pageRoute, deleteEverything = false) {
        this.clear(deleteEverything);
        this.render(pageRoute);

        if (pageRoute === ROUTES.login) {
            const signUpBtn = document.getElementsByClassName('button link')[0]
            signUpBtn.addEventListener('click', (event) => {
                event.preventDefault();

                const loginInputs = document.getElementsByClassName('input');
                const login = loginInputs[0], password = loginInputs[1];
                this.#inputs = {
                    login: login.value,
                    password: password.value,
                };

                root.innerHTML = ''
                this.goToPage(ROUTES.signup);
            })
        }
        else if (pageRoute == ROUTES.signup) {
            const signUpBtn = document.getElementsByClassName('button link')[0]
            signUpBtn.addEventListener('click', (event) => {
                event.preventDefault();

                const loginInputs = document.getElementsByClassName('input');
                const login = loginInputs[1], password = loginInputs[2];
                this.#inputs = {
                    login: login.value,
                    password: password.value,
                };

                root.innerHTML = ''
                this.goToPage(ROUTES.login);
            })
        }
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
     * Renders login component and saves inputs values if they are typed in.
     */
    #renderLogin() {
        const config = this.config.loginConfig;
        const login = new Login(this.root, config.inputs, config.button, config.button_form_footer);
        login.renderTemplate();
        this.#structure.login = login;

        // Add values to inputs if it's stored
        const formInputs = document.getElementsByClassName('input');
        if (Object.keys(this.#inputs).length > 0) {
            formInputs[0].value = this.#inputs.login
            formInputs[1].value = this.#inputs.password
        }
    }

    /**
     * Renders sign up component and saves inputs values if they are typed in.
     */
    #renderSignup() {
        const config = this.config.signupConfig;
        const signUp = new SignUp(this.root, config.inputs, config.button, config.button_form_footer);
        signUp.renderTemplate();
        this.#structure.signUp = signUp;

        // Add values to inputs if it's stored
        const formInputs = document.getElementsByClassName('input');
        if (Object.keys(this.#inputs).length > 0) {
            formInputs[1].value = this.#inputs.login
            formInputs[2].value = this.#inputs.password
        }
    }
}
