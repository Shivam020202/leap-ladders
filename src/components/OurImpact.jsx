import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumber = ({ value, delay = 0, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 50,
  });

  // Extract numeric part and surrounding prefix/suffix (supports commas, decimals, K/M)
  const numberMatch = String(value).match(/([0-9,]+(?:\.[0-9]+)?)/);
  const hasNumber = !!numberMatch;
  let prefix = "";
  let suffix = "";
  let baseNumber = 0;
  let multiplierChar = null;

  if (hasNumber) {
    const numStart = numberMatch.index;
    const numStr = numberMatch[1];
    prefix = String(value).slice(0, numStart);
    // check char after number for K/M multiplier
    const afterChar = String(value).charAt(numStart + numStr.length);
    if (afterChar === "K" || afterChar === "M") {
      multiplierChar = afterChar;
      suffix = String(value).slice(numStart + numStr.length + 1);
    } else {
      suffix = String(value).slice(numStart + numStr.length);
    }
    const numericClean = numStr.replace(/,/g, "");
    baseNumber = parseFloat(numericClean);
    if (isNaN(baseNumber)) baseNumber = 0;
  }

  useEffect(() => {
    if (!hasNumber) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    if (isInView) {
      const timer = setTimeout(() => {
        // set target value (for K/M we animate the base number and keep the multiplier char)
        motionValue.set(baseNumber);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay, motionValue, hasNumber, baseNumber]);

  useEffect(() => {
    if (!hasNumber) return;
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const isDecimal = String(numberMatch[1]).includes(".");
        const formatted = isDecimal
          ? Number(latest).toFixed(2)
          : Math.floor(latest).toLocaleString();
        // reattach multiplier char (K/M) if present
        const displayNumber = multiplierChar ? formatted : formatted;
        ref.current.textContent = `${prefix}${displayNumber}${
          multiplierChar || ""
        }${suffix}`;
      }
    });
  }, [
    springValue,
    value,
    hasNumber,
    numberMatch,
    multiplierChar,
    prefix,
    suffix,
  ]);

  return (
    <h3
      ref={ref}
      className="text-4xl md:text-5xl lg:text-6xl font-bold"
      style={{ color }}
    >
      {hasNumber ? `${prefix}0${multiplierChar || ""}${suffix}` : value}
    </h3>
  );
};

const OurImpact = () => {
  const logos = [
    {
      name: "Genpact",
      url: "/logos/1280px-Genpact_logo.svg.png",
    },
    {
      name: "NTT",
      url: "/logos/NTT_company_logo.svg.png",
    },
    {
      name: "SHRM",
      url: "/logos/Shrm_logo.jpg",
    },
    {
      name: "Core Competency",
      url: "/logos/images (1).png",
    },
    {
      name: "Sila Real Estate",
      url: "/logos/786f14a9cb548acdd7e0e34562b32761.png",
    },
    {
      name: "EKAM Inc.",
      url: "/logos/ekam_inc_logo.jpeg",
    },
    {
      name: "Diverse Prism",
      url: "/logos/diverse_prism_logo.jpeg",
    },
    {
      name: "MindTek Consulting",
      url: "/logos/mindteck_logo.jpeg",
    },
    {
      name: "ElasticRun",
      url: "/logos/Elasticrun_Logo.svg.png",
    },
    {
      name: "Infosys",
      url: "/logos/Infosys_logo.svg.png",
    },
    {
      name: "IIM",
      url: "/logos/images.png",
    },
    {
      name: "Brookfield Properties",
      url: "/logos/Brookfield_Properties_logo.png",
    },
    {
      name: "EY",
      url: "/logos/EY_logo_2019.svg.png",
    },
    {
      name: "MCM",
      url: "/logos/MCM-Logo_RegisteredOFFICIAL_330X134.png",
    },
    {
      name: "TISS Mumbai",
      url: "/logos/Tata_Institute_of_Social_Sciences_Logo.svg.png",
    },
    {
      name: "NIIT",
      url: "/logos/NIIT_logo.svg.png",
    },
    {
      name: "Infopro",
      url: "/logos/LOGO_INFOPRO_DIGITAL_2022.png",
    },
    {
      name: "Maersk",
      url: "/logos/Maersk-Logo.jpg",
    },
    {
      name: "Airtel",
      url: "/logos/Airtel-logo.jpg",
    },
  ];

  const stats = [
    {
      id: 1,
      number: "95%",
      label: "On-Time Delivery",
      description:
        "Projects delivered to timeline, scope, and expected performance outcomes.",
      color: "#E89161",
    },
    {
      id: 2,
      number: "4.97 / 5",
      label: "Client Satisfaction",
      description:
        "Consistently rated in the top satisfaction tier across programs and stakeholders.",
      color: "#E89161",
    },
    {
      id: 3,
      number: "30%",
      label: "Faster Learning Deployment",
      description:
        "Streamlined processes and workflows that reduce turnaround time, end-to-end.",
      color: "#E89161",
    },
    {
      id: 4,
      number: "4,500+",
      label: "Hours of Live Training",
      description:
        "Scaled capability building across leadership, behavioral, communication, and functional skills.",
      color: "#E89161",
    },
    {
      id: 5,
      number: "7,528+",
      label: "Hours of Learning Content",
      description:
        "Outcome-aligned curriculum and digital modules across levels and roles.",
      color: "#E89161",
    },
    {
      id: 6,
      number: "$500K+",
      label: "Cost Savings & Capacity Gains",
      description:
        "Enabled through better retention, scalable learning models, and optimized L&D investments.",
      color: "#E89161",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div className="py-20 px-4 md:px-8 lg:px-20 bg-[#FFF8F3]">
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
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#0B5E6F" }}
          >
            Our Impact
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center"
            >
              {/* Number */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="mb-3"
              >
                <AnimatedNumber
                  value={stat.number}
                  delay={index * 100}
                  color={stat.color}
                />
              </motion.div>

              {/* Label */}
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-base md:text-lg lg:text-xl font-bold mb-2"
                style={{ color: "#0B5E6F" }}
              >
                {stat.label}
              </motion.h4>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed max-w-xs mx-auto"
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FFF8F3] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FFF8F3] to-transparent z-10" />

            {/* Scrolling container */}
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
                  style={{ width: "120px", height: "80px" }}
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain "
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
                  style={{ width: "120px", height: "80px" }}
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurImpact;
