import { loginRequest, signupRequest, verifyRequest } from "../../services/api"
import { clearToken, setToken } from "../../services/localStorage"
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

export function verifyToken(){
    return function(dispatch) {
        dispatch( { type: 'START_VERIFY_TOKEN'} )
        verifyRequest()
        .then(res => {
            console.log(res)
            if (res.error){
                clearToken()
                dispatch(errorAction(res.error))
            } else {
                dispatch(setUserAction(res.user))
            }
        })
    }
}