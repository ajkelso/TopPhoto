import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { createGallery } from '../redux/actions/galleryActions'
import DragAndDrop from './DragAndDrop'
import Form from 'react-bootstrap/Form'

export default function Upload(){
    const [files, setFiles] = useState([])
    const [title, setTitle] = useState("")
    console.log(files);
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
        // setFiles(e.target.files)
        setFiles(Array.from(e.target.files))
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

    return (
        <div >
            <h3>Upload a Gallery</h3>
            <Form onSubmit={handleSubmit} >
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
                    <Form.Control type="submit" />
                </Form.Group>
            </Form>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTitleChange} placeholder="Gallery Title" value={title}/>
                <input type='file' multiple onChange={handleFileChange} ></input>
                <input type='submit'></input>
            </form> */}
        </div>
    );
}