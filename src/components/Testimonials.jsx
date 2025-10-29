import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, TechFlow",
      content:
        "Working with this team transformed our digital presence. Our engagement increased by 300% within just three months, and the strategic approach to branding was exceptional.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, InnovateCo",
      content:
        "The data-driven insights and creative execution exceeded all expectations. They delivered measurable results that directly impacted our bottom line.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Brand Manager, StyleHouse",
      content:
        "From concept to execution, every detail was handled with precision. Our rebranding campaign received industry recognition and drove a 45% increase in sales.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder, GrowthLabs",
      content:
        "Their expertise in digital marketing and analytics helped us scale efficiently. The ROI has been incredible, and the partnership continues to deliver value.",
      rating: 5,
    },
  ];

  const clientLogos = [
    { id: 1, name: "TechFlow", logo: "🅰️" },
    { id: 2, name: "InnovateCo", logo: "🅱️" },
    { id: 3, name: "StyleHouse", logo: "🅲" },
    { id: 4, name: "GrowthLabs", logo: "🅳" },
    { id: 5, name: "NexusTech", logo: "🅴" },
    { id: 6, name: "PrimeDigital", logo: "🅵" },
    { id: 7, name: "EliteBrands", logo: "🅶" },
    { id: 8, name: "VisionaryCo", logo: "🅷" },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-[#E89161]" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      className="hidden sm:flex py-20 px-4  relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 248, 243, 0.92), rgba(255, 248, 243, 0.92)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#FFF8F3] opacity-90"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className=" mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#0B5E6F] text-3xl md:text-4xl font-bold mb-4"
          >
            Client Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 text-lg max-w-2xl "
          >
            Discover why industry leaders trust us to drive their growth and
            transformation
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Testimonial Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 md:p-12 shadow-lg border border-[#0B5E6F]/10 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-[#E89161] text-4xl opacity-20">
                "
              </div>

              <div className="relative h-64">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === activeTestimonial
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-8 pointer-events-none"
                    }`}
                  >
                    {/* Rating */}
                    <div className="flex mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Quote */}
                    <div className="mb-8">
                      <p className="text-gray-700 text-lg leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="border-t border-[#0B5E6F]/10 pt-4">
                      <h3 className="text-[#0B5E6F] font-bold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 10000);
                      }}
                      className={`w-3 h-3 transition-all duration-300 ${
                        index === activeTestimonial
                          ? "bg-[#E89161]"
                          : "bg-[#0B5E6F] opacity-30 hover:opacity-60"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 flex items-center justify-center border border-[#0B5E6F] text-[#0B5E6F] hover:bg-[#0B5E6F] hover:text-white transition-all duration-300"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 flex items-center justify-center border border-[#0B5E6F] text-[#0B5E6F] hover:bg-[#0B5E6F] hover:text-white transition-all duration-300"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 text-center border border-[#0B5E6F]/10 shadow-sm">
                <div className="text-[#0B5E6F] text-3xl md:text-4xl font-bold mb-2">
                  200+
                </div>
                <div className="text-gray-700">Happy Clients</div>
              </div>
              <div className="bg-white p-6 text-center border border-[#0B5E6F]/10 shadow-sm">
                <div className="text-[#0B5E6F] text-3xl md:text-4xl font-bold mb-2">
                  98%
                </div>
                <div className="text-gray-700">Client Retention</div>
              </div>
              <div className="bg-white p-6 text-center border border-[#0B5E6F]/10 shadow-sm">
                <div className="text-[#0B5E6F] text-3xl md:text-4xl font-bold mb-2">
                  4.9/5
                </div>
                <div className="text-gray-700">Average Rating</div>
              </div>
              <div className="bg-white p-6 text-center border border-[#0B5E6F]/10 shadow-sm">
                <div className="text-[#0B5E6F] text-3xl md:text-4xl font-bold mb-2">
                  15+
                </div>
                <div className="text-gray-700">Industries Served</div>
              </div>
            </div>

            {/* Client Logos Carousel */}
            <div className="mt-12">
              <h3 className="text-[#0B5E6F] text-lg font-semibold mb-6 text-center">
                Trusted by Industry Leaders
              </h3>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll space-x-8 py-4">
                  {/* Double the array for seamless loop */}
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <div
                      key={`${logo.id}-${index}`}
                      className="flex-shrink-0 w-20 h-20 bg-white flex items-center justify-center border border-[#0B5E6F]/10 shadow-sm opacity-80 hover:opacity-100 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-2xl text-[#0B5E6F] font-bold">
                        {logo.logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-160px * 8));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
