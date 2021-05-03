import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGalleryPhotos } from '../redux/actions/galleryActions'
import { upvoteRequest } from '../services/api'

function Compare(props) {
    //render first 2 side-by-side
    //allow user to chose the best one (or both or niether)
    //replace the 2 images with the next 2 in array
    //finish and start over?
    
    const [currGallery, setCurrGallery] = useState({})
    const [galPos, setGalPos] = useState(0)

    const dispatch = useDispatch()

    let galleryPosition = 0

    console.log(galPos)

    useEffect(() => {
        dispatch(getGalleryPhotos(props.match.params.id, setCurrGallery))
    }, [])

    const handlePhotoClick = (e) => {
        upvoteRequest(e.target.id)
        setGalPos(galPos + 2)
    }

    const renderComparison = () => {
        if (galPos < currGallery.photos.length) {  
            return (
                <div>
                    <img className="photo-contest" id={currGallery.photos[galPos].id} onClick={handlePhotoClick} src={currGallery.photos[galPos].url} alt="photo 1"/>
                    <img className="photo-contest" id={currGallery.photos[galPos].id} onClick={handlePhotoClick} src={currGallery.photos[galPos + 1].url} alt="photo 2"/>
                </div>
            )
        }
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
