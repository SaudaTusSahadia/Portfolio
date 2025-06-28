import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto text-center pb-10">
        <h2 className="text-4xl font-bold text-pink-600 mb-8 border-b-2 inline-block pb-2">
          Contact Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {/* Email */}
          <div className="bg-[#262626] p-6 rounded-xl border border-pink-600 shadow-md hover:shadow-pink-600 transition-all duration-300">
            <FaEnvelope className="text-3xl text-pink-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <a
              href="mailto:your@email.com"
              className="text-gray-300 hover:text-pink-500 transition-all"
            >
              sauda.cse8.bu@email.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#262626] p-6 rounded-xl border border-pink-600 shadow-md hover:shadow-pink-600 transition-all duration-300">
            <FaPhoneAlt className="text-3xl text-pink-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-1">Phone</h3>
            <a
              href="tel:+8801234567890"
              className="text-gray-300 hover:text-pink-500 transition-all"
            >
              +880 130-885-5956
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#262626] p-6 rounded-xl border border-pink-600 shadow-md hover:shadow-pink-600 transition-all duration-300">
            <FaWhatsapp className="text-3xl text-pink-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-all"
            >
              +880 130-885-5956
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
