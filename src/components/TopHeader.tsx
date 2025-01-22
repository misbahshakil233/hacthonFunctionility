"use client";

import { FaMobileAlt, FaEnvelope, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-[#252B42] text-white text-sm py-2 hidden lg:flex">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          {/* Mobile Icon and Number */}
          <div className="flex items-center space-x-2">
            <FaMobileAlt />
            <span>(225) 555-0118</span>
          </div>
          {/* Email Icon and Address */}
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <span>
            <strong>Follow Us</strong> and get a chance to win <strong>80% off</strong>
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <span>Follow Us:</span>
          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaFacebook className="hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
