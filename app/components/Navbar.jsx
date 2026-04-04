"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "../utils/util";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

   const navItems = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Categories", id: "categories" },
    { name: "Why Us", id: "why" },
  ];

  return (
    <nav className="bg-[#FAEDCD] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
            <Image
                src="/logo.jpg"
                alt="Company Logo"
                width={60}
                height={60}
            />
          <span className="text-xl font-bold text-[#6B705C]">
            Shriramhgr Foods
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#2D2D2D] font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#D4A373] cursor-pointer transition"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-[#D4A373] text-white px-5 py-2 rounded-xl hover:bg-[#b08968] transition"
        >
          Enquiry
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAEDCD] px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <p
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer"
            >
              {item.name}
            </p>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-[#D4A373] text-white py-2 rounded-xl"
          >
            Enquiry
          </button>
        </div>
      )}
    </nav>
  );
}