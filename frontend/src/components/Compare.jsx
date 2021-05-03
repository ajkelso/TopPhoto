import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGalleryPhotos } from '../redux/actions/galleryActions'

function Compare(props) {

    //get all photos in gallery
    //render first 2 side-by-side
    //allow user to chose the best one (or both or niether)
    //replace the 2 images with the next 2 in array
    //finish and start over?
    const [currGallery, setCurrGallery] = useState({})
    const dispatch = useDispatch()

    console.log(props.match.params.id)

    useEffect(() => {
        dispatch(getGalleryPhotos(props.match.params.id, setCurrGallery))
    }, [])
    
    return(
        <div>
            Compare
        </div>
    )
}

export default Compare
