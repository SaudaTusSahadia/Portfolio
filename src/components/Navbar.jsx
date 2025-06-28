import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const links = (
        <>
            <li><a className="hover:text-pink-600 font-medium">I Am</a></li>
            <li><a className="hover:text-pink-600 font-medium">My Experience</a></li>
            <li><a className="hover:text-pink-600 font-medium">Education</a></li>
            {/* <li><a className="hover:text-pink-600 font-medium">Resume</a></li> */}
            <li><a className="hover:text-pink-600 font-medium">Portfolio</a></li>
            <li><a className="hover:text-pink-600 font-medium">Blog</a></li>
            <li><a className="hover:text-pink-600 font-medium">Contacts</a></li>
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
