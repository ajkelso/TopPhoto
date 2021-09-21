import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { clearToken } from '../services/localStorage'
import { useDispatch } from 'react-redux'


export default function Logout() {

    const dispatch = useDispatch()

    useEffect(() => {
        clearToken()
        dispatch({type: 'CLEAR_USER'})
    }, [dispatch])

    return <Redirect to='/'/>
}
