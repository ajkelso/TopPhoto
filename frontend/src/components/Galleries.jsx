import React from 'react'
import { useSelector } from 'react-redux'

function Galleries(){

    const galleries = useSelector(state => state.user.galleries)

    const renderGalleries = () => {
        return galleries.map(gal => <h4>{gal.title}</h4>)
    }

    return(
        <div>
            Galleries Comp
            {renderGalleries()}
        </div>
    )
}

export default Galleries