import { loginRequest, signupRequest } from "../../services/api"
import { setToken } from "../../services/localStorage"
import { messageAction, errorAction } from './alertActions'


const setUserAction = (user) => {
    return { type: 'SET_USER', payload: user }
}

export function login(credentials, history){
    return function(dispatch) {
        dispatch({type: 'START_LOGIN'})
        loginRequest(credentials)
        .then(res => {
            if (res.error) {
                dispatch(errorAction(res.error))
            } else {
                setToken(res.jwt)
                dispatch(messageAction(res.message))
                dispatch(setUserAction(res.user))
            }
        })
    }
}

export function signUpAction(userData){
    return function(dispatch) {
        dispatch({ type: 'START_SIGNUP'})
        signupRequest(userData)
        .then(res => {
            if (res.error) {
                dispatch(errorAction(res.error))
            } else {
                setToken(res.jwt)
                dispatch(messageAction(res.message))
                dispatch(setUserAction(res.user))
            }
        })
    }
}

export function getUser(){
    return function(dispatch) {
        dispatch( { type: 'START_GET_USER'} )
        userRequest()
    }
}