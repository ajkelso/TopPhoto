import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function DragAndDrop(props) {

    const dispatch = useDispatch()
    const uploadData = useSelector(state => state.uploadData)
    console.log(uploadData.files)

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'SET_DROP_DEPTH', dropDepth: uploadData.dropDepth + 1})
    }
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'SET_DROP_DEPTH', dropDepth: uploadData.dropDepth - 1})
        // if (uploadData.dropDepth > 0) return 
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    }
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
    }
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        let files = [...e.dataTransfer.files];
        if(files && files.length > 0){
            const existingFiles = uploadData.fileList.map(f => f.name)
            files = files.filter(f => !existingFiles.includes(f.name))

            dispatch({ type: 'ADD_FILE_TO_LIST', files });
            e.dataTransfer.clearData();
            dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
            dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
        }
    }

    return (
        <div className={ uploadData.inDropZone ? 'drag-drop-zone inside-drag-area': 'drag-drop-zone'}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <p>Drag Files Here to Upload</p>
        
        </div>
    )
}