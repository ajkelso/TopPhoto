import React from 'react'

export default function DragAndDrop(props) {
    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation()
    }
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation()
    }
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation()
    }
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation()
    }

    return (
        <div className={'drag-drop-zone'}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <p>Drag Files Here to Upload</p>
        
        </div>
    )
}