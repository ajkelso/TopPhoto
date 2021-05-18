import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function DragAndDrop({setFiles, files}) {

    const dispatch = useDispatch()
    const uploadData = useSelector(state => state.uploadData)
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
        let droppedFiles = [...e.dataTransfer.files];
        if(droppedFiles && droppedFiles.length > 0){
            
            // droppedFiles = droppedFiles.filter(f => !existingFiles.includes(f.name))
            setFiles(files.concat(droppedFiles))
            // dispatch({ type: 'ADD_FILE_TO_LIST', files });
            dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
            dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
            e.dataTransfer.clearData();
        }
    }

    return (
        <div className={ uploadData.inDropZone ? 'drag-drop-zone inside-drag-area': 'drag-drop-zone'}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <p>Drag Files Here or Click to Upload</p>        
        </div>
    )
}