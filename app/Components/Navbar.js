'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-bold">
            SMGE
          </div>
          <div className="leading-tight text-gray-800">
            <h3 className="font-bold text-md">ADEKANMI</h3>
            <span className="text-sm text-gray-500">ADEDIGBA</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li><Link href="#home" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="#about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="#projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggle}
          className="md:hidden text-2xl p-2 rounded-md text-blue-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-6 py-6 px-6 text-gray-700 font-medium text-center">
          <Link href="#home" className="hover:text-blue-600" onClick={handleToggle}>Home</Link>
          <Link href="#about" className="hover:text-blue-600" onClick={handleToggle}>About</Link>
          <Link href="#projects" className="hover:text-blue-600" onClick={handleToggle}>Projects</Link>
          <Link href="#contact" className="hover:text-blue-600" onClick={handleToggle}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
