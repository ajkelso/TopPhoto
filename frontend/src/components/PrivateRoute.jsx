import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { authRequest } from '../services/api';
import { getToken, clearToken } from '../services/local-storage';
import { clearUser } from '../redux/actions/userActions'

function PrivateRoute({ component: Component, ...rest }) {
    
    const user = useSelector(state => state.user)
    
    const dispatch = useDispatch()
    const location = useLocation()
    
    const authenticateToken = () => {
        //change to get user
        authRequest()
        .then(res => {
        if (res.error){
            clearUser()
            dispatch( {type: 'ADD_ALERT', error: res.error, message: res.message })
            dispatch({ type: 'CHANGE_AUTH', payload: false })
            return <Redirect to='/' />
        } else {
            dispatch({ type: 'CHANGE_AUTH', payload: true })
            return <Redirect to={location.pathname} />
        }
        })
    }

    const regularRender = () => {
        return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? (
            <Component {...props} />
            ) : (
            <Redirect to="/" />
            )
            )}
        />
        );
    }

    return(
        <>
        {(getToken() && !isAuthenticated) ? authenticateToken() : regularRender()}
        </>
    );
}

export default PrivateRoute;