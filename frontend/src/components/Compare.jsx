import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Compare(props) {

    //get all photos in gallery
    //render first 2 side-by-side
    //allow user to chose the best one (or both or niether)
    //replace the 2 images with the next 2 in array
    //finish and start over?
    const dispatch = useDispatch()

    console.log(props.match.params.id)

    useEffect(() => {
        dispatch(getGalleryPhotos())
    })
    
    return(
        <div>
            Compare
        </div>
    )
}

export default Compare
