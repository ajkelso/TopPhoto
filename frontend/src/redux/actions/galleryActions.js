import { newGalleryRequest, galleryPhotosRequest } from "../../services/api"
import { errorAction, messageAction } from "./serviceActions"

export const createGallery = (galleryData, history) => {
    return function(dispatch) {
        dispatch({ type: 'START_UPLOAD'})
        newGalleryRequest(galleryData)
        .then(res => { 
            if (res.error) {
                dispatch(errorAction(res.error))
            } else {
                console.log(res.gallery);
                dispatch(messageAction(res.message))
                dispatch({ type: 'ADD_GALLERY', payload: res.gallery })
                history.push("/my-galleries")
            }
        })
    }
}

export const getGalleryPhotos = (galleryId, setCurrGallery) => {
    return function(dispatch) {
        dispatch({ type: 'START_GET_PHOTOS' })
        galleryPhotosRequest(galleryId)
        .then(res => {
            if (res.error) {
                dispatch(errorAction(res.error))
            } else {
                dispatch({type: 'SUCCESS_GET_PHOTOS'})
                setCurrGallery(res)
            }
        })

    }
}