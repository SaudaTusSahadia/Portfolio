import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';
import './Navbar.css';

const Navbar = () => {
    const links = (
        <>
            <NavLink to='/'><li><a className="hover:text-pink-600 font-medium">I Am</a></li></NavLink>
            <NavLink to='/experience'><li><a className="hover:text-pink-600 font-medium">Experience</a></li></NavLink>
            <NavLink to='/education'><li><a className="hover:text-pink-600 font-medium">Education</a></li></NavLink>
            <NavLink to='/projects'><li><a className="hover:text-pink-600 font-medium">Projects</a></li></NavLink>
            <NavLink to='/skills'><li><a className="hover:text-pink-600 font-medium">Skills</a></li></NavLink>
            <NavLink to='/blog'><li><a className="hover:text-pink-600 font-medium">Blogs</a></li></NavLink>
            <NavLink to='/contacts'><li><a className="hover:text-pink-600 font-medium">Contact</a></li></NavLink>
        </>
    );

    return (
        <div className="bg-[#1a1a1a] text-white shadow-md sticky top-0 z-50">
            <div className="navbar max-w-7xl mx-auto px-4 py-2">
                {/* Left: Logo */}
                <div className="navbar-start">
                    <a className="text-xl font-bold flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                        <span className="text-white">SAUDA</span>
                    </a>
                </div>

                {/* Center: Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {links}
                    </ul>
                </div>

                {/* Right: Buy/Resume Button */}
                <div className="navbar-end">
                    <a className="btn bg-pink-600 hover:bg-pink-700 text-white border-none font-semibold">Resume</a>
                </div>

                {/* Mobile: Dropdown */}
                <div className="dropdown lg:hidden ml-auto">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#1a1a1a] rounded-box w-52 text-white"
                    >
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
