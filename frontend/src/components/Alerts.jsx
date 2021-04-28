import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Alert from 'react-bootstrap/Alert'


export default function Alerts() {

    const message = useSelector(state => state.alerts.message)
    const error = useSelector(state => state.alerts.error)

    const dispatch = useDispatch()

    useEffect(() => {
        (message || error) && setTimeout(() => {
            dispatch({type: 'RESET_ALERT'})
        }, 5000)
    },)
    
    return(
        <>
            { message && (<Alert className="sticky-top" variant="success" >
                {message}
            </Alert>) }
            { error && (<Alert variant="danger">
                {error}
            </Alert>) }
        </>
    )
}
