'use strict';

import { ROUTES } from './routes.js';

const BASE = 'http://localhost:8080';

export const BACKEND_LOGIN_ROUTE = `${BASE}${ROUTES.login}`;
export const BACKEND_SIGNUP_ROUTE = `${BASE}${ROUTES.signup}`;
export const BACKEND_FEED_ROUTE = `${BASE}${ROUTES.feed}`;
