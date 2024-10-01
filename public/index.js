'use strict';

import App from './app.js';
import {
  homeConfig,
  loginConfig,
  signupConfig,
  headerConfig,
} from './constants/config.js';

const root = document.getElementById('root');

const config = {
  homeConfig,
  signupConfig,
  loginConfig,
  headerConfig,
};

const app = new App(config, root);
app.renderPage(window.location.pathname);
