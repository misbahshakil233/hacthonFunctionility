import React from 'react';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';


const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex justify-center items-center bg-white py-16 sm:py-20 md:py-28">
        <div className="flex flex-col md:flex-row max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          {/* Left Text Section */}
          <div className="flex-1 pr-8 text-center md:text-left mb-4 md:mb-0">
            <div className="w-16 h-1 bg-indigo-600 mx-auto md:mx-0 mb-6"></div>
            <h2 className="text-xs font-bold text-black mt-28">CONTACT US</h2>
            <h2 className="text-4xl md:text-6xl font-bold text-black mt-4">
              Get in touch <br />
              <span className="mt-5 block text-lg md:text-2xl">today!</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>

            <div className="text-center md:text-left mt-8">
              <p className="text-black text-xl font-bold">Phone: +451 215 215</p>
              <p className="text-black text-xl font-bold">Fax: +451 215 215</p>
              <div className="flex justify-center md:justify-start space-x-6 mt-8">
                <a href="https://twitter.com" className="text-black hover:text-gray-600">
                  <FaTwitter size={24} />
                </a>
                <a href="https://facebook.com" className="text-black hover:text-gray-600">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://instagram.com" className="text-black hover:text-gray-600">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" className="text-black hover:text-gray-600">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0">
            {/* Larger Circle background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-pink-300 rounded-full opacity-50 z-0"></div>

            {/* Smaller Circle background */}
            <div className="absolute top-28 left-1 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 bg-pink-300 rounded-full opacity-50 z-0"></div>
            <div className="absolute left-24 bottom-32 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-indigo-600 rounded-full opacity-50 z-0"></div>

            {/* Image */}
            <Image
              src="/Contact.png" // Hero image path
              alt="About Us Image"
              width={500}
              height={500}
              className="rounded-lg z-10"
            />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-col items-center text-center py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-black">VISIT OUR OFFICE</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">
          We help small businesses <br />
          with big ideas
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg">
            <FaPhoneAlt className="text-blue-500 text-7xl mb-4" />
            <p className="text-gray-700 text-sm font-bold">georgia.young@example.com</p>
            <p className="text-gray-700 text-sm font-bold">georgia.young@ple.com</p>
            <p className="text-gray-700 text-sm font-bold mt-10">Get Support</p>
            <button className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-[#252B42] p-6 rounded-lg">
            {/* Icon with blur effect */}
            <div className="relative mb-4">
              <FaPhoneAlt className="text-blue-500 text-7xl blur-md" />
            </div>
            <p className="text-white text-sm font-bold">georgia.young@example.com</p>
            <p className="text-white text-sm font-bold">georgia.young@ple.com</p>
            <p className="text-white text-sm font-bold mt-10">Get Support</p>
            <button className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg">
            <FaEnvelope className="text-blue-500 text-7xl mb-4" />
            <p className="text-gray-700 text-sm font-bold">georgia.young@example.com</p>
            <p className="text-gray-700 text-sm font-bold">georgia.young@ple.com</p>
            <p className="text-gray-700 text-sm font-bold mt-10">Get Support</p>
            <button className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="flex flex-col items-center text-center py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-black">WE Cant WAIT TO MEET YOU</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">
          Let’s Talk
        </h1>
        <button className="bg-blue-600 px-6 py-4 rounded-lg text-white mt-10 transition-all duration-300 hover:bg-blue-700">
          Try it free now
        </button>
      </div>
      
    </div>
  );
};

export default Page;
