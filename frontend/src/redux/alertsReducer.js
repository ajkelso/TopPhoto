const initState = {
    error: null,
    message: null
   };
   
export function alertsReducer(state = initState, action){
        console.log(action)
        switch (action.type) {
        case 'ADD_ERROR':
            return {
                ...state,
                error: action.error
            }
        case 'ADD_MESSAGE' :
            return {
                ...state,
                error: action.message
            }
        case 'RESET_ALERT':
            return initState
        default:
            return state;
    }
}