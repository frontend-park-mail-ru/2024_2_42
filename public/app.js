'use strict';

import { LoginComponent as Login } from './pages/login/login.js';
import { SignUpComponent as SignUp } from './pages/signup/signup.js';
import { MainPageComponent } from './pages/main/main.js';

import LookPin from './pages/addPin/lookPin.js';
import EditPin from './pages/editPin/editPin.js';

import { ProfilePageComponent as ProfilePage } from './pages/profile/profile.js';


import { ROUTES } from './constants/routes.js';
import { BACKEND_LOGIN_ROUTE, BACKEND_SIGNUP_ROUTE, BACKEND_FEED_ROUTE, BACKEND_PROFILE_ROUTE } from './constants/api.js';

import { getMethod } from './modules/network.js';
import { timeAgo } from './modules/time.js';
import StateManagerInstance from './modules/state.js';

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
			case ROUTES.lookPin:
				history.pushState({}, '', ROUTES.lookPin);
				this.#renderLookPin();
				break;
			case ROUTES.editPin:
				history.pushState({}, '', ROUTES.editPin);
				this.#renderEditPin();
				break;
			case ROUTES.createPin:
				history.pushState({}, '', ROUTES.createPin);
				this.#renderCreatePin();
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
	#renderLookPin() {
		const curPin = {
			PinID: 3,
			AuthorName: 'Mary Jane',
			AuthorFollowersNumber: 100,
			MediaUrl:
				'https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
			BoardID: 1,
		};
		const addPin = new LookPin(this.root, curPin);
		addPin.renderTemplate();
	}

	#renderEditPin() {
		const curPin = {
			PinID: 3,
			Title: 'Текущее название',
			Description: 'Текущее описание',
			PinBoard: 'Имя текущей доски',
			MediaUrl:
				'https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
			BoardID: 1,
		};
		const editPin = new EditPin(this.root, curPin, true);
		editPin.renderTemplate();
	}

	#renderCreatePin() {
		const editPin = new EditPin(this.root, null, false);
		editPin.renderTemplate();
	}

	#renderLogin() {
		const config = this.config.loginConfig;
		const login = new Login(
			this.root,
			config.inputs,
			config.button,
			config.button_form_footer
		);
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
		const signUp = new SignUp(
			this.root,
			config.inputs,
			config.button,
			config.button_form_footer
		);
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
        const pinSet = await getMethod(BACKEND_FEED_ROUTE);
        const mainPage = new MainPageComponent(this.root, pinSet);
        mainPage.renderTemplate();
        this.#structure.mainPage = mainPage;
    }

    async #renderProfile() {
        const userInfo = StateManagerInstance.getState();
        const userProfileRoute = `${BACKEND_PROFILE_ROUTE}${userInfo.userID}`
        const profileResp = await getMethod(userProfileRoute);
        const profileState = {
            currentUser: profileResp.current_user,
            userName: profileResp.user_name || '',
            userNickname: profileResp.nick_name || '',
            avatarUrl: profileResp.avatar_url || '/assets/imgs/avatar.jpg',
            followersNumber: profileResp.followings_count,
            followingsNumber: profileResp.subscriptions_count,
            bio: profileResp.description || 'Здесь будет описание...',
            boards: (profileResp.user_boards || []).map((boards) => ({
                boardID: boards.board_id,
                title: boards.board_name || '',
                coverUrl: boards.board_cover || '/assets/imgs/avatar.jpg',
                private: !boards.public,
                lastModifyTime: timeAgo(boards.update_time),
                bookmarkedNumber: boards.bookmarked_number || 0,
                rewardedNumber: boards.rewarded_number || 0,
                pinSet: boards.pins || [],
            })),
        };
        const profile = new ProfilePage(this.root, profileState);
        profile.renderTemplate();
        this.#structure.profile = profile;      
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
