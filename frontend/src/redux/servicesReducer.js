const initState = {
    error: null,
    message: null,
    uploading: false
   };
   
export function servicesReducer(state = initState, action){
        switch (action.type) {
        case 'ADD_ERROR':
            return {
                ...state,
                error: action.error,
                uploading: false
            }
        case 'ADD_MESSAGE' :
            return {
                ...state,
                message: action.message,
                uploading: false
            }
        case 'RESET_ALERT':
            return initState
        case 'START_UPLOAD':
            return {
                ...state,
                uploading: true
            }
        case 'END_UPLOAD':
            return {
                ...state,
                uploading: false
            }
        default:
            return state;
    }
}