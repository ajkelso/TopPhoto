import { loginRequest } from "../../services/api"
import { setToken } from "../../services/localStorage"


export function login(credentials, history){
    return function(dispatch) {
        console.log("userAction");
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