'use client';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 md:p-6 flex justify-between items-center z-50 border-b border-gray-800">
      <div className="flex items-center">
        <img src="/images/gaming_gully_logo.jpg" alt="Gaming Gully Logo" className="h-12 md:h-16" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#c8ff00] text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-8">
        <a href="#home" className="hover:text-[#c8ff00] transition-colors duration-300 font-medium">Home</a>
        <a href="#experiences" className="hover:text-[#c8ff00] transition-colors duration-300 font-medium">Experiences</a>
        <a href="#past-events" className="hover:text-[#c8ff00] transition-colors duration-300 font-medium">Past Events</a>
        <a href="#subscribe" className="hover:text-[#c8ff00] transition-colors duration-300 font-medium">Subscribe</a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#home" className="hover:text-[#c8ff00] transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#experiences" className="hover:text-[#c8ff00] transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>Experiences</a>
            <a href="#past-events" className="hover:text-[#c8ff00] transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>Past Events</a>
            <a href="#subscribe" className="hover:text-[#c8ff00] transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>Subscribe</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
