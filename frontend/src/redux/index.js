import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { authReducer } from './authReducer'
import { alertsReducer } from './alertsReducer'


export default combineReducers({ user: userReducer, auth: authReducer, alerts: alertsReducer })
