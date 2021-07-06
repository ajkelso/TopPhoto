import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGalleryPhotos } from '../redux/actions/galleryActions'
import { upvoteRequest } from '../services/api'
import Button from 'react-bootstrap/Button'

function Compare(props) {
    //allow user to chose the best one (or both or niether)
    //finish and start over?
    
    const [currGallery, setCurrGallery] = useState({})
    const [galPos, setGalPos] = useState(0)
    const [roundCount, setRoundCount] = useState(1)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getGalleryPhotos(props.match.params.id, setCurrGallery))
    }, [roundCount])
    
    const handlePhotoClick = (e) => {
        upvoteRequest(e.target.id)
        setGalPos(galPos + 2)
    }

    const nextRound = () => {
        setCurrGallery({})
        setGalPos(0)
        setRoundCount(roundCount + 1)
    }

    const renderComparison = () => {
        const imageA = () => {
            if(galPos < currGallery.photos.length){
                return <img className="photo-contest clickable-image" id={currGallery.photos[galPos].id} onClick={handlePhotoClick} src={currGallery.photos[galPos].url} alt="photo 1"/>
            } else if (currGallery.photos.length > 2) {
                return (
                    <div>
                        <p>Round Complete!</p>
                        <Button variant="outline-secondary" onClick={nextRound}>Click to start Round {roundCount + 1}</Button> 
                    </div>
                )
            } else {
                return (
                    <div>
                        <p>Competition Complete!</p>
                        <Button variant="outline-secondary" onClick={nextRound}>Click to View Results</Button>
                    </div>
                )
            }
        }

        const imageB = () => {
            if(galPos + 1 < currGallery.photos.length){
                return <img className="photo-contest clickable-image" id={currGallery.photos[galPos + 1].id} onClick={handlePhotoClick} src={currGallery.photos[galPos + 1].url} alt="photo 2"/>
            } else if (galPos < currGallery.photos.length){
                return <Button variant="outline-secondary" onClick={() => setGalPos(galPos + 1)}>Skip</Button>
            }
        }

        return (
            <div>
                {imageA()}
                {imageB()}
            </div>
        )
    }

    const renderPhotos = () => {
        if(currGallery.photos){
            if (currGallery.photos.length === 1){
                return(
                    <div>
                        <h3>Your favorite photo is:</h3>
                        <img className="favorite-photo" id={currGallery.photos[0].id} onClick={handlePhotoClick} src={currGallery.photos[0].url} alt="Favorite Photo"/>
                    </div>
                )
            } else {
                return renderComparison()
            }
        }
    }
    
    return(
        <div>
            <h2>Compare</h2>
            <h4>{currGallery.title}</h4>
            <h5>Round: {roundCount}</h5>
            { currGallery.goal ? <p>GOAL: {currGallery.goal}</p> : null }
            { renderPhotos() }
        </div>
    )
}

export default Compare
