import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { getGalleries } from '../redux/actions/galleryActions'

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

    const renderGalleries = () => {
        return galleries.map(gal => (
            <div>
                <h5>{gal.title}</h5>
                <img className="clickable-image" src={gal.cover} alt={gal.id} id={gal.id} onClick={handleGalleryClick} width="200px" height="auto"/>
            </div>
        ))
    }

    return(
        <div>
            <h4>Galleries</h4>
            { galleries.length ? renderGalleries() : null }
        </div>
    )
}

export default Galleries