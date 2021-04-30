import { newGalleryRequest } from "../../services/api"
import { errorAction, messageAction } from "./serviceActions"

export const createGallery = (galleryData) => {
    return function(dispatch) {
        dispatch({ type: 'START_UPLOAD'})
        newGalleryRequest(galleryData)
        .then(res => { 
            if (res.error) {
                dispatch(errorAction(res.error))
            } else {
                dispatch(messageAction(res.message))
                dispatch({ type: 'ADD_GALLERY', payload: res.gallery })
            }
        })
    }
}