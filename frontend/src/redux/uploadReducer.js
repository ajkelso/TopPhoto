const initState = {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
    uploading: false
}

export function uploadReducer(state = initState, action) {
    
    switch (action.type) {
        case 'SET_DROP_DEPTH':
            return { ...state, dropDepth: action.dropDepth }
        case 'SET_IN_DROP_ZONE':
            return { ...state, inDropZone: action.inDropZone };
        case 'ADD_FILE_TO_LIST':
            //WHY DOESN'T FILE SAVE TO STATE??
            console.log(action.files)
            return { ...state, fileList: state.fileList.concat(action.files) };
        case 'START_DIRECT_UPLOAD' :
            return {...state, uploading: true }
        case 'SUCCESSFUL_GALLERY_UPLOAD' :
            return {...state, uploading: false }
        default:
            return state;
    }

}