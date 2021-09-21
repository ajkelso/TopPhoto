import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { deleteGallery, getGalleries } from '../redux/actions/galleryActions'
import Gallery from './Gallery'

function Galleries(){

    const galleries = useSelector(state => state.user.galleries)
    const userId = useSelector(state => state.user.id)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGalleries(userId))
    }, [dispatch, userId])

    const handleGalleryClick = (e) => {
        history.push(`/galleries/${e.target.id}`)
    }

    const handleDelete = (e) => {
        console.log("fired");
        deleteGallery(e.target.id, dispatch)
    }

    const renderGalleries = () => {
        return galleries.map(gal => (
            <Gallery key={gal.id} cover={gal.cover} title={gal.title} id={gal.id} handleGalleryClick={handleGalleryClick} handleDelete={handleDelete}/>
        ))
    }

    return(
        <div>
            <h4>Galleries</h4>
            { galleries.length ? <div className="user-galleries">{renderGalleries()}</div> : <Redirect to='/profile' /> }
        </div>
    )
}

export default Galleries