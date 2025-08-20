import React from 'react';
import { FaBars } from 'react-icons/fa'; // <-- import icon here
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
                {/* Left: Logo and Dropdown */}
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <FaBars className="text-2xl" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#1a1a1a] rounded-box w-52 text-white"
                        >
                            {links}
                        </ul>
                    </div>

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

                {/* Right: Resume Button */}
                <div className="navbar-end">
                    <a
                        href="https://drive.google.com/file/d/1WGsKwDRmOMDPldM2JY2jznb70c6kuiEa/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-pink-600 hover:bg-pink-700 text-white border-none font-semibold"
                    >
                        Resume
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
