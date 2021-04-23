import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { clearToken } from '../services/local-storage'
import { clearUser } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'


export default function Logout() {

    const dispatch = useDispatch()

    useEffect(() => {
        clearToken()
        dispatch(clearUser())
        dispatch({type: 'LOGOUT'})
    }, [])

    return <Redirect to='/'/>
}
