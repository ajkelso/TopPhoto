export function authReducer(state = { isAuthenticated: false }, action ){
    switch (action.type) {
        case 'LOGIN':
            return { isAuthenticated: true }
        case 'LOGOUT':
            return { isAuthenticated: false }
        default:
            return state
    }    
}