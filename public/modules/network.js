'use strict';

import '../constants/api.js';
import { BACKEND_IS_AUTHORIZED_ROUTE } from '../constants/api.js';

/**
 * Handles response provided by fetch API. In case of error displayes corresponding message if corresponding flag is given
 * @param {Promise<Response>} response - promise of the response from fetch API post method
 * @param {boolean} shouldLog - should error message be displayed in error case or not
 * @returns {Object} - response presented in JSON form
 */
const handleResponse = async (response, shouldLog) => {
	const jsonResponse = await response.json()
	if (!response.ok && shouldLog) {
		// error displaying code will be here
	}

	return jsonResponse;
};

/**
 * Checks whether user is authorized or not
 * @returns {boolean} - result of user  authorization check
 */
export const isAuthorized = async () => {
	const resp = await getMethod(BACKEND_IS_AUTHORIZED_ROUTE, false)
	if (resp.code_status !== undefined && resp.message !== undefined) {
		return false;
	}

	return true;
}

/**
 * Executes get method request to backend API
 * @param {string} apiRoute - url address of corresponding backend resource
 * @param {boolean} shouldLog - should error message be displayed in error case or not
 * @returns {Object} - response presented in JSON form
 */
export const getMethod = async (apiRoute, shouldLog) => {
	const response = await fetch(apiRoute, {
		method: 'GET',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await handleResponse(response, shouldLog);
};

/**
 * Executes post method request to backend API
 * @param {string} apiRoute - url address of corresponding backend resource
 * @param {Object} dataEntity - request body
 * @param {boolean} shouldLog - should error message be displayed in error case or not
 * @returns {Object} - response presented in JSON form
 */
export const postMethod = async (apiRoute, dataEntity, shouldLog) => {
	const response = await fetch(apiRoute, {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(dataEntity),
	})

	const jsonData = await handleResponse(response, shouldLog);
	return jsonData;
};
