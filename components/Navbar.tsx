"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursDropdownOpen, setIsCoursDropdownOpen] = useState(false);
  const [isDesktopCourseDropdownOpen, setIsDesktopCourseDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Course",
      href: "#",
      dropdown: [
        { name: "Live Course", href: "/course" },
        { name: "Recorded Course", href: "/course" },
        { name: "Real Time Program", href: "/rtp" },
      ],
    },
    { name: "Instructor", href: "#instructor" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full z-50 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img 
              src="https://ik.imagekit.io/qujrbo6v2/Upskill_academy_transparant.png.png" 
              alt="UpSkill Academy" 
              className="h-10 md:h-14 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <motion.button
                    onClick={() => setIsDesktopCourseDropdownOpen(!isDesktopCourseDropdownOpen)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center gap-2"
                  >
                    {link.name}
                    <FaChevronDown className={`w-3 h-3 transition-transform ${isDesktopCourseDropdownOpen ? "rotate-180" : ""}`} />
                  </motion.button>
                ) : (
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center gap-2"
                  >
                    {link.name}
                  </motion.a>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && isDesktopCourseDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsDesktopCourseDropdownOpen(false)}
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link
              href="/register"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="block"
              >
                Register Now
              </motion.span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsCoursDropdownOpen(!isCoursDropdownOpen)}
                      className="w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center justify-between font-medium"
                    >
                      {link.name}
                      <FaChevronDown
                        className={`w-3 h-3 transition-transform ${
                          isCoursDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isCoursDropdownOpen && (
                      <div className="pl-4 bg-gray-50 py-2">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-center"
            >
              Register Now
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
