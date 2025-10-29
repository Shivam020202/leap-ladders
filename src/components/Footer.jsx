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
    <footer className="bg-[#E89161] text-white">
      <div className="max-w-7xl mx-auto px-4  py-12 md:py-16">
        {/* Top Section - Contact Info, Links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <p className="text-white/90 leading-relaxed">
                488 Madison Avenue, Suite 2300
              </p>
              <p className="text-white/90 leading-relaxed">
                New York, NY 10022
              </p>
            </div>
            <div>
              <p className="text-white/90">Phone: (212) 555-7810</p>
            </div>
            <div>
              <p className="text-white/90">
                E-mail:{" "}
                <a
                  href="mailto:hello@leapladders.com"
                  className="hover:text-white transition-colors"
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
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="space-y-2">
              <li className="text-xl">Services</li>
              <li>
                <a
                  href="#portfolio"
                  className=" text-white/70 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className=" text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="space-y-2">
              <li className=" text-xl ">Socials</li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
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
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-medium mb-4">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
                className="w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="flex items-center text-white hover:text-white/80 transition-colors font-medium"
              >
                Submit
                <span className="ml-2">↗</span>
              </button>
            </form>
            <p className="text-white/60 text-xs mt-3 leading-relaxed">
              By clicking 'Submit', I agree to the processing of my personal
              data as described in the Privacy Policy.
            </p>
          </motion.div>
        </div>

        {/* Large Brand Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight">
            LEAP LADDERS.
          </h2>
        </motion.div>

        {/* Bottom Section - Copyright and Privacy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center text-white/70 text-sm border-t border-white/20 pt-6"
        >
          <p>©2025 LEAP LADDERS. All rights reserved</p>
          <a
            href="#privacy"
            className="hover:text-white transition-colors mt-2 md:mt-0"
          >
            Privacy policy
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
