'use strict';

import { ROUTES } from './routes.js';

const BASE = 'http://localhost:8080';

export const BACKEND_FEED_ROUTE = `${BASE}${ROUTES.main}`;
export const BACKEND_LOGIN_ROUTE = `${BASE}${ROUTES.login}`;
export const BACKEND_SIGNUP_ROUTE = `${BASE}${ROUTES.signup}`;
export const BACKEND_IS_AUTHORIZED_ROUTE = `${BASE}${ROUTES.isAuthorized}`;
export const BACKEND_LOGOUT_ROUTE = `${BASE}${ROUTES.logOut}`;
export const BACKEND_PROFILE_ROUTE = `${BASE}${ROUTES.user}`;
export const BACKEND_GET_USER_AVATAR_ROUTE = `${BASE}${ROUTES.getAvatar}`;
export const BACKEND_PINS_ROUTE = `${BASE}${ROUTES.boardPins}`;
export const BACKEND_VIEW_PIN = `${BASE}${ROUTES.pinView}`;
export const BACKEND_MAKE_BOOKMARK_ROUTE = `${BASE}${ROUTES.bookmark}`
export const BACKEND_DELETE_BOOKMARK_ROUTE = `${BASE}${ROUTES.deleteBookmark}`
export const BACKEND_SAVE_PIN_TO_BOARD = `${BASE}${ROUTES.savePinToBoard}`