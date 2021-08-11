import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { createGallery, directUpload } from '../redux/actions/galleryActions'
import DragAndDrop from './DragAndDrop'
import Form from 'react-bootstrap/Form'

export default function Upload(){
    const [files, setFiles] = useState([])
    const [title, setTitle] = useState("")
    const [filesUploaded, setFilesUploaded] = useState(null)
    const [galleryId, setGalleryId] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const imagesData = files.map(file => (
            {
                img_name: file.name, 
                img_size: file.size, 
                img_type: file.type,
                gal_title: title
            }
        ))
        const galleryData = {
            title,
            images: imagesData
        }
        dispatch(directUpload(galleryData, files, filesUploaded, setFilesUploaded, setGalleryId))


        //THIS WORKS FOR NON-DIRECT UPLOAD
        // e.preventDefault()
        // const galleryData = new FormData()   
        // galleryData.append('title', title)   
        // for (let i = 0; i < files.length; i++) {
        //     const file = files[i]
        //     galleryData.append('images[]', file)
        // }
        // dispatch(createGallery(galleryData, history))
    }

    const handleFileChange = (e) => {
        // setFiles(e.target.files)
        setFiles(files.concat(Array.from(e.target.files)))
    }


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const renderFileList = () => {
        return (
            <ul>
                {files.map(file => <li>{file.name}</li>)}
            </ul>
        )
    }

    const sendToCompare = () => {
        dispatch({ type: 'SUCCESSFUL_GALLERY_UPLOAD'})
        dispatch({ type: 'ADD_MESSAGE', message: "Gallery successfully created!"})
        return <Redirect to={`/galleries/${galleryId}`} />
    }


    return (
        <div id="upload">
            { files.length == filesUploaded ? sendToCompare() : null }
            <h3>Upload a Gallery</h3>
            <Form onSubmit={handleSubmit} className="upload-form">
                <Form.Group>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control size="sm" type="text" onChange={handleTitleChange} value={title}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Images: </Form.Label>
                    <Form.Label className="d-flex justify-content-center" >
                        <input type="file" style={{display: "none"}} multiple onChange={handleFileChange} />
                        <DragAndDrop files={files} setFiles={setFiles}/>
                    </Form.Label>
                </Form.Group>
                {files.length ? renderFileList() : null }
                <Form.Group>
                    <Form.Control type="submit" value="Upload" disabled={!files.length} />
                </Form.Group>
            </Form>
        </div>
    );
}