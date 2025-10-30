import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationPhase, setAnimationPhase] = useState("initial");

  const fullText = "Smart HR for a Smarter Workforce";

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Animation phases controller
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase("stacking");
    }, 1800); // Start stacking after text animation

    const timer2 = setTimeout(() => {
      setAnimationPhase("spreading");
    }, 3600); // Start spreading after stacking

    const timer3 = setTimeout(() => {
      setAnimationPhase("complete");
    }, 4800); // Mark animation as complete

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Image data for slides
  const images = [
    { id: "01", alt: "ETCETRA Ladder Visual", bgColor: "#E89161" },
    {
      id: "02",
      alt: "Centered text slide - Consulting/Portfolio",
      bgColor: "#FFF8F3",
    },
    {
      id: "03",
      alt: "BYOB - Build Your Own Brand/Business",
      bgColor: "#0B5E6F",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Card animation variants - all transform based
  const getCardVariants = (index) => {
    return {
      initial: {
        scale: 0.3,
        opacity: 0,
        x: 0,
        y: -800,
        rotate: Math.random() * 40 - 20,
        zIndex: 30 - index,
      },
      stacking: {
        scale: 0.85,
        opacity: 1,
        x: index * 8 - 8, // Small offset for stack visibility
        y: index * 2,
        rotate: index * 2 - 2,
        zIndex: 30 - index,
        transition: {
          delay: index * 0.3,
          duration: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
      spreading: {
        scale: 1,
        opacity: 1,
        x: index === 0 ? "-100%" : index === 2 ? "100%" : 0,
        y: 0,
        rotate: 0,
        zIndex: index + 1,
        transition: {
          delay: index * 0.2,
          duration: 1.2,
          type: "spring",
          stiffness: 45,
          damping: 15,
        },
      },
    };
  };

  return (
    <div
      className="overflow-hidden min-h-[75vh]"
      style={{ backgroundColor: "#FFF8F3" }}
    >
      {/* Hero Content */}
      <div className="px-4 md:px-8 lg:px-20 py-8 md:py-16">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-3"
        >
          <p
            className="text-sm md:text-base tracking-widest"
            style={{ color: "#E89161" }}
          >
            human resources
          </p>
        </motion.div>

        {/* Main Heading with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8 md:mb-20"
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ color: "#0B5E6F", letterSpacing: "-0.02em" }}
          >
            {displayText}
          </h1>
        </motion.div>

        {/* Desktop - Three Box Layout with Complex Animation */}
        <div className="hidden md:block max-w-7xl mx-auto relative">
          <div
            className="relative"
            style={{ height: "calc((100vw - 160px) / 3)", maxHeight: "466px" }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              {/* All three cards positioned at center, will spread using transforms */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="absolute aspect-square"
                  initial="initial"
                  animate={
                    animationPhase === "spreading" ||
                    animationPhase === "complete"
                      ? "spreading"
                      : animationPhase === "stacking"
                      ? "stacking"
                      : "initial"
                  }
                  variants={getCardVariants(index)}
                  style={{
                    width: "33.33%",
                    transformOrigin: "center center",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      boxShadow:
                        animationPhase === "stacking" ||
                        animationPhase === "initial"
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                          : "none",
                      transition: "box-shadow 0.5s ease",
                    }}
                  >
                    {/* Box content based on index */}
                    {index === 0 && (
                      <>
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: "#E89161" }}
                        >
                          <img
                            src="images/card1.png"
                            alt="ETCETRA Ladder Visual"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* <div className="absolute bottom-4 left-4 text-xs text-white/90 tracking-wider">
                          (01)
                        </div> */}
                      </>
                    )}

                    {index === 1 && (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-white/90 border-px-4 border-t border-b border-l-0 border-r-0 border-[#0B5E6F]/10">
                        <p className="text-[#546d3b] text-center max-w-xs leading-relaxed">
                          We create simple and effective solutions that help
                          your business find new talent and grow.
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center mt-6 font-medium hover:opacity-70 transition-opacity"
                          style={{ color: "#E89161" }}
                        >
                          View portfolio
                          <span className="ml-1">↗</span>
                        </a>
                      </div>
                    )}

                    {index === 2 && (
                      <>
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: "#0B5E6F" }}
                        >
                          <img
                            src="images/card2.png"
                            alt="BYOB Visual"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* <div className="absolute bottom-4 left-4 text-xs text-white/90 tracking-wider">
                          (03)
                        </div> */}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile - Content and Slider (with simpler animation) */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {/* Mobile text content */}
          <div className="mb-8 text-center px-4">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              We create simple and effective solutions that help your business
              find new talent and grow.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm"
              style={{ color: "#E89161" }}
            >
              View portfolio
              <span className="ml-1">↗</span>
            </a>
          </div>

          {/* Mobile Image Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative aspect-square">
                      {/* Slide 1 & 3: image tiles with background color */}
                      {(index === 0 || index === 2) && (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: image.bgColor }}
                        >
                          <img
                            src="https://images.unsplash.com/photo-1606327054517-6bf0b2e84cc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Slide 2: centered text content */}
                      {index === 1 && (
                        <div
                          className="w-full h-full flex flex-col items-center justify-center p-8"
                          style={{ backgroundColor: image.bgColor }}
                        >
                          <p className="text-gray-700 text-center max-w-xs leading-relaxed">
                            We create simple and effective solutions that help
                            your business find new talent and grow.
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center mt-6 font-medium hover:opacity-70 transition-opacity"
                            style={{ color: "#E89161" }}
                          >
                            View portfolio
                            <span className="ml-1">↗</span>
                          </a>
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4 text-xs text-white/90 tracking-wider">
                        ({image.id})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white transition-colors"
              style={{ color: "#0B5E6F" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white transition-colors"
              style={{ color: "#0B5E6F" }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 transition-all ${
                    currentSlide === index ? "w-8" : ""
                  }`}
                  style={{
                    backgroundColor:
                      currentSlide === index ? "#E89161" : "#D1D5DB",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
