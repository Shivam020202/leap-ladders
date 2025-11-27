import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    company: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-[#FFF8F3] py-8 md:py-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

             <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: "#0B5E6F" }}
                  >
                    Take the Leap
                  </h2>
                </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-[#1a1a1a]">Take The </span>
            <span className="text-[#E89161]">Leap</span>
          </h2>
          <p className="text-[17px] text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            You've come this far. Might as well say hi!
          </p>
        </motion.div> */}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start" id="contact-section">
          {/* LEFT - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white border-[2px] border-[#E7E7E7] p-6 lg:p-8 relative">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-[3px] border-l-[3px] border-[#E89161]" />

              <div className="space-y-4 mt-8">
                {/* Name */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#0B5E6F] mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 border-[2px] border-[#E7E7E7] bg-[#FFF8F5] text-[15px] text-[#1a1a1a] placeholder-[#4A5568]/50 focus:border-[#E89161] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#0B5E6F] mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2.5 border-[2px] border-[#E7E7E7] bg-[#FFF8F5] text-[15px] text-[#1a1a1a] placeholder-[#4A5568]/50 focus:border-[#E89161] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#0B5E6F] mb-2 uppercase tracking-wide">
                    Phone <span className="text-[#4A5568] font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    className="w-full px-4 py-2.5 border-[2px] border-[#E7E7E7] bg-[#FFF8F5] text-[15px] text-[#1a1a1a] placeholder-[#4A5568]/50 focus:border-[#E89161] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#0B5E6F] mb-2 uppercase tracking-wide">
                    Choose Your Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border-[2px] border-[#E7E7E7] bg-[#FFF8F5] text-[15px] text-[#1a1a1a] focus:border-[#E89161] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="consulting">Strategize the Change (Consulting)</option>
                    <option value="coaching">Transform Your People (Coaching)</option>
                    <option value="toolkits">Method in the Madness (Toolkits)</option>
                    <option value="byob">BYOB Programs</option>
                  </select>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#0B5E6F] mb-2 uppercase tracking-wide">
                    Company Name <span className="text-[#4A5568] font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-2.5 border-[2px] border-[#E7E7E7] bg-[#FFF8F5] text-[15px] text-[#1a1a1a] placeholder-[#4A5568]/50 focus:border-[#E89161] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#0B5E6F] mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-2.5 border-[2px] border-[#E7E7E7] bg-[#FFF8F5] text-[15px] text-[#1a1a1a] placeholder-[#4A5568]/50 focus:border-[#E89161] focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleSubmit}
                  className="w-full px-8 py-3 bg-[#E89161] text-white text-[15px] font-semibold uppercase tracking-wide flex items-center justify-center gap-3 group transition-all duration-300"
                >
                  Send Message
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {/* LinkedIn DM */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="block border-[2px] border-[#E7E7E7] bg-white p-5 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0077B5] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[#0B5E6F] mb-1">LinkedIn DM</h3>
                  <p className="text-[14px] text-[#4A5568] leading-[1.6]">
                    Slide into my DMs (professionally)
                  </p>
                </div>
                <svg className="w-5 h-5 text-[#E89161] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="block border-[2px] border-[#E7E7E7] bg-white p-5 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25d366] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[#0B5E6F] mb-1">WhatsApp</h3>
                  <p className="text-[14px] text-[#4A5568] leading-[1.6]">
                    Skip the inbox queue → direct line to me
                  </p>
                </div>
                <svg className="w-5 h-5 text-[#E89161] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>

            {/* Calendly */}
            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="block border-[2px] border-[#E7E7E7] bg-white p-5 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0B5E6F] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[#0B5E6F] mb-1">Book a Call</h3>
                  <p className="text-[14px] text-[#4A5568] leading-[1.6]">
                    Don't be shy, book the call 😉
                  </p>
                </div>
                <svg className="w-5 h-5 text-[#E89161] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-[2px] border-[#E7E7E7] bg-[#0B5E6F] p-5 mt-4 relative overflow-hidden"
            >
              {/* Large decorative text */}
              <div className="absolute -bottom-4 -right-4 text-[100px] md:text-[120px] font-bold text-white opacity-[0.04] leading-none pointer-events-none">
                LEAP
              </div>

              <div className="relative z-10">
                <h4 className="text-[13px] uppercase tracking-[0.15em] text-[#E89161] font-bold mb-3">
                  Response Time
                </h4>
                <p className="text-[15px] text-white/90 leading-[1.7]">
                  We typically respond within 24 hours on business days. For urgent matters, WhatsApp is your best bet.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}