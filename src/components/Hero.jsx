import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationPhase, setAnimationPhase] = useState("initial");
  const [showCard2Content, setShowCard2Content] = useState(false);

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
        <div className="text-center mb-8 md:mb-12">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ color: "#0B5E6F", letterSpacing: "-0.02em" }}
          >
            {"LEAP LADDER".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 + index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Main Heading with Letter-by-Letter Fade-in Animation */}
        <div className="text-center mb-8 md:mb-12">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-black"
            style={{ letterSpacing: "-0.02em" }}
          >
            {"Smart HR for a Smarter Workforce".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 + index * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subheading */}
        <div className="text-center mb-8  px-4">
          <p className="text-base md:text-lg lg:text-xl font-extrabold leading-relaxed max-w-4xl mx-auto">
            {"EMPOWERING TALENT CHANNELIZING EFFICIENCY TARGETING EXCELLENT RESULTS ACCELERATING IMPACT".split("").map((char, index) => {
              const firstLetters = [0, 11, 18, 31, 42, 53, 64, 75, 87, 94];
              const isFirstLetter = firstLetters.includes(index);
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.4 + index * 0.015,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ 
                    display: "inline-block",
                    color: isFirstLetter ? "#E89161" : "#0B5E6F"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </p>
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
                      <>
                        <div
                          className="w-full h-full relative group cursor-pointer"
                          onClick={() => setShowCard2Content(!showCard2Content)}
                        >
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ backgroundColor: "#FFF8F3" }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                              alt="Portfolio Visual"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Hover/Tap Overlay Content */}
                          <div
                            className={`absolute inset-0 bg-[#0B5E6F]/95 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                              showCard2Content
                                ? "opacity-100 md:opacity-0"
                                : "opacity-0"
                            } md:group-hover:opacity-100`}
                          >
                            <h3 className="text-white text-lg md:text-xl font-bold mb-6 text-center">
                              We help you…
                            </h3>
                            <ul className="text-white space-y-3 text-sm md:text-base">
                              <li className="flex items-start">
                                <span
                                  className="mr-2"
                                  style={{ color: "#E89161" }}
                                >
                                  •
                                </span>
                                <span>Strategize the change (consulting)</span>
                              </li>
                              <li className="flex items-start">
                                <span
                                  className="mr-2"
                                  style={{ color: "#E89161" }}
                                >
                                  •
                                </span>
                                <span>
                                  Transform your people (coaching and training)
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span
                                  className="mr-2"
                                  style={{ color: "#E89161" }}
                                >
                                  •
                                </span>
                                <span>
                                  Find the method in the madness (Custom
                                  Training Content Development)
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
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
                              Beyond Operations And Business
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
                          <div
                            className="w-full h-full relative cursor-pointer"
                            onClick={() =>
                              setShowCard2Content(!showCard2Content)
                            }
                          >
                            <div
                              className="w-full h-full flex items-center justify-center"
                              style={{ backgroundColor: image.bgColor }}
                            >
                              <img
                                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                                alt={image.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Tap Overlay Content */}
                            <div
                              className={`absolute inset-0 bg-[#0B5E6F]/95 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                                showCard2Content ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              <h3 className="text-white text-lg font-bold mb-6 text-center">
                                We help you…
                              </h3>
                              <ul className="text-white space-y-3 text-sm">
                                <li className="flex items-start">
                                  <span
                                    className="mr-2"
                                    style={{ color: "#E89161" }}
                                  >
                                    •
                                  </span>
                                  <span>
                                    Strategize the change (consulting)
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <span
                                    className="mr-2"
                                    style={{ color: "#E89161" }}
                                  >
                                    •
                                  </span>
                                  <span>
                                    Transform your people (coaching and
                                    training)
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <span
                                    className="mr-2"
                                    style={{ color: "#E89161" }}
                                  >
                                    •
                                  </span>
                                  <span>
                                    Find the method in the madness (Custom
                                    Training Content Development)
                                  </span>
                                </li>
                              </ul>
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
                                Beyond Operations And Business
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
