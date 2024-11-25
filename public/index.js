'use strict';

import App from './app.js';
import StateManagerInstance from './modules/state.js';
import {
	homeConfig,
	loginConfig,
	signupConfig,
	headerConfig,
} from './constants/config.js';

StateManagerInstance.updateState ({
	user: null,
});

const root = document.getElementById('root');

const config = {
	homeConfig,
	signupConfig,
	loginConfig,
	headerConfig,
};

export const app = new App(config, root);
app.renderPage(window.location.pathname);