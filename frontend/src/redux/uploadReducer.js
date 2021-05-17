const initState = {
    dropDepth: 0,
    inDropZone: false,
    fileList: []
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
        default:
            return state;
    }

}