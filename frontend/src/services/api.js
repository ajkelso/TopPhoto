import { setToken } from "./localStorage"

const URL = 'http://localhost:3000/'
const usersURL = URL + 'users'
const parseJSON = res => res.json()
const loginHeaders = {
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
}

export function loginRequest(credentials) {
    console.log(credentials);
    return fetch(URL + 'login', {
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(credentials)
    })
    .then(parseJSON)
    .then(res => console.log(res))
    //     res => {
    //     if(res.token){
    //         setToken(res.token)
    //     }
    //     return res
    // })
}