import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Alerts() {

    const message = useSelector(state => state.services.message)
    const error = useSelector(state => state.services.error)

    const dispatch = useDispatch()

    useEffect(() => {
        (message || error) && setTimeout(() => {
            dispatch({type: 'RESET_ALERT'})
        }, 5000)
    },)
    
    return(
        <div className="alerts">
            { message && (<p className="alert-banner success">
                {message}
            </p>) }
            { error && (<p className="alert-banner error">
                {error}
            </p>) }
        </div>
    )
}
