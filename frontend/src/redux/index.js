import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { servicesReducer } from './servicesReducer'
import { uploadReducer } from './uploadReducer'


export default combineReducers({ user: userReducer, services: servicesReducer, uploadData: uploadReducer })
