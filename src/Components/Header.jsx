import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Skeleton } from "@mui/material";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/solution", label: "Solution" },
  { to: "/contact", label: "Contact Us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#2A2928] fixed w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 top-0 left-0 z-50 font-jakarta shadow-md">
      <div className="container mx-auto max-w-[1100px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={closeMenu}>
            {!isLogoLoaded && (
              <Skeleton
                variant="rectangular"
                className="h-14 w-auto"
                aria-label="Your Company Logo"
              />
            )}
            <img
              src={logo}
              alt="Company Logo"
              className="h-14 w-auto"
              aria-label="Your Company Logo"
              style={{ display: isLogoLoaded ? "block" : "none" }}
              onLoad={() => setIsLogoLoaded(true)}
            />
          </Link>
        </div>

        {/* Nav links (center) */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`font-medium text-base transition-colors focus:outline-none hover:underline ${
                location.pathname === link.to
                  ? "text-white"
                  : "text-gray-200 hover:text-white focus:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Button (right) */}
        <div className="hidden md:block">
          <Link to="/security-submit">
            <button className="bg-[#1B1B1C] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] transition-colors">
              Security Submit
            </button>
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="focus:outline-none text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden bg-[#2A2928] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
        style={{ transitionProperty: "max-height" }}
      >
        <nav className="flex flex-col space-y-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`font-medium text-base transition-colors focus:outline-none hover:underline ${
                location.pathname === link.to
                  ? "text-white"
                  : "text-gray-200 hover:text-white focus:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/security-submit" onClick={closeMenu}>
            <button className="bg-[#1B1B1C] text-white font-medium px-4 py crush2 rounded-lg hover:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] transition-colors w-full text-left">
              Security Submit
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
