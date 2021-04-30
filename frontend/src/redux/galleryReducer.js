const initState = {
    galleries: [],
    uploading: false
}

export function galleryReducer(state = initState, action) {
    switch (action.type) {
        case 'START_GALLERY_UPLOAD':
            return {
                ...state,
                uploading: true
            }
        case 'UNSUCCESSFUL_UPLOAD':
            return {
                ...state,
                uploading: false
            }
        // case 'ADD_GALLERY':
        //     return {
        //         galleries: [...state.galleries, action.payload],
        //         uploading: false
        //     }
        default:
            return state
    }
}