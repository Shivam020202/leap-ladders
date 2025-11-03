import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-[#E89161]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Section - Logo and 4 Info Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo - Leftmost */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center sm:justify-start lg:col-span-1"
          >
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/leap-ladders-logo.png"
                alt="Leap Ladders Logo"
                className="w-[85%] h-[85%] object-contain"
              />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div>
              <p className="leading-relaxed" style={{ color: "#E89161" }}>
                488 Madison Avenue, Suite 2300
              </p>
              <p className="leading-relaxed" style={{ color: "#E89161" }}>
                New York, NY 10022
              </p>
            </div>
            <div>
              <p style={{ color: "#E89161" }}>Phone: (212) 555-7810</p>
            </div>
            <div>
              <p style={{ color: "#E89161" }}>
                E-mail:{" "}
                <a
                  href="mailto:hello@leapladders.com"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#E89161" }}
                >
                  hello@leapladders.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="space-y-2">
              <li
                className="text-xl font-medium mb-3"
                style={{ color: "#E89161" }}
              >
                Services
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#E89161" }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#E89161" }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#E89161" }}
                >
                  About
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ul className="space-y-2">
              <li
                className="text-xl font-medium mb-3"
                style={{ color: "#E89161" }}
              >
                Socials
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#E89161" }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#E89161" }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#E89161" }}
                >
                  Twitter
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3
              className="text-xl font-medium mb-4"
              style={{ color: "#E89161" }}
            >
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
                className="w-full bg-transparent pb-2 placeholder-gray-400 focus:outline-none transition-colors"
                style={{
                  color: "#E89161",
                  borderBottom: "1px solid rgba(232, 145, 97, 0.5)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderBottom = "1px solid #E89161")
                }
                onBlur={(e) =>
                  (e.target.style.borderBottom =
                    "1px solid rgba(232, 145, 97, 0.5)")
                }
              />
              <button
                type="submit"
                className="flex items-center hover:opacity-80 transition-opacity font-medium"
                style={{ color: "#E89161" }}
              >
                Submit
                <span className="ml-2">↗</span>
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-3 leading-relaxed">
              By clicking 'Submit', I agree to the processing of my personal
              data as described in the Privacy Policy.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright and Privacy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm pt-6"
          style={{ borderTop: "1px solid rgba(232, 145, 97, 0.2)" }}
        >
          <p style={{ color: "#E89161" }}>
            ©2025 LEAP LADDERS. All rights reserved
          </p>
          <a
            href="#privacy"
            className="hover:opacity-70 transition-opacity mt-2 md:mt-0"
            style={{ color: "#E89161" }}
          >
            Privacy policy
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
