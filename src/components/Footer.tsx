"use client";
import { useState } from 'react';
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <footer className="bg-white py-8 px-4 md:px-8">
      {/* Bandage and Social Media Icons */}
      <div className="bg-gray-200 py-4">
        <div className="flex justify-between items-center container mx-auto">
          <h2 className="text-2xl font-bold">Bandage</h2>
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-blue-600 hover:text-gray-600">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" className="text-blue-600 hover:text-gray-600">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" className="text-blue-600 hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Sections */}
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Company Info Section */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Company Info</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Carrier</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">We are hiring</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Blog</a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:underline">Help Center</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">FAQ</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Feature Section */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Feature</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:underline">Business Marketing</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">User Analytics</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Live Chat</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Unlimited Support</a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 flex-1"
              required
            />
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 bg-slate-200 h-20 flex items-center">
  <p className="ml-24">Made With Love By Finland All Rights Reserved</p>
</div>

    </footer>
  );
}

export default Footer;
