import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = `
    relative text-gray-700 hover:opacity-70 text-sm tracking-wide pb-1
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:bg-[#E89161] after:transition-all after:duration-300 after:ease-in-out
  `;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF8F3] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-2">
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
            <a
              href="#"
              className="relative text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide pb-1"
            >
              Toolbox
            </a>
            <a
              href="#"
              className="relative text-gray-700 hover:opacity-70 transition-opacity text-sm tracking-wide pb-1"
            >
              Blogs
            </a>
            <NavLink
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
            </NavLink>
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

          {/* CTA Button - filled by default, becomes transparent on hover */}
          <a
            href="#"
            className="px-5 md:px-7 py-2.5 border transition-all text-sm"
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
            Get in touch ↗
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
