/* Aisha Abdulhafiz 301331337 9/27/24 */
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react';
import './navbar.css';
import logo1 from '../assets/logo1.jpg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo1} alt='' className='logo' />
            <div className='desktopMenu'>
                <NavLink to='/intro' className='desktopMenuListItem' activeClassName='active'>Home</NavLink>
                <NavLink to='/skills' className='desktopMenuListItem' activeClassName='active'>About</NavLink>
                <NavLink to='/works' className='desktopMenuListItem' activeClassName='active'>Projects</NavLink>
                <NavLink to='/services' className='desktopMenuListItem' activeClassName='active'>Services</NavLink>
            </div>
            <button className='desktopMenuBtn'><Link to="/contacts"style={{ textDecoration: 'none', color: 'inherit' }}>Contact Me</Link></button>
        </nav>
    );
}

export default Navbar;
