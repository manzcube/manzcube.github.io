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
                    <NavLink to='/' activeStyle className='text-decoration-none'>Home</NavLink>
                    <NavLink to='/about' activeStyle className='text-decoration-none'>About Me</NavLink>
                    <NavLink to='/projects' activeStyle className='text-decoration-none'>Projects</NavLink>
                    <NavLink to='/contactme' activeStyle className='text-decoration-none'>Contact Me</NavLink>
                </NavMenu>
            </Nav>
        </React.Fragment>    
    )
}

export default Navbar

