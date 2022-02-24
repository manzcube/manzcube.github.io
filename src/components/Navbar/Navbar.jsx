import React from "react";
import './Navbar.css'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'

 const Navbar = () => {
    return (
        <React.Fragment>
            <Nav className="px-5">
                <NavLink to='/'>
                    <img src="https://icon-library.com/images/m-icon/m-icon-7.jpg" alt="icon" style={{ width: '50px', height: '50px' }} />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>about</NavLink>
                    <NavLink to='/contactme' activeStyle>contact me</NavLink>
                    <NavLink to='/projects' activeStyle>projects</NavLink>
                </NavMenu>
            </Nav>
        </React.Fragment>    
    )
}

export default Navbar;