'use strict'

import '../constants/api.js'
import { getMessageFromHttpStatus } from './error.js';


const handleResponse = (response) => {
    if (!response.ok) {
        const popup = document.getElementById("popupMessage");
        popup.textContent = getMessageFromHttpStatus(response.status)
        popup.style.visibility = 'visible';

        setTimeout(function () {
            document.getElementById('popupMessage').style.visibility = 'hidden';
        }, 5000);

        return response.json().then(err => {
            console.error(err.error);
        });
    }

    return response.json();
}

export const getMethod = (apiRoute) => {
    fetch(apiRoute, {
        method: 'GET',
        'mode': 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(handleResponse)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export const postMethod = (apiRoute, dataEntity) => {
    fetch(apiRoute, {
        method: 'POST',
        'mode': 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataEntity)
    })
        .then(handleResponse)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
