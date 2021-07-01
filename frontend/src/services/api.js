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

export function newGalleryRequest(galleryData){
    return fetch(URL + 'galleries', {
        method: 'POST',
        headers: authHeaders(),
        body: galleryData
    })
    .then(parseJSON)
}

export function galleryPhotosRequest(galleryId){
    return fetch(URL + `galleries/${galleryId}`, {
        headers: authHeaders()
    })
    .then(parseJSON)
}

export function galleriesRequest(userId){
    return fetch(URL + `users/${userId}/galleries`, {
        headers: authHeaders()
    })
    .then(parseJSON)
}

export function upvoteRequest(photoId){
    return fetch(URL + `photos/${photoId}`, {
        method: 'PATCH',
        headers: authHeaders()
    })
    .then(parseJSON)
}

export function awsURLRequest(imagesData){
    return fetch(URL + 'galleries', {
        method: 'POST',
        headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify(imagesData)
    })
    .then(parseJSON)
}

export function awsUpload(postUrl, file){
    return fetch(postUrl, {
        method: 'PUT',
        headers: { "Content-Type": file.type,'acl': 'public-read' },
        body: file
    })
    .then(res => console.log(res))
}