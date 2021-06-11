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
            <div className="d-flex justify-content-center" >
                { user.galleries ? <Link className="btn btn-info btn-outline-light btn-lg" to="/my-galleries">View Your Galleries</Link> : null }
                <Link className="btn btn-info btn-outline-light btn-lg" to="/galleries/new">Upload a Gallery</Link>
            </div>
        </div>
    )
}

export default Profile