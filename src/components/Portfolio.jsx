import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PortfolioSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      id: "urbn",
      name: "URBN",
      services: ["📣 Social media marketing", "🎥 Content creation"],
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description:
        "Elevating urban fashion through strategic social media campaigns and engaging content that resonates with modern streetwear enthusiasts.",
      link: "#urbn",
      position: "top-left",
      size: "large",
    },
    {
      id: "fresh",
      name: "Building Better Humans",
      services: ["🧑‍🏫 Education & Development", "🤝 Community Programs"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description:
        "At Leap Ladder, we're in the business of building better humans. This is where we step beyond boardrooms and performance dashboards, and get into the real work: purpose, possibility, and people. We design activity-based learning modules, hands-on skill workshops, and educator development programs that meet learners where they are. Sometimes, that's a government school classroom in Bihar. Sometimes, it's a teacher training circle in a small-town community center. This is our space for bold ideas, big-hearted projects, and high-impact work that grows from the ground up. Everything we do beyond the bottom line—from pro bono consulting to grassroots learning programs—is rooted in a simple belief: Real change begins before the résumé. It begins in the classroom.",
      link: "#building-better-humans",
      position: "top-right",
      size: "medium",
    },
    {
      id: "win",
      name: "BYOB: Capacity Building",
      services: ["🔧 Capacity building", "🚀 Future building"],
      image:
        "https://images.unsplash.com/photo-1529697216570-f48ef8f6b2dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description:
        "BYOB isn't charity. It's capacity-building. It's future-building. It's believing that talent is everywhere—opportunity just needs to catch up.",
      link: "#byob",
      position: "middle-right",
      size: "large",
    },
    {
      id: "taina",
      name: "The K–12 Experience",
      services: ["🏫 Classrooms That Work", "📚 Learning That Lasts"],
      image:
        "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description:
        "We're on a mission to help educators teach better, and help students learn smarter—not just in metros, but in the smallest towns, where untapped potential is waiting to be unleashed.\n\nOur K–12 programs are:\n 🎯 Designed for real-world classrooms\n 🎓 Built by experts who get it\n 🎉 Backed by belief",
      link: "#k12-experience",
      position: "bottom-left",
      size: "medium",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <secction id="byob">
      <div
        className="max-w-7xl mx-auto min-h-auto md:min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-4"
        style={{ backgroundColor: "#FFF8F3" }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 px-4 md:px-0"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "#0B5E6F" }}
          >
            Beyond Operations And Business
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="relative max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Desktop Layout */}
          <div
            className="hidden md:grid md:grid-cols-12 md:grid-rows-5 gap-6"
            style={{ height: "900px" }}
          >
            {/* URBN - Large left image */}
            <motion.div
              variants={itemVariants}
              className="col-span-5 row-span-3 relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredItem("urbn")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-full h-full relative">
                <img
                  src={portfolioItems[0].image}
                  alt={portfolioItems[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === "urbn" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
                >
                  <p className="text-white text-sm mb-3 leading-relaxed">
                    {portfolioItems[0].description}
                  </p>
                  {/* <a
                    href={portfolioItems[0].link}
                    className="inline-flex items-center text-white text-sm font-medium hover:underline"
                  >
                    Know more <ArrowUpRight size={16} className="ml-1" />
                  </a> */}
                </motion.div>
              </div>
              {/* Label */}
            </motion.div>

            {/* FRESH - Top right medium image */}
            <motion.div
              variants={itemVariants}
              className="col-span-5 col-start-8 row-span-2 relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredItem("fresh")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-full h-full relative">
                <img
                  src={portfolioItems[1].image}
                  alt={portfolioItems[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === "fresh" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
                >
                  <p className="text-white text-sm mb-3 leading-relaxed">
                    {portfolioItems[1].description}
                  </p>
                  {/* <a
                    href={portfolioItems[1].link}
                    className="inline-flex items-center text-white text-sm font-medium hover:underline"
                  >
                    Know more <ArrowUpRight size={16} className="ml-1" />
                  </a> */}
                </motion.div>
              </div>
              {/* Label positioned to the left */}
            </motion.div>

            {/* WIN - Large right bottom image */}
            <motion.div
              variants={itemVariants}
              className="col-span-6 col-start-7 row-span-3 row-start-3 relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredItem("win")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-full h-full relative">
                <img
                  src={portfolioItems[2].image}
                  alt={portfolioItems[2].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === "win" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
                >
                  <p className="text-white text-sm mb-3 leading-relaxed">
                    {portfolioItems[2].description}
                  </p>
                  {/* <a
                    href={portfolioItems[2].link}
                    className="inline-flex items-center text-white text-sm font-medium hover:underline"
                  >
                    Know more <ArrowUpRight size={16} className="ml-1" />
                  </a> */}
                </motion.div>
              </div>
              {/* Label positioned to the left */}
            </motion.div>

            {/* TAINA - Bottom left medium image */}
            <motion.div
              variants={itemVariants}
              className="col-span-4 row-span-2 row-start-4 relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredItem("taina")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-full h-full relative">
                <img
                  src={portfolioItems[3].image}
                  alt={portfolioItems[3].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === "taina" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
                >
                  <p className="text-white text-sm mb-3 leading-relaxed whitespace-pre-line">
                    {portfolioItems[3].description}
                  </p>
                  {/* <a
                    href={portfolioItems[3].link}
                    className="inline-flex items-center text-white text-sm font-medium hover:underline"
                  >
                    Know more <ArrowUpRight size={16} className="ml-1" />
                  </a> */}
                </motion.div>
              </div>
              {/* Label */}
            </motion.div>
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 px-4 sm:px-6">
            <div
              className="flex gap-3 sm:gap-4 pb-4"
              style={{ width: "max-content" }}
            >
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex-shrink-0"
                  style={{
                    width: "90vw",
                    maxWidth: "350px",
                    minWidth: "280px",
                  }}
                >
                  <div className="relative overflow-hidden h-64 sm:h-80 ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Always visible text overlay on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                      <h3 className="text-lg sm:text-xl font-bold mb-1 text-white leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-white/85 text-xs sm:text-sm mb-2 leading-relaxed">
                        {item.services}
                      </p>
                      <a
                        href={item.link}
                        className="inline-flex items-center text-white text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity"
                      >
                        View project{" "}
                        <ArrowUpRight size={14} className="ml-1 sm:ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 sm:mt-8 md:mt-2 md:-mt-20 px-4 md:px-0"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center text-base sm:text-lg font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#E89161" }}
            >
              View all
              <ArrowUpRight size={18} className="ml-2 sm:ml-3" />
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </secction>
  );
};

export default PortfolioSection;
