import React from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import bannerImage from '../assets/photo_2025-06-28_13-10-43.jpg'; 

const Banner = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Content */}
        <div >
          <div className='bg-[#262626] mb-8 p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300'>
            <div className="flex items-center gap-3 mb-4 text-pink-600">
            <FaUser size={24} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-pink-600">Sauda Tus Sahadia</span>
          </h1>
          <p className="text-gray-300 mb-6">
            Web designer and developer currently studying in University of Barishal.
          </p>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <FaBriefcase className="text-pink-600" />
              Web Designer & Developer
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-pink-600" />
              sauda.cse8.bu@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-600" />
              Barishal, Sagordi 23
            </li>
          </ul>
          </div>

          <div className='bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300'>
            <p className="mb-4 text-sm uppercase text-gray-400 tracking-wider">
            Download my curriculum vitae:
          </p>

          <div className="flex gap-4">
            <a href="#" className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded shadow-2xl font-semibold">
              Download CV
            </a>
            <a href="#" className="bg-transparent shadow-2xl border border-pink-600 hover:bg-pink-700 hover:text-white px-6 py-2 rounded font-semibold text-pink-600">
              Contact Me
            </a>
          </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImage}
            alt="profile"
            className="rounded-xl w-[300px] md:w-[400px] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
