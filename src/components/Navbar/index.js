import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpeg'
import './style.css'

export default function NavBarMain() {
    return (
        <div className="navbar-div">
            <Navbar bg="light" expand="lg" className="Main-navbar" >
            <Navbar.Brand href="#home"><img className="navbar-logo" src={logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar-links">
                <Nav.Link> <Link to={'/profile'}>Profile</Link></Nav.Link>
                <Nav.Link> <Link to={'/DeedList'}> Deed List</Link></Nav.Link>
                <Nav.Link><Link to={'/Deedward'}>Deedward</Link></Nav.Link>
                <Nav.Link> <Link to={'/Deeddone'}>Deeds Done</Link></Nav.Link>
                <Nav.Link> <Link to={'/Deedcard'}>Deeds Card</Link></Nav.Link>
                <Nav.Link> <Link to={'/faq'}>FAQ's</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
