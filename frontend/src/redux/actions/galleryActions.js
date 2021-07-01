import { newGalleryRequest, galleryPhotosRequest, galleriesRequest, awsURLRequest, awsUpload } from "../../services/api"
import { errorAction, messageAction } from "./serviceActions"

export const createGallery = (galleryData, history) => {
    return function(dispatch) {
        dispatch({ type: 'START_UPLOAD'})
        newGalleryRequest(galleryData)
        .then(res => { 
            if (res.error) {
                dispatch(errorAction(res.error))
            } else {
                dispatch(messageAction(res.message))
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

export const getGalleries = (userId) => {
    return function(dispatch) {
        dispatch({ type: 'START_GET_GALLERIES'})
        galleriesRequest(userId)
        .then(res => {
            if (res.error) {
                dispatch(errorAction(res.error))
            } else {
                dispatch({type: 'ADD_GALLERIES', payload: res.galleries})
            }
        })
    }
}

export const directUpload = (imagesData, files, filesUploaded, setFilesUploaded) => {
    return function(dispatch) {
        dispatch({ type: 'START_DIRECT_UPLOAD', payload: files.length })
        awsURLRequest(imagesData)
        .then(res => {
            for (let i = 0; i < files.length; i++) {
                awsUpload(res.post_urls[i], files[i])
                .then(res => {
                    if (res.ok) {
                        setFilesUploaded(++filesUploaded)
                    }
                })
            }
        })
    }
}