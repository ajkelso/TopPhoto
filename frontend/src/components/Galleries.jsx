import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'

function Galleries(){

    const galleries = useSelector(state => state.user.galleries)
    const history = useHistory()

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
            {renderGalleries()}
        </div>
    )
}

export default Galleries