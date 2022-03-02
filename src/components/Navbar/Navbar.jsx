import React, { useState } from "react";
import './NavBar.css';
import { NavLink, Nav, NavMenu, Bars } from './NavbarElements';


 const NavBar = () => {
    const [toggle, setToggle ] = useState(false)

    return (
        <React.Fragment>
            <Nav className="px-5 flex">
                <NavLink to='/'>
                    <img src="https://icon-library.com/images/m-icon/m-icon-7.jpg" alt="icon" style={{ width: '50px', height: '50px' }} />
                </NavLink>
                <Bars type="button" onClick={() => { setToggle(!toggle) }} className='my-auto' />               
                
                <NavMenu>
                    <NavLink to='/' activeStyle className='text-decoration-none'>Home</NavLink>
                    <NavLink to='/about' activeStyle className='text-decoration-none'>About Me</NavLink>
                    <NavLink to='/projects' activeStyle className='text-decoration-none'>Projects</NavLink>
                    <NavLink to='/contactme' activeStyle className='text-decoration-none'>Contact Me</NavLink>
                </NavMenu>      
            </Nav>
            <div className="container-fluid flex-column align-items-center toggledNavbar text-white" style={{ display: `${toggle ? 'flex' : 'none'}` }}>
                <a href='/' activeStyle className='text-decoration-none'>Home</a>
                <a href='/about' activeStyle className='text-decoration-none'>About Me</a>
                <a href='/projects' activeStyle className='text-decoration-none'>Projects</a>
                <a href='/contactme' activeStyle className='text-decoration-none'>Contact Me</a>                
            </div>
        </React.Fragment> 
    )
          
}

export default NavBar;

