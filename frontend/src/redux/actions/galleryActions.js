import { newGalleryRequest, galleryPhotosRequest, galleriesRequest, awsURLRequest, awsUpload, deleteGalleryRequest } from "../../services/api"
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

export const directUpload = (galleryData, files, filesUploaded, setFilesUploaded, setGalleryId) => {
    return function(dispatch) {
        dispatch({ type: 'START_DIRECT_UPLOAD', payload: files.length })
        awsURLRequest(galleryData)
        .then(res => {
            setGalleryId(res.gallery_id)
            for (let i = 0; i < files.length; i++) {
                awsUpload(res.post_urls[i], files[i])
                .then(res => {
                    if (res.ok) {
                        setFilesUploaded(++filesUploaded)
                    }
                })
            }
            const newGallery = {
                title: galleryData.title,
                id: res.gallery_id,
            }
            dispatch({ type: 'ADD_GALLERY_TO_USER', payload: newGallery})
        })
    }
}

export const deleteGallery = (galId, dispatch) => {
    deleteGalleryRequest(galId)
    .then(res => {
        if (res.error) {
            dispatch(errorAction(res.error))
        } else {
            dispatch(messageAction(res.message))
            dispatch({ type: 'DELETE_GALLERY', payload: res.galleryId})
        }
    })
}
