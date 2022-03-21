import React from "react";
import './NavBar.css';
import { Nav, NavLink } from './NavbarElements';


 const NavBar = () => {
    return (
        <React.Fragment>
            <Nav className="px-5 flex">
                <NavLink to='/'>
                    <img src="https://icon-library.com/images/m-icon/m-icon-7.jpg" alt="icon" style={{ width: '50px', height: '50px' }} />
                </NavLink>           
                
                <div className='NavMenu'>
                    <NavLink to='/' activeStyle className='NavLink'>Home</NavLink>
                    <NavLink to='/about' activeStyle className='NavLink'>About Me</NavLink>
                    <NavLink to='/projects' activeStyle className='NavLink'>Projects</NavLink>
                    <NavLink to='/contactme' activeStyle className='NavLink'>Contact Me</NavLink>
                </div>      
            </Nav>
            
        </React.Fragment> 
    )
          
}

export default NavBar;
