import React, { useState } from 'react'

import Login from './Login'
import SignUp from './SignUp'

import Button from 'react-bootstrap/Button'
import { getToken } from '../services/localStorage'
import { Redirect } from 'react-router'

function Home(props) {

    const [login, setLogin] = useState(false)
    const [signUp, setSignUp] = useState(false)

    const handleLoginClick = () => {
        setLogin(true)
        if (signUp) {
            setSignUp(false)
        }
    }

    const handleSignupClick = () => {
        setSignUp(true)
        if (login) {
            setLogin(false)
        }
    }

    if (getToken()){
        return(
            <>
                <Redirect to="/profile"/>
            </>
        )
    }

    return (
        
        <div>

            <h2 class="d-flex justify-content-center">Welcome!</h2>  
            <div class="d-flex justify-content-center">
                <Button variant="outline-info" onClick={handleLoginClick}>Login</Button>{' '}
                <Button variant="outline-info" onClick={handleSignupClick}>SignUp</Button>  
            </div>
            { login ? <Login history={props.history} /> : null }
            { signUp ? <SignUp history={props.history}/> : null }

        </div>
    )
}

export default Home
