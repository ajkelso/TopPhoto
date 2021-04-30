import { newGalleryRequest } from "../../services/api"

export const createGallery = (galleryData) => {
    return function(dispatch) {
        dispatch({ type: 'START_GALLERY_UPLOAD'})
        newGalleryRequest(galleryData)
        .then(res => console.log(res))
    }
}