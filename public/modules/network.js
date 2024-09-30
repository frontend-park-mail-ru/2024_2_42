'use strict'

import '../constants/api.js'

const handleResponse = (response) => {
    if (!response.ok) {
        return response.json().then(err => {
            throw new Error(err.error);
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
