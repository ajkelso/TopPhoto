import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux'
// import topPhotoLogo from '.../public/TopPhotoLogo.png'

export default function Navigation() {

    const user = useSelector(state => state.user)

    const loggedInNav = () => {
        return(
            <Nav className="mr-auto">   
                <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                {user.galleries ? <Nav.Link as={NavLink} to='/my-galleries'>Galleries</Nav.Link>: null}
                <Nav.Link as={NavLink} to="/galleries/new">Upload</Nav.Link>
                <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link>
            </Nav>  
        )
    }
    
    return(
        <div>
            <Navbar bg="light" variant="light" expand="sm" > 
                <Navbar.Brand as={NavLink} to="/"><img className="logo" src="../TopPhotoLogo.png" atl="topPhoto-logo"/>  </Navbar.Brand>
                { user.id ? loggedInNav() : null }
            </Navbar>
        </div>
    )
}