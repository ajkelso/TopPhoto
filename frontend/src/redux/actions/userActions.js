import { loginRequest, signupRequest, userRequest } from "../../services/api"
import { clearToken, setToken } from "../../services/localStorage"
import { messageAction, errorAction } from './serviceActions'


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
                history.push('/profile')
            }
        })
    }
}

export function signUpAction(userData, history){
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
                history.push('/profile')
            }
        })
    }
}

export function getUser(history){
    return function(dispatch) {
        dispatch( { type: 'START_VERIFY_TOKEN'} )
        userRequest()
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
