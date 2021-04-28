import React, { useState } from 'react'
// import { loginRequest } from '../services/api'
// import { setToken } from '../services/local-storage'
import {Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/userActions'


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("") 
    
    const handleChangeUsername = (e) => setUsername(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        login({user:{username: username.trim(), password}})
    }


    return(
        <div>
        
            <h4 className="d-flex justify-content-center">Login Below</h4>
            <Form onSubmit={handleSubmit} >
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="text" placeholder="Username" onChange={handleChangeUsername} value={username}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3" >
                        <Form.Control type="password" placeholder="Password" onChange={handleChangePassword} value={password}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="4" >
                        <Form.Control type="submit"/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )


}

export default Login