import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux'

export default function Navigation() {

    const user = useSelector(state => state.user)
    console.log(user)

    const loggedInNav = () => {
        return(
        <Navbar bg="light" variant="light" expand="sm" > 
            <Navbar.Brand as={NavLink} to="/">TopPhoto</Navbar.Brand>
            <Nav className="mr-auto">   
                <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link>
            </Nav>  
        </Navbar>
        )
    }

    const loggedOutNav = () => {
        return (
        <Navbar bg="light" variant="light" expand="sm" > 
            <Navbar.Brand as={NavLink} to="/">TopPhoto</Navbar.Brand>
        </Navbar>
        )
    }
    
    
    return(
        <div>
            { user.id ? loggedInNav() : loggedOutNav() }
        </div>
    )
}