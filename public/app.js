'use strict';

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
                formInputs[2].value = storedValues.login;
                formInputs[3].value = storedValues.password;
            }
        }
    }

    /**
     * Renders feed including header and pins set
     */
    async #renderFeed() {
        const pinSet = await getMethod(BACKEND_FEED_ROUTE);
        console.log(pinSet);
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

        const template = Handlebars.templates['unknown.hbs'];
        const renderedTemplate = template();
        this.root.insertAdjacentHTML('beforeend', renderedTemplate);

        document.querySelector('.tomain__tap-button').addEventListener('click', (event) => {
            event.preventDefault();

            this.root.innerHTML = '';
            this.renderPage(ROUTES.main);
        });

        return renderedTemplate;
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
            ],
        };

        const profile = new ProfilePage(this.root, profileState);
        return profile.renderTemplate();
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
