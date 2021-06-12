export function userReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_USER':
            return action.payload
        case 'ADD_GALLERIES' :
            return {
                ...state,
                galleries: action.payload
            }

        case 'ADD_GALLERY':
            return {
                ...state,
                galleries: [...state.galleries, action.payload],
            }
        case 'CLEAR_USER' :
            return {}
        default:
            return state

    }
}