import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import { verifyToken } from '../redux/actions/userActions'

function PrivateRoute({ component: Component, ...rest }) {
    
    const user = useSelector(state => state.user)
    
    const dispatch = useDispatch()
    const history = useHistory()


    const renderIfVerified = () => {
        if (!user.id) {
            dispatch(verifyToken(history))
        } else {
            return( 
                <Route {...rest} render={(props) => (
                    <Component {...props} />
                    )}
                />
            )
        }
    }

    return(
        <>
        { renderIfVerified() }
        </>
    );
}

export default PrivateRoute;