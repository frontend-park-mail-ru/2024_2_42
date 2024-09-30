'use strict';

import App from './app.js';
import { homeConfig, loginConfig, signupConfig } from './constants/config.js'

const root = document.getElementById('root');

const config = {
    homeConfig,
    signupConfig,
    loginConfig,
};

const app = new App(config, root);
app.renderPage(window.location.pathname);
