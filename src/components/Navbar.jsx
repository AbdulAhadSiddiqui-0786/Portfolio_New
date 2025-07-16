import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 text-lg ${
        theme === "light" ? "bg-white text-black" : " text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl sm:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 animate-pulse select-none">
          ABD
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="block sm:hidden">
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-full transition duration-300 focus:outline-none ${
              theme === "light"
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-white hover:bg-gray-300 text-black"
            }`}
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="/"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#Certificates"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Certificates
          </a>
          <a
            href="#skills"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#Contact"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Contact
          </a>
          {/* Circular Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ${
              theme === "light"
                ? "bg-white-400 text-white hover:bg-pink-600"
                : " text-pink-300 hover:bg-pink-600"
            }`}
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="sm:hidden py-2 bg-opacity-90">
          <div className="flex flex-col items-center space-y-2">
            <a
              href="#/"
              onClick={toggleMenu}
              className="hover:text-pink-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="hover:text-pink-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="hover:text-pink-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="hover:text-pink-400 transition-colors duration-300"
            >
              Contact
            </a>
            {/* Mobile Circular Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ${
                theme === "light"
                  ? "bg-yellow-400 text-white hover:bg-yellow-500"
                  : "bg-gray-80 text-yellow-300 hover:bg-gray-700"
              }`}
            >
              {theme === "light" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
