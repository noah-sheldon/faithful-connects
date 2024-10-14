'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Company Logo" className="h-8 w-8" />
        <div className="text-2xl font-bold">
          <Link href="/">Faithful Connects</Link>
        </div>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul className={`lg:flex lg:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full bg-white lg:w-auto lg:bg-transparent lg:py-0 py-4 px-6`}> 
        <li className="border-b lg:border-none py-2 lg:py-0">
          <Link href="/integrations" className="hover:text-blue-600">Integrations</Link>
        </li>
        <li className="border-b lg:border-none py-2 lg:py-0">
          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
        </li>
        <li className="lg:hidden border-b py-2">
          <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 block text-center">Sign Up</Link>
        </li>
        <li className="lg:hidden py-2">
          <Link href="/login" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 block text-center">Login</Link>
        </li>
      </ul>
      <div className="hidden lg:flex space-x-4">
        <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</Link>
        <Link href="/login" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;