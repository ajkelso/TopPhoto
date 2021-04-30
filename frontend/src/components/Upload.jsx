import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { createGallery } from '../redux/actions/galleryActions'

export default function Upload(){
    const [files, setFiles] = useState([])
    const [title, setTitle] = useState("")
    
    //for rendering only...
    const [photos, setPhotos] = useState([])

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

    const renderImages = () => {
        return photos.map(photo => {
            return <img src={photo.image_url} alt={photo.id} key={photo.id} />
        })
    }

    return (
        <div >
            <h3>Upload a Gallery</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTitleChange} placeholder="Gallery Title" value={title}/>
                <input type='file' multiple onChange={handleFileChange} ></input>
                <input type='submit'></input>
                { photos.length ? renderImages() : null }
            </form>
        </div>
    );
}