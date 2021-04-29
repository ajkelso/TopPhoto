import React, { useState } from 'react'
// import { signUpRequest } from '../services/api'
// import { setToken } from '../services/local-storage'
import {Form, Row, Col, Alert} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { signUpAction } from '../redux/actions/userActions'

function SignUp(props){

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        message: ""
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData((prevalue) => {
            return {
                ...prevalue,
                [e.target.name]: e.target.value
            }      
        })
    }

    const buildUserData = () => {
        if( formData.password !== formData.passwordConfirm) {
            setFormData((prevalue) => {
                return {
                    ...prevalue,
                    message: "Passwords do not match"
                }
            })
        } else {
            setFormData((prevalue) => {
                return {
                    ...prevalue,
                    message: ""
                }
            })
            return {
                user: {
                    username: formData.username.trim(),
                    email: formData.email.trim(),
                    password: formData.password
                }
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = buildUserData()
        if (userData){
            dispatch(signUpAction(userData))
            // .then(res => {
            //     if (res.error){
            //         dispatch( {type: 'ADD_ALERT', error: res.error, message: res.message })
            //     } else {
            //         setToken(res.jwt)
            //         dispatch( {type: 'ADD_ALERT', error: res.error, message: res.message })
            //         dispatch( {type: 'CHANGE_AUTH', payload: true} )
            //         props.history.push('/profile')
            //     }
            // })
        }
    }

    return(
        <div>
            <h5 className="d-flex justify-content-center">Sign up to narrow it down</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange} value={formData.username}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="email" placeholder="email" name="email" onChange={handleChange} value={formData.email}/><br/>
                    </Col>
                </Form.Group>
                {formData.message ? <Alert variant="danger" >{formData.message}</Alert> : null }
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="password" placeholder="Confirm Password" name="passwordConfirm" onChange={handleChange} value={formData.passwordConfirm}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="submit"/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignUp