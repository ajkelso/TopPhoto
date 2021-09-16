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
    
    const rejectOtherPhoto = (e) => {
        const rejectedId = parseInt(e.target.getAttribute('reject'))
        if(rejectedId){
            upvoteRequest(rejectedId)
        }
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
                return <img className="photo-contest" reject={currGallery.photos[galPos + 1] ? currGallery.photos[galPos + 1].id : null} onClick={rejectOtherPhoto} src={currGallery.photos[galPos].url} alt="photo 1"/>
            } else if (currGallery.photos.length > 2) {
                return (
                    <div className="complete">
                        <p>Round Complete!</p>
                        <Button variant="outline-secondary" onClick={nextRound}>Start Round {roundCount + 1}</Button> 
                    </div>
                )
            } else {
                return (
                    <div className="complete">
                        <p>Competition Complete!</p>
                        <Button variant="outline-secondary" onClick={nextRound}>View Results</Button>
                    </div>
                )
            }
        }

        const imageB = () => {
            if(galPos + 1 < currGallery.photos.length){
                return <img className="photo-contest" reject={currGallery.photos[galPos].id} onClick={rejectOtherPhoto} src={currGallery.photos[galPos + 1].url} alt="photo 2"/>
            } else if (galPos < currGallery.photos.length){
                return <Button variant="outline-secondary" className="complete" reject={currGallery.photos[galPos].id} onClick={rejectOtherPhoto}>Skip</Button>
            }
        }

        return (
            <div id="battle-zone">
                {imageA()}
                {imageB()}
            </div>
        )
    }

    const renderPhotos = () => {
        if(currGallery.photos){
            if (currGallery.photos.length === 1){
                return(
                    <div id="fav-photo">
                        <div>
                            <h3>Your favorite photo is:</h3>
                            <img className="favorite-photo" id={currGallery.photos[0].id} onClick={rejectOtherPhoto} src={currGallery.photos[0].url} alt="Favorite Photo"/>
                        </div>
                    </div>
                )
            } else {
                return renderComparison()
            }
        }
    }
    
    return(
        <div id="compare">
            <h2>Compare</h2>
            <div className="gallery-info">
                <div className="gallery-title">
                    <p><strong>Gallery Title:</strong> {currGallery.title}</p>
                </div>
                <div classname="round-count">
                    <p><strong>Round:</strong> {roundCount}</p>
                </div>
                { currGallery.goal ? <p>GOAL: {currGallery.goal}</p> : null }
            </div>
            { renderPhotos() }
        </div>
    )
}

export default Compare
