"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; 
import { FaRegHeart } from "react-icons/fa"; 
import { FiChevronDown } from "react-icons/fi"; 

const Navbar: React.FC = () => {
  const item = useSelector((state: RootState) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="flex items-center space-x-2 text-3xl font-bold">
          <span className="text-black">Bandage</span>
        </div>
      </div>
      <ul
        className={`${
          isMenuOpen
            ? "absolute left-0 top-16 w-full bg-[#FFFBF0] shadow-lg"
            : "hidden"
        } md:flex md:static md:w-auto space-y-2 md:space-y-0 md:space-x-8 text-base font-medium`}
      >
        <Link href="/">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
            Home
          </li>
        </Link>
        
        <div className="relative group">
          <button className="flex items-center space-x-1 text-black text-xl hover:text-primary-blue transition">
            <span>Shop</span>
            <FiChevronDown />
          </button>
          <div className="absolute left-0 hidden w-40 py-2 mt-1 bg-white rounded-lg shadow-lg text-gray-900 group-hover:block">
            <a href="#shop1" className="block px-4 py-2 hover:bg-gray-100">
              Shop 1
            </a>
            <a href="#shop2" className="block px-4 py-2 hover:bg-gray-100">
              Shop 2
            </a>
          </div>
        </div>

        <Link href="/about">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
            About
          </li>
        </Link>

        <Link href="/Blog">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
            Blog
          </li>
        </Link>

        <Link href="/ProductData">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
            Products
          </li>
        </Link>

        <Link href="/pricing">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
            Pricing
          </li>
        </Link>

        <Link href="/Contact">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
            Contact
          </li>
        </Link>
      </ul>

      <div className="flex items-center space-x-4">
        <Link href="/cart">
          <FiShoppingCart className="text-2xl cursor-pointer mr-2" />
        </Link>
        {item.length}

        <FiUser className="text-2xl cursor-pointer" />

        <Link href="/favorites" className="text-white px-4 py-2 rounded-md flex items-center">
          <FaRegHeart className="text-black" /> {/* 🤍 Transparent White Heart */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
