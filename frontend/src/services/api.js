import { setToken } from "./localStorage"

const URL = 'http://localhost:3000/'
const usersURL = usersURL
const parseJSON = res => res.json()
const loginHeaders = {
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
}

export function loginRequest(credentials) {
    return fetch(URL + 'login', {
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(credentials)
    })
    .then(parseJSON)
}

export function signupRequest(userData) {
    return fetch(usersURL, {
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(userData)
    })
    .then(parseJSON)
}

export function userRequest() {
    return fetch(URL + "verify", {
        headers: authHeaders()
    })
    .then(parseJSON)
}