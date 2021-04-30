import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../redux/actions/userActions'

function Profile() {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [])

    return(
        <div>
            <h2 className="text-center">Welcome, {user.username}!</h2>
            { user.galleries.length ? "Render Galleries" : <Link className="btn btn-info btn-lg d-flex justify-content-center" to="/galleries/new">Upload a Gallery</Link> }
        </div>
    )
}

export default Profile