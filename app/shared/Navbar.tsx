'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="flex items-center space-x-3">
        {/* Using next/image for optimized image loading */}
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={40} // Set width in pixels
          height={40} // Set height in pixels
          className="h-10 w-10"
        />
        <div className="text-xl font-extrabold text-gray-800 tracking-tight">
          <Link href="/">Faithful Connects</Link>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none transition-all duration-300"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex lg:space-x-8 items-center absolute lg:relative top-16 lg:top-auto left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-md lg:p-0 px-6 py-4 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <li className="lg:border-none py-2 lg:py-0 transition duration-300">
          <Link href="/integrations">
            <span className="text-gray-800 hover:text-blue-600 transition">
              Integrations
            </span>
          </Link>
        </li>
        <li className="lg:border-none py-2 lg:py-0 transition duration-300">
          <Link href="/pricing">
            <span className="text-gray-800 hover:text-blue-600 transition">
              Pricing
            </span>
          </Link>
        </li>
        <li className="lg:hidden py-2 transition duration-300">
          <Link href="/signup">
            <span className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </span>
          </Link>
        </li>
        <li className="lg:hidden py-2 transition duration-300">
          <Link href="/login">
            <span className="block text-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              Login
            </span>
          </Link>
        </li>
      </ul>

      {/* Desktop Sign Up/Login Buttons */}
      <div className="hidden lg:flex space-x-4">
        <Link href="/signup">
          <span className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </span>
        </Link>
        <Link href="/login">
          <span className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
            Login
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
