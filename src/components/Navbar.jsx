import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkStyle = `
    relative text-gray-700 hover:opacity-70 text-sm tracking-wide pb-1
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:bg-[#E89161] after:transition-all after:duration-300 after:ease-in-out
  `;

  const mobileNavLinkStyle = `
    relative text-gray-700 text-base tracking-wide py-3 px-6 block
    transition-all duration-200 flex items-center gap-3
  `;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF8F3] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl md:text-3xl font-bold tracking-wide"
            style={{ color: "#E89161" }}
          >
            <img
              className="w-16 h-auto"
              src="leap-ladders-logo.png"
              alt="Leap Ladders Logo"
            />
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkStyle} ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/our-story"
              className={({ isActive }) =>
                `${navLinkStyle} ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Our Story
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${navLinkStyle} ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Services
            </NavLink>
            {/* <a
              href="#"
              className="relative text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide pb-1"
            >
              Toolbox
            </a> */}
            <a
              href="#"
              className="relative text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide pb-1"
            >
              Blogs
            </a>
            {/* <NavLink
              to="/byob"
              className={({ isActive }) =>
                `${navLinkStyle} ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              BYOB
            </NavLink> */}
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `${navLinkStyle} ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Testimonials
            </NavLink>
          </div>

          {/* CTA Button - Hidden on mobile */}
          <a
            href="#"
            className="hidden lg:block px-5 md:px-7 py-2.5 border transition-all text-sm"
            style={{
              borderColor: "#E89161",
              backgroundColor: "#E89161",
              color: "#FFF8F3",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#E89161";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#E89161";
              el.style.color = "#FFF8F3";
            }}
          >
           TAKE THE LEAP 
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-[#E89161]/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-[#E89161] rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-[#E89161] rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-[#E89161] rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 top-0 lg:hidden z-50 bg-white"
            >
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[#E7E7E7]">
                <img
                  className="w-16 h-auto"
                  src="leap-ladders-logo.png"
                  alt="Leap Ladders Logo"
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-[#E89161]/10 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-[#E89161]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="pt-2 pb-6 space-y-1 shadow-2xl border-b border-[#E7E7E7]">
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${mobileNavLinkStyle} ${
                      isActive
                        ? "bg-[#E89161]/5 font-medium text-[#E89161]"
                        : "hover:bg-[#E89161]/5"
                    }`
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </NavLink>
                <NavLink
                  to="/our-story"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${mobileNavLinkStyle} ${
                      isActive
                        ? "bg-[#E89161]/5 font-medium text-[#E89161]"
                        : "hover:bg-[#E89161]/5"
                    }`
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Our Story</span>
                </NavLink>
                <NavLink
                  to="/services"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${mobileNavLinkStyle} ${
                      isActive
                        ? "bg-[#E89161]/5 font-medium text-[#E89161]"
                        : "hover:bg-[#E89161]/5"
                    }`
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Services</span>
                </NavLink>
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="relative text-gray-700 text-base tracking-wide py-3 px-6 block hover:bg-[#E89161]/5 transition-all duration-200 flex items-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span>Toolbox</span>
                </a>
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="relative text-gray-700 text-base tracking-wide py-3 px-6 block hover:bg-[#E89161]/5 transition-all duration-200 flex items-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span>Blogs</span>
                </a>
                <NavLink
                  to="/byob"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${mobileNavLinkStyle} ${
                      isActive
                        ? "bg-[#E89161]/5 font-medium text-[#E89161]"
                        : "hover:bg-[#E89161]/5"
                    }`
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>BYOB</span>
                </NavLink>
                <NavLink
                  to="/testimonials"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${mobileNavLinkStyle} ${
                      isActive
                        ? "bg-[#E89161]/5 font-medium text-[#E89161]"
                        : "hover:bg-[#E89161]/5"
                    }`
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>Testimonials</span>
                </NavLink>

                {/* Mobile CTA Button */}
                <div className="px-6 pt-4">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 w-full text-center px-6 py-3 border-2 transition-all text-sm font-medium rounded-md"
                    style={{
                      borderColor: "#E89161",
                      backgroundColor: "#E89161",
                      color: "#FFF8F3",
                    }}
                    onClick={closeMobileMenu}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>TAKE THE LEAP</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
