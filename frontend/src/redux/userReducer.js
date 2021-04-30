export function userReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_USER':
            return action.payload
        case 'ADD_GALLERY':
            return {
                ...state,
                galleries: [...state.galleries, action.payload],
            }
        default:
            return state

    }
}