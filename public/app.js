'use strict'

import { LoginComponent as Login } from './pages/login/login.js';
import { SignUpComponent as SignUp } from './pages/signup/signup.js';

export const ROUTES = {
    login: '/login',
    signup: '/signup',
    feed: '/feed'
};

const BACKEND_LOGIN_ROUTE = 'http://localhost:8080/login'
const BACKEND_SIGNUP_ROUTE = 'http://localhost:8080/signup'
const BACKEND_FEED_ROUTE = 'http://localhost:8080/feed'

export default class App {
    state;
    handlers = {};
    #structure = {};
    #inputs = {};
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
                console.log("Rendering feed")
                this.#renderFeed();
                break;
            default:
                for (var input in this.#inputs) {
                    delete this.#inputs[input];
                }
        }
    }

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

    clear(deleteEverything) {
        document.removeEventListener('scroll', this.handlers.scrollHandler);
        Object.keys(this.#structure).forEach((key) => {
            if (deleteEverything) {
                this.#structure[key].remove();
                delete this.#structure[key];
            }
        });
    }

    #handleResponse(response) {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.error);
            });
        }
        return response.json();
    }

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

        // Add handler on sumbit button
        const submitBtn = document.getElementsByClassName('button submit')[0]
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault()

            const inputs = document.getElementsByClassName('input');

            const loginData = {
                email: inputs[0].value,
                password: inputs[1].value
            };

            console.log('loginData:', loginData)

            fetch(BACKEND_LOGIN_ROUTE, {
                method: 'POST',
                'mode': 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            })
                .then(this.#handleResponse)
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
    }

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

        // Add handler on sumbit button
        const submitBtn = document.getElementsByClassName('button submit')[0]
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault()

            const inputs = document.getElementsByClassName('input');

            const singUpData = {
                user_name: inputs[0].value,
                email: inputs[1].value,
                password: inputs[2].value
            };

            console.log('singUpData:', singUpData)

            fetch(BACKEND_SIGNUP_ROUTE, {
                method: 'POST',
                'mode': 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(singUpData)
            })
                .then(this.#handleResponse)
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
    }

    #renderFeed() {
        fetch(BACKEND_FEED_ROUTE, {
            method: 'GET',
            'mode': 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(this.#handleResponse)
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
