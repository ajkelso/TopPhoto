import { loginRequest, signupRequest, verifyRequest } from "../../services/api"
import { clearToken, setToken } from "../../services/localStorage"
import { messageAction, errorAction } from './alertActions'


export const setUserAction = (user) => {
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
                console.log(res.user)
                setToken(res.jwt)
                dispatch(messageAction(res.message))
                dispatch(setUserAction(res.user))
            }
        })
    }
}

export function verifyToken(history){
    return function(dispatch) {
        dispatch( { type: 'START_VERIFY_TOKEN'} )
        verifyRequest()
        .then(res => {
            if (res.error){
                clearToken()
                dispatch(errorAction(res.error))
                history.push("/")
            } else {
                dispatch(setUserAction(res.user))
            }
        })
    }
}