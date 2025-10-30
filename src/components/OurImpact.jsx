import React from "react";
import { motion } from "framer-motion";

const OurImpact = () => {
  const stats = [
    {
      id: 1,
      number: "20+",
      label: "Years",
      description: "Senior HR experience across multiple sectors.",
      color: "#E89161",
    },
    {
      id: 2,
      number: "60%",
      label: "Process efficiency gains",
      description:
        "through HR digital transformation (GUS Global Services example).",
      color: "#E89161",
    },
    {
      id: 3,
      number: "3x",
      label: "GPTW® Certified Organizations",
      description: "Led organisations to certification.",
      color: "#E89161",
    },
    {
      id: 4,
      number: "95%",
      label: "NPS",
      description: "on AI-powered onboarding experiences implemented.",
      color: "#E89161",
    },
    {
      id: 5,
      number: "18%",
      label: "Reduction",
      description: "in voluntary attrition (example outcome at OMAX Autos).",
      color: "#E89161",
    },
    {
      id: 6,
      number: "9+",
      label: "HiPo framework",
      description:
        "85% promotion rate within 12 months (coaching/talent outcomes).",
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
                <h3
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </h3>
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
      </div>
    </div>
  );
};

export default OurImpact;
