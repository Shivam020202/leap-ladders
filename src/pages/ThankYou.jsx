import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section className="bg-[#FFF8F3] min-h-[60vh] flex items-center justify-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B5E6F] mb-6">
          Thank You!
        </h1>
        <p className="text-lg text-[#4A5568] mb-8 leading-relaxed">
          We've received your message and will get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#E89161] text-white font-semibold uppercase tracking-wide hover:bg-[#d67e4b] transition-colors duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
