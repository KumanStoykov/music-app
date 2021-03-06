import * as userStorage from '../utility/userStorage.js';
const host = 'http://localhost:3030';

const requester = async (method, url, data) => {

    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = userStorage.getUserData();

    if (user) {
        options.headers['X-Authorization'] = user.token;
    }

    try {
        const res = await fetch(host + url, options);
        if (res.ok == false) {
            if (res.status == 403) {
               userStorage.removeUserData();
            }
            const error = await res.json();
            throw new Error(error);
        }

        if (res.status == 204) {
            return res;
        } else {
            return res.json();
        }

    } catch (err) {
        alert(err.message);
        throw err
    }
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');