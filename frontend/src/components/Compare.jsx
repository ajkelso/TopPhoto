import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGalleryPhotos } from '../redux/actions/galleryActions'

function Compare(props) {
    //render first 2 side-by-side
    //allow user to chose the best one (or both or niether)
    //replace the 2 images with the next 2 in array
    //finish and start over?
    
    const [currGallery, setCurrGallery] = useState({})
    const dispatch = useDispatch()

    let galleryPosition = 0

    console.log(galleryPosition)

    useEffect(() => {
        dispatch(getGalleryPhotos(props.match.params.id, setCurrGallery))
    }, [])

    const renderComparison = () => {
        return (
            <div>
                <img className="photo-contest" src={currGallery.photos[galleryPosition].url} alt="photo 1"/>
                <img className="photo-contest" src={currGallery.photos[galleryPosition + 1].url} alt="photo 2"/>
            </div>
        )
    }
    // console.log(currGallery.photos[galleryPosition].url)
    
    return(
        <div>
            <h2>Compare</h2>
            <h4>{currGallery.title}</h4>
            { currGallery.goal ? <p>GOAL: {currGallery.goal}</p> : null }
            { currGallery.photos ? renderComparison() : null }
        </div>
    )
}

export default Compare
