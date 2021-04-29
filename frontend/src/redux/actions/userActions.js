import { loginRequest, signupRequest } from "../../services/api"
import { setToken } from "../../services/localStorage"


export function login(credentials, history){
    return function(dispatch) {
        dispatch({type: 'START_LOGIN'})
        loginRequest(credentials)
        .then(res => {
            if (res.error) {
                dispatch({type: 'ADD_ERROR', error: res.error })
            } else {
                setToken(res.jwt)
                dispatch( {type: 'ADD_MESSAGE', message: res.message })
                dispatch( {type: 'SET_USER', payload: res.user} )
            }
        })
    }
}

export function signUp(userData){
    return function(dispatch) {
        dispatch({ type: 'START_SIGNUP'})
        signupRequest(userData)
    }
}