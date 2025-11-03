import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Building2, Briefcase, MessageSquare } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-20 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: "#0B5E6F" }}
          >
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Let's discuss how we can help transform your HR strategy
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name Field */}
          <motion.div variants={itemVariants} className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              style={{ color: "#0B5E6F" }}
            >
              Name
            </label>
            <div className="relative">
              <User
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
                className="w-full pl-8 pr-4 py-3 border-b-2 border-gray-300 focus:border-[#E89161] outline-none transition-colors bg-transparent"
                style={{ borderRadius: 0 }}
              />
            </div>
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants} className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: "#0B5E6F" }}
            >
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full pl-8 pr-4 py-3 border-b-2 border-gray-300 focus:border-[#E89161] outline-none transition-colors bg-transparent"
                style={{ borderRadius: 0 }}
              />
            </div>
          </motion.div>

          {/* Phone Field */}
          <motion.div variants={itemVariants} className="relative">
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2"
              style={{ color: "#0B5E6F" }}
            >
              Phone
            </label>
            <div className="relative">
              <Phone
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Contact Number"
                required
                pattern="[0-9()#&+*\-=.]+"
                title="Only numbers and phone characters (#, -, *, etc) are accepted."
                className="w-full pl-8 pr-4 py-3 border-b-2 border-gray-300 focus:border-[#E89161] outline-none transition-colors bg-transparent"
                style={{ borderRadius: 0 }}
              />
            </div>
          </motion.div>

          {/* Company Field */}
          <motion.div variants={itemVariants} className="relative">
            <label
              htmlFor="company"
              className="block text-sm font-medium mb-2"
              style={{ color: "#0B5E6F" }}
            >
              Company
            </label>
            <div className="relative">
              <Building2
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter Your Company Name"
                required
                className="w-full pl-8 pr-4 py-3 border-b-2 border-gray-300 focus:border-[#E89161] outline-none transition-colors bg-transparent"
                style={{ borderRadius: 0 }}
              />
            </div>
          </motion.div>

          {/* Service Field */}
          <motion.div variants={itemVariants} className="relative md:col-span-2">
            <label
              htmlFor="service"
              className="block text-sm font-medium mb-2"
              style={{ color: "#0B5E6F" }}
            >
              Service Interested
            </label>
            <div className="relative">
              <Briefcase
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                size={20}
              />
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full pl-8 pr-4 py-3 border-b-2 border-gray-300 focus:border-[#E89161] outline-none transition-colors bg-transparent appearance-none cursor-pointer"
                style={{ borderRadius: 0 }}
              >
                <option value="">Choose your service</option>
                <option value="Consulting">Consulting</option>
                <option value="Coaching">Coaching</option>
                <option value="Leadership Development programs">
                  Leadership Development programs
                </option>
                <option value="HR TTT">HR TTT</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div variants={itemVariants} className="relative md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: "#0B5E6F" }}
            >
              Message
            </label>
            <div className="relative">
              <MessageSquare
                className="absolute left-0 top-4 text-gray-400"
                size={20}
              />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here ...."
                rows="6"
                className="w-full pl-8 pr-4 py-3 border-b-2 border-gray-300 focus:border-[#E89161] outline-none transition-colors bg-transparent resize-none"
                style={{ borderRadius: 0 }}
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-white font-medium transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "#E89161",
                borderRadius: 0,
              }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactUs;
