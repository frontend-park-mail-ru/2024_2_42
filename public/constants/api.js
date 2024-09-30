const BASE = 'http://localhost:8080'

export const ROUTES = {
    login: '/login',
    signup: '/signup',
    feed: '/feed'
};

export const BACKEND_LOGIN_ROUTE = `${BASE}${ROUTES.login}`
export const BACKEND_SIGNUP_ROUTE = `${BASE}${ROUTES.signup}`
export const BACKEND_FEED_ROUTE = `${BASE}${ROUTES.feed}`
