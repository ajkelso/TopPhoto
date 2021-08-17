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
            <Nav className="d-flex align-items-center">   
                <Nav.Link as={NavLink} to="/profile"><p className="d-flex align-items-center">Profile</p></Nav.Link>
                {user.galleries.length ? <Nav.Link as={NavLink} to='/my-galleries'><p className="navi-link">Galleries</p></Nav.Link>: null}
                <Nav.Link as={NavLink} to="/galleries/new"><p className="navi-link">Upload</p></Nav.Link>
                <Nav.Link as={NavLink} to='/logout'><p className="navi-link">Logout</p></Nav.Link>
            </Nav>  
        )
    }
    
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="sm" className="d-flex align-items-center" > 
                <Navbar.Brand as={NavLink} id="brand-name" to="/"><img className="logo" src="../TopPhotoLogo2.png" atl="topPhoto-logo"/>TopPhoto</Navbar.Brand>
                { user.id ? loggedInNav() : null }
            </Navbar>
        </div>
    )
}