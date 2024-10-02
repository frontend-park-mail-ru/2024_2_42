'use strict';

import '../constants/api.js';
import { BACKEND_IS_AUTHORIZED_ROUTE } from '../constants/api.js';

const handleResponse = async (response, shouldLog) => {
	const jsonResponse = await response.json()
	if (!response.ok && shouldLog) {
		const popup = document.getElementById('popupMessage');

		const s = `${jsonResponse.message}`;
		popup.textContent = s && s[0].toUpperCase() + s.slice(1);
		popup.style.visibility = 'visible';

		setTimeout(function () {
			popup.style.visibility = 'hidden';
		}, 5000);
	}

	return jsonResponse;
};

export const isAuthorized = async () => {
	const resp = await getMethod(BACKEND_IS_AUTHORIZED_ROUTE, false)
	if (resp.code_status !== undefined && resp.message !== undefined) {
		return false;
	}

	return true;
}

export const getMethod = async (apiRoute, shouldLog) => {
	const response = await fetch(apiRoute, {
		method: 'GET',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const jsonData = await handleResponse(response, shouldLog);
	return jsonData;
};

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
