'use strict';

import { ROUTES } from './routes.js';

const BASE = 'http://localhost:8080';

export const BACKEND_FEED_ROUTE = `${BASE}${ROUTES.main}`;
export const BACKEND_LOGIN_ROUTE = `${BASE}${ROUTES.login}`;
export const BACKEND_SIGNUP_ROUTE = `${BASE}${ROUTES.signup}`;
export const BACKEND_IS_AUTHORIZED_ROUTE = `${BASE}${ROUTES.isAuthorized}`;
export const BACKEND_LOGOUT_ROUTE = `${BASE}${ROUTES.logOut}`;
