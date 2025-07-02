import React from "react";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  // Data for quick links
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Solution", path: "/solution" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of use", path: "/terms" },
  ];

  return (
    <footer className="bg-[#1B1B1C] text-[#D7D7D7] h-fit py-12 px-4 sm:px-6 md:px-8 lg:px-12 font-jakarta">
      <div className="max-w-[1100px] mx-auto">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* First Div: Logo, Text, and Copyright */}
          <div className="flex flex-col items-start text-left">
            <img
              src={logo}
              alt="Company Logo"
              className="h-16 mb-4"
              aria-label="Your Company Logo"
            />
            <p className="text-sm mb-4 max-w-xs">
              Premier Defence & Security Solutions Provider
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          {/* Second Div: Contact Information */}
          <div className="flex flex-col items-start md:items-start text-left md:text-left">
            <h3 className="text-lg text-white text-start font-bold mb-10">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-end ">
                <span>28, Katampe Road, Jahi District Abuja-FCT, Nigeria</span>
              </li>

              <li className="flex items-center ">
                <span className="font-bold mr-2">Email: </span>
                enquiry@diconxshield.com
              </li>
              <li className="flex items-center ">
                <span className="font-bold mr-2">Phone: </span> +234 703 303
                6373
              </li>
            </ul>
          </div>

          {/* Third Div: Quick Links with Absolute Positioning */}
          <div className="flex flex-col md:items-center  text-left md:text-left relative">
            <h3 className="text-lg text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm list-disc list-outside pl-6 sm:pl-8">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-[#CECECE] hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <Link to={link.path} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
