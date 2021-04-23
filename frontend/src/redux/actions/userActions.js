import { loginRequest } from "../../services/api"


export function login(credentials){
    return(dispatch) => {
        loginRequest(credentials)
    }
}