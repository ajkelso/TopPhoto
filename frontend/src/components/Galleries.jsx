import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

function Galleries(){

    const galleries = useSelector(state => state.user.galleries)

    const history = useHistory()

    const handleGalleryClick = (e) => {
        console.log(e.target)
        history.push('/compare')
    }

    const renderGalleries = () => {
        return galleries.map(gal => (
            <div>
                <h5>{gal.title}</h5>
                <img src={gal.photos[0].url} alt={gal.id} id={gal.id} onClick={handleGalleryClick} width="200px" height="auto"/>
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