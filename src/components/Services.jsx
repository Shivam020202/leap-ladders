import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "CONSULTING",
      description:
        "Transform your organization with expert HR consulting, organizational development, and compliance solutions tailored to your business needs.",
      features: [
        "HR transformation & strategy",
        "Organizational development",
        "Compliance management",
        "HR policy & process design",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "COACHING & LEADERSHIP DEVELOPMENT",
      description:
        "Empower your leaders and teams with personalized coaching programs designed to unlock potential and drive organizational success.",
      features: [
        "Executive coaching",
        "Team coaching & dynamics",
        "Leadership development programs",
        "Succession planning support",
      ],
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "TRAINING PROGRAMS",
      description:
        "Comprehensive training solutions from Train-the-Trainer programs to K-12 education and professional soft skills development.",
      features: [
        "Train-the-Trainer (TTT) programs",
        "Finishing school & professional etiquette",
        "K-12 educational programs",
        "Soft skills & communication training",
      ],
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "COMPLIANCE & ADVISORY",
      description:
        "Navigate complex regulatory landscapes with confidence through our comprehensive risk management and regulatory readiness services.",
      features: [
        "Risk assessment & mitigation",
        "Regulatory compliance readiness",
        "Policy audit & review",
        "Advisory on labor laws & regulations",
      ],
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className=" bg-[#FFF8F3] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#0B5E6F] text-3xl md:text-4xl font-semibold mb-12"
        >
          Services
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services List - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <div className="">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="mb-2 last:mb-0"
                >
                  {/* Desktop View - Always visible */}
                  <motion.button
                    onClick={() => setActiveService(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`hidden lg:flex w-full items-center justify-between p-4  transition-all duration-300 ${
                      activeService === index
                        ? "bg-[#E89161] text-white"
                        : "bg-transparent text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-semibold text-left">
                      ({service.id}) {service.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeService === index ? "rotate-45" : ""
                      }`}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </motion.button>

                  {/* Mobile View - Accordion */}
                  <div className="lg:hidden">
                    <button
                      onClick={() =>
                        setActiveService(activeService === index ? -1 : index)
                      }
                      className={`flex w-full items-center justify-between p-4  transition-all duration-300 ${
                        activeService === index
                          ? "bg-[#E89161] text-white"
                          : "bg-transparent text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-semibold text-left">
                        ({service.id}) {service.title}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeService === index ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Content */}
                    {activeService === index && (
                      <div className="p-4 bg-gray-50  mt-2 animate-fadeIn">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-gray-700 mb-4">
                              {service.description}
                            </p>
                            <ul className="space-y-2 mb-6">
                              {service.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-gray-700"
                                >
                                  <span className="text-[#E89161] mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <button className="border-2 border-[#E89161] text-[#E89161] font-semibold py-2 px-6  hover:bg-[#E89161] hover:text-white transition-all duration-300">
                              Learn more
                              <span className="ml-2">→</span>
                            </button>
                          </div>
                          <div className="md:w-1/3">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-48 object-cover "
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Content - Right Side (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block lg:w-3/5"
          >
            <div className="bg-transparent    h-full">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h2 className="text-[#0B5E6F] text-2xl font-bold mb-4">
                    {services[activeService].title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    {services[activeService].description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {services[activeService].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <span className="text-[#E89161] mr-3 text-xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-check-icon lucide-check"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-end justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-[#E89161] text-[#E89161] font-semibold py-3 px-8  hover:bg-[#E89161] hover:text-white transition-all duration-300 flex items-center"
                  >
                    Learn more
                    <span className="ml-2">→</span>
                  </motion.button>

                  <div className="w-48 h-48">
                    <img
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Services;
