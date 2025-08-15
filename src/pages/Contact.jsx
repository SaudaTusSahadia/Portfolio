import React from "react";
import { FaAddressBook, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import SectionContainer from "../Utils/SectionContainer";

const Contact = () => {
  return (
    <SectionContainer className="bg-[#212428]">
      <section id="contact" className="bg-[#212428] text-white">
        <div className="max-w-7xl mx-auto text-center pb-10">
          <h2 className="text-4xl font-bold text-pink-600 mb-5 pb-2 flex items-center justify-start gap-3">
            <FaAddressBook className="text-pink-600" />
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {/* Email */}
            <div className="bg-[#262626] p-6 rounded-xl boxGrad">
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
           <div className="bg-[#262626] p-6 rounded-xl boxGrad">
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
             <div className="bg-[#262626] p-6 rounded-xl boxGrad">
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
    </SectionContainer>
  );
};

export default Contact;
