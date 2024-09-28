/* Aisha Abdulhafiz 301331337 9/27/24 */
import { Link } from "react-router-dom";
import React from 'react';
import './navbar.css';
import logo1 from  '../assets/logo1.jpg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo1} alt='' className='logo'/>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500}className='desktopMenuListItem'>Projects</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Services</Link>
            </div>
            <button className='desktopMenuBtn'><Link to="/contacts"style={{ textDecoration: 'none', color: 'inherit' }}>Contact Me</Link>
            </button>
        </nav>
    );
    
}

export default Navbar;