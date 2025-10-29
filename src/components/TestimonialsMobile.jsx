import React, { useState, useEffect } from "react";

const TestimonialsMobile = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, TechFlow",
      content:
        "Working with this team transformed our digital presence. Our engagement increased by 300% within just three months.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, InnovateCo",
      content:
        "The data-driven insights and creative execution exceeded all expectations. They delivered measurable results.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Brand Manager, StyleHouse",
      content:
        "From concept to execution, every detail was handled with precision. Our rebranding campaign received industry recognition.",
      rating: 4,
    },
  ];

  const clientLogos = [
    { id: 1, name: "TechFlow", logo: "🅰️" },
    { id: 2, name: "InnovateCo", logo: "🅱️" },
    { id: 3, name: "StyleHouse", logo: "🅲" },
    { id: 4, name: "GrowthLabs", logo: "🅳" },
    { id: 5, name: "NexusTech", logo: "🅴" },
    { id: 6, name: "PrimeDigital", logo: "🅵" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

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
      className="min-h-screen py-12 px-4 relative bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 248, 243, 0.92), rgba(255, 248, 243, 0.92)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#0B5E6F] text-2xl font-bold mb-4">
            Client Testimonials
          </h1>
          <p className="text-gray-700">
            Trusted by innovative companies worldwide
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="mb-12">
          <div className="bg-white p-6 shadow-lg border border-[#0B5E6F]/10">
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
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="border-t border-[#0B5E6F]/10 pt-4">
                    <h3 className="text-[#0B5E6F] font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-[#E89161]"
                      : "bg-[#0B5E6F] opacity-30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="bg-white p-4 text-center border border-[#0B5E6F]/10">
            <div className="text-[#0B5E6F] text-xl font-bold">200+</div>
            <div className="text-gray-700 text-sm">Happy Clients</div>
          </div>
          <div className="bg-white p-4 text-center border border-[#0B5E6F]/10">
            <div className="text-[#0B5E6F] text-xl font-bold">98%</div>
            <div className="text-gray-700 text-sm">Retention</div>
          </div>
          <div className="bg-white p-4 text-center border border-[#0B5E6F]/10">
            <div className="text-[#0B5E6F] text-xl font-bold">4.9/5</div>
            <div className="text-gray-700 text-sm">Rating</div>
          </div>
          <div className="bg-white p-4 text-center border border-[#0B5E6F]/10">
            <div className="text-[#0B5E6F] text-xl font-bold">15+</div>
            <div className="text-gray-700 text-sm">Industries</div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-[#0B5E6F] text-lg font-semibold mb-6">
            Trusted Partners
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="bg-white p-4 border border-[#0B5E6F]/10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-xl text-[#0B5E6F] font-bold">
                  {logo.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsMobile;
