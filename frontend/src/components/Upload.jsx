import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { createGallery } from '../redux/actions/galleryActions'
import DragAndDrop from './DragAndDrop'

export default function Upload(){
    const [files, setFiles] = useState([])
    const [title, setTitle] = useState("")

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const galleryData = new FormData()   
        galleryData.append('title', title)   
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            galleryData.append('images[]', file)
        }
        dispatch(createGallery(galleryData, history))
    }

    const handleFileChange = (e) => {
        setFiles(e.target.files)
    }


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div >
            <h3>Upload a Gallery</h3>
            <DragAndDrop/>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTitleChange} placeholder="Gallery Title" value={title}/>
                <input type='file' multiple onChange={handleFileChange} ></input>
                <input type='submit'></input>
            </form>
        </div>
    );
}