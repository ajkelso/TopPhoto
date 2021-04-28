import { loginRequest } from "../../services/api"
const parseJSON = res => res.json()


export function login(credentials){
    return(dispatch) => {
        loginRequest(credentials)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                dispatch({type: 'LOGOUT'})
                dispatch({type: 'ADD_ERROR', error: res.error })
            }
        })
        .then(userData => {

        })
    }
}