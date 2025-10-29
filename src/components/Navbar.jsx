import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF8F3] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl md:text-3xl font-bold tracking-wide"
            style={{ color: "#E89161" }}
          >
            LEAP LADDERS
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-10">
            <a
              href="#"
              className="text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide"
            >
              Our Story
            </a>
            <a
              href="#"
              className="text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide"
            >
              Toolbox
            </a>
            <a
              href="#"
              className="text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide"
            >
              BYOB
            </a>
            <a
              href="#"
              className="text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide"
            >
              Testimonials
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="px-5 md:px-7 py-2.5 border transition-all text-sm"
            style={{
              borderColor: "#E89161",
              color: "#E89161",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#E89161";
              e.target.style.color = "#FFF8F3";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#E89161";
            }}
          >
            Get in touch ↗
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
