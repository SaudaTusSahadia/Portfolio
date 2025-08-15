import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#212428] text-white border-t border-pink-600">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About / Name */}
        <div>
          <h3 className="text-2xl font-bold text-pink-500 mb-2">Sauda Tus Sahadia</h3>
          <p className="text-gray-400 text-sm">
            Frontend Developer | React Enthusiast | CSE Student, University of Barishal
          </p>
        </div>

        {/* Quick Links (optional) */}
        <div>
          <h4 className="text-lg font-semibold text-pink-500 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/iAm" className="hover:text-pink-400 transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-pink-400 transition">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-pink-400 transition">Skills</Link></li>
            <li><Link to="/contacts" className="hover:text-pink-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-pink-500 mb-3">Connect with Me</h4>
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-pink-600">
            <a
              href="mailto:sauda.cse8.bu@email.com"
              className="hover:text-pink-400 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/SaudaTusSahadia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sauda-tus-sahadia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sauda Tus Sahadia — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
