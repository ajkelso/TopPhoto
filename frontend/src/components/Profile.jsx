import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../redux/actions/userActions'
import { Link } from 'react-router-dom'

function Profile() {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [])

    return(
        <div>
            <h2 className="text-center">Welcome, {user.username}!</h2>
            
        </div>
    )
}

export default Profile