import { useState, useEffect } from "react";
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
    {
      id: "04",
      alt: "Our Story - Meet the Team",
      bgColor: "#546d3b",
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
        x: index === 0 ? "-100%" : index === 1 ? "0%" : "100%",
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
        {/* Logo and Tagline */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-6 gap-3"
        >
          <img
            src="ll-logo.png"
            className="w-16 h-fit sm:w-20 sm:h-fit md:w-24 md:h-fit"
            alt="Leap Ladders Logo"
          />
        </motion.div> */}
        {/* Title and Tagline Group */}
        <div className="text-center mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
            style={{ color: "#0B5E6F", fontFamily: "'Times New Roman', Times, serif" }}
          >
            LEAP LADDER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl"
            style={{ color: "black", fontFamily: "'Times New Roman', Times, serif" }}
          >
            Smart HR for a Smarter Workforce
          </motion.p>
        </div>

        {/* ETCETRA with Animation - Single Line */}
        <div className="text-center mb-8 md:mb-12 mt-8 px-4">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl max-w-5xl mx-auto"
            style={{ whiteSpace: "wrap", overflow: "hidden" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-block"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#E89161" }}>E</span>
              <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>mpowering </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#E89161" }}>T</span>
              <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>alent </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#E89161" }}>C</span>
              <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>hannelizing </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#E89161" }}>E</span>
              <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>fficiency </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#E89161" }}>T</span>
              <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>argeting </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#E89161" }}>E</span>
              <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>xcellent </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#E89161" }}>R</span>
              <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>esults </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#E89161" }}>A</span>
              <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>ccelerating Impact</span>
              {/* <span className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#E89161" }}>I</span> */}
              {/* <span className="text-sm md:text-base lg:text-lg" style={{ color: "#0B5E6F" }}>mpact</span> */}
            </motion.span>
          </motion.p>
        </div>

        {/* Desktop - Three Box Layout with Complex Animation */}
        <div className="hidden md:block max-w-7xl mx-auto relative">
          <div
            className="relative"
            style={{ height: "calc((100vw - 160px) / 3)", maxHeight: "450px" }}
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
                    width: "32%",
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
                      <div className="w-full h-full relative">
                        <img
                          src="https://images.unsplash.com/photo-1651094856217-6f30970b1521?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Services Visual"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <h3 className="text-white text-center text-lg md:text-xl font-bold mb-3">
                            Services
                          </h3>
                          <p className="text-white/90 text-center text-sm md:text-base leading-relaxed mb-4">
                            Strategy, coaching, and custom learning experiences
                            designed to move your teams forward.
                          </p>
                          <a
                            href="/services"
                            className="inline-flex items-center mx-auto font-medium hover:opacity-70 transition-opacity"
                            style={{ color: "#E89161" }}
                          >
                            Read more
                            <span className="ml-1">→</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: "url('images/strategy.png')",
                            filter: "brightness(0.4)",
                          }}
                        />
                        <div className="relative z-10 flex flex-col items-center justify-end  h-full">
                          <p className="text-white text-center max-w-xs leading-relaxed font-semibold mb-6">
                            Strategy Is Easy. People Are the Plot Twist. Meet
                            Ours.
                          </p>
                          <a
                            href="/our-story"
                            className="inline-flex items-center font-medium hover:opacity-70 transition-opacity"
                            style={{ color: "#E89161" }}
                          >
                            Know more
                            <span className="ml-1">→</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <>
                        <div className="w-full h-full relative">
                          <img
                            src="images/home-4th-image.png"
                            alt="BYOB Visual"
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay with text */}
                          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-end h-full p-6">
                            <p className="text-white text-center max-w-xs leading-relaxed font-semibold mb-6">
                              Beyond Operations And Business (BYOB)
                            </p>
                            <a
                              href="#byob"
                              className="inline-flex items-center font-medium hover:opacity-70 transition-opacity"
                              style={{ color: "#E89161" }}
                            >
                              Know more
                              <span className="ml-1">→</span>
                            </a>
                          </div>
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
          {/* Mobile Image Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images
                  .filter((_, i) => i !== 0)
                  .map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative aspect-square">
                        {/* Slide 1: Interactive card with tap functionality */}
                        {index === 0 && (
                          <div className="w-full h-full relative">
                            <img
                              src="images/one.png"
                              alt="Services Visual"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                              <h3 className="text-white text-lg font-bold mb-3">
                                Services
                              </h3>
                              <p className="text-white/90 text-sm leading-relaxed text-center mb-4">
                                Strategy, coaching, and custom learning
                                experiences designed to move your teams forward.
                              </p>
                              <a
                                href="/services"
                                className="inline-flex items-center font-medium hover:opacity-70 transition-opacity"
                                style={{ color: "#E89161" }}
                              >
                                Read more
                                <span className="ml-1">→</span>
                              </a>
                            </div>
                          </div>
                        )}

                        {/* Slide 2: Our Story card with background image */}
                        {index === 1 && (
                          <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-cover bg-center"
                              style={{
                                backgroundImage: "url('images/strategy.png')",
                                filter: "brightness(0.4)",
                              }}
                            />
                            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                              <p className="text-white text-center max-w-xs leading-relaxed font-semibold mb-6">
                                Strategy Is Easy. People Are the Plot Twist.
                                Meet Ours.
                              </p>
                              <a
                                href="/our-story"
                                className="inline-flex items-center font-medium hover:opacity-70 transition-opacity"
                                style={{ color: "#E89161" }}
                              >
                                Know more
                                <span className="ml-1">→</span>
                              </a>
                            </div>
                          </div>
                        )}

                        {/* Slide 3: BYOB image */}
                        {index === 2 && (
                          <div className="w-full h-full relative">
                            <img
                              src="images/home-4th-image.png"
                              alt="BYOB Visual"
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay with text */}
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center h-full p-8">
                              <p className="text-white text-center max-w-xs leading-relaxed font-semibold mb-6">
                                Beyond Operations And Business (BYOB)
                              </p>
                            </div>
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
