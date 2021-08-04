import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { deleteGallery, getGalleries } from '../redux/actions/galleryActions'
import Button from 'react-bootstrap/Button'

function Galleries(){

    const galleries = useSelector(state => state.user.galleries)
    const userId = useSelector(state => state.user.id)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGalleries(userId))
    }, [])

    const handleGalleryClick = (e) => {
        history.push(`/galleries/${e.target.id}`)
    }

    const handleDelete = (e) => {
        console.log("fired");
        deleteGallery(e.target.id, dispatch)
    }

    const renderGalleries = () => {
        return galleries.map(gal => (
            <div className="gallery" key={gal.id}>
                <h5>{gal.title}</h5>
                <img className="clickable-image" src={gal.cover} alt={gal.title} id={gal.id} onClick={handleGalleryClick} width="200px" height="auto"/>
                <br/>
                <Button variant="outline-secondary" id={gal.id} onClick={handleDelete}>Delete</Button>
            </div>
        ))
    }

    return(
        <div>
            <h4>Galleries</h4>
            { galleries.length ? <div className="user-galleries">{renderGalleries()}</div> : null }
        </div>
    )
}

export default Galleries