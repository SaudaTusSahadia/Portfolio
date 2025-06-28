import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/SaudaTusSahadia',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://linkedin.com/in/sauda-tus-sahadia-022849233/',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    // link: '', 
  },
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    // link: '', 
  },
];

const SocialLinks = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-8">Social Links</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2  rounded-2xl shadow-black shadow-2xl hover:bg-pink-600 transition-all duration-300"
          >
            <span className="text-2xl">{social.icon}</span>
            {/* <span className="hidden sm:inline">{social.name}</span> */}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
