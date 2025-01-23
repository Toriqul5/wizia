import React, { useState } from "react";
import { Button } from "@heroui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About Us", "Pricing", "Customers", "Solution",];

  return (
    <nav className="bg-dark w-full px-4 py-3 sm:px-10 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="Logo.png" alt="Wizia Logo" className="h-4" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center ">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            {item}
          </a>
        ))}

        <div className="space-y-2 bg-transparent">
            <Button variant='solid' color='primary' className="bg-[#0FF1F6] text-black text-[13px]" radius='full'>Book a Demo</Button>
        </div>

        <div className="space-y-2 bg-transparent">
            <Button variant='solid' color='primary' className="border border-white bg-transparent text-white text-[13px]" radius='full'>Contact us</Button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-dark text-center py-4 lg:hidden">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block text-white py-2 hover:text-blue-500 transition duration-300"
            >
              {item}
            </a>
          ))}
          <button className="bg-teal-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 my-2">
            Book a Demo
          </button>
          <button className="border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-500 transition duration-300">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
