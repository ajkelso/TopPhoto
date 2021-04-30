import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { servicesReducer } from './servicesReducer'
import { galleryReducer } from './galleryReducer'


export default combineReducers({ user: userReducer, services: servicesReducer })
