import { setToken } from "./localStorage"

const URL = 'http://localhost:3000/'
const parseJSON = res => res.json()
const loginHeaders = {
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
}
const authHeaders = () => ({
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
})

export function loginRequest(credentials) {
    return fetch(URL + 'login', {
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(credentials)
    })
    .then(parseJSON)
}

export function signupRequest(userData) {
    return fetch(URL + 'users', {
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(userData)
    })
    .then(parseJSON)
}

export function userRequest() {
    return fetch(URL + "profile", {
        headers: authHeaders()
    })
    .then(parseJSON)
}