import { motion } from "framer-motion";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: "urbn",
      name: "URBN",
      services: ["📣 Social media marketing", "🎥 Content creation"],
      image: "images/one.png",
      description: "",
      link: "#urbn",
      position: "top-left",
      size: "large",
    },
    {
      id: "fresh",
      name: "BYOB isn't charity. It's capacity-building. It's future-building. It's believing that talent is everywhere opportunity just needs to catch up.",
      services: ["🧑‍🏫 Education & Development", "🤝 Community Programs"],
      image:
        "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "",
      link: "#building-better-humans",
      position: "top-right",
      size: "medium",
    },
    {
      id: "win",
      name: "BYOB: Capacity Building",
      services: ["🔧 Capacity building", "🚀 Future building"],
      image:
        "https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            BYOB{" "}
            <span className="font-medium">
              (Beyond Operations And Business)
            </span>
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
            {/* URBN - Large left image - No text overlay */}
            <motion.div
              variants={itemVariants}
              className="col-span-5 row-span-3 relative overflow-hidden"
            >
              <div className="w-full h-full relative">
                <img
                  src={portfolioItems[0].image}
                  alt={portfolioItems[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* BYOB - Top right with image background and overlay - Content from WIN */}
            <motion.div
              variants={itemVariants}
              className="col-span-5 col-start-8 row-span-2 relative overflow-hidden"
            >
              <div className="w-full h-full relative">
                <img
                  src={portfolioItems[2].image}
                  alt={portfolioItems[2].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E89161]/100 via-[#E89161]/70 to-transparent" />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#043915]/20 to-transparent backdrop-blur-[2px]"
                  style={{
                    maskImage:
                      "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-center overflow-y-auto">
                  <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                    {portfolioItems[2].name}
                  </h3>
                  <p className="text-white/95 text-md font-semibold leading-relaxed">
                    {portfolioItems[2].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Building Better Humans - Large right bottom with image background and overlay - Content from FRESH */}
            <motion.div
              variants={itemVariants}
              className="col-span-6 col-start-7 row-span-3 row-start-3 relative overflow-hidden"
            >
              <div className="w-full h-full relative">
                <img
                  src={portfolioItems[1].image}
                  alt={portfolioItems[1].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#0B5E6F]/95 via-[#0B5E6F]/75 to-[#0B5E6F]/25" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.4)_0%,transparent_50%)]" />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#043915]/20 to-transparent backdrop-blur-[2px]"
                  style={{
                    maskImage:
                      "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-center overflow-y-auto z-10">
                  <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                    {portfolioItems[1].name}
                  </h3>
                  <p className="text-white/95 text-sm leading-relaxed">
                    {portfolioItems[1].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TAINA - Bottom left medium image */}
            <motion.div
              variants={itemVariants}
              className="col-span-4 row-span-2 row-start-4 relative overflow-hidden"
            >
              <div className="w-full h-full relative">
                <img
                  src={portfolioItems[3].image}
                  alt={portfolioItems[3].name}
                  className="w-full h-full object-cover"
                />
                {/* Text Overlay - Always Visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex flex-col justify-center p-6 overflow-y-auto">
                  <h3 className="text-white text-lg font-bold mb-3">
                    {portfolioItems[3].name}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed whitespace-pre-line">
                    {portfolioItems[3].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 px-4 sm:px-6">
            <div
              className="flex gap-3 sm:gap-4 pb-4"
              style={{ width: "max-content" }}
            >
              {/* Card 1: URBN - Image only, no text */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="relative flex-shrink-0"
                style={{
                  width: "90vw",
                  maxWidth: "350px",
                  minWidth: "280px",
                }}
              >
                <div className="relative overflow-hidden h-64 sm:h-80">
                  <img
                    src={portfolioItems[0].image}
                    alt={portfolioItems[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Card 2: BYOB - Image background with orange overlay and content from index 2 */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex-shrink-0"
                style={{
                  width: "90vw",
                  maxWidth: "350px",
                  minWidth: "280px",
                }}
              >
                <div className="relative overflow-hidden h-64 sm:h-80">
                  <img
                    src={portfolioItems[2].image}
                    alt={portfolioItems[2].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E89161]/100 via-[#E89161]/70 to-transparent" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#043915] to-transparent backdrop-blur-[2px]"
                    style={{
                      maskImage:
                        "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                    }}
                  />
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-center overflow-y-auto">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-3 leading-tight">
                      {portfolioItems[2].name}
                    </h3>
                    <p className="text-white/95 text-xs sm:text-sm leading-relaxed">
                      {portfolioItems[2].description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Building Better Humans - Image background with teal overlay and content from index 1 */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex-shrink-0"
                style={{
                  width: "90vw",
                  maxWidth: "350px",
                  minWidth: "280px",
                }}
              >
                <div className="relative overflow-hidden h-64 sm:h-80">
                  <img
                    src={portfolioItems[1].image}
                    alt={portfolioItems[1].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#0B5E6F]/95 via-[#0B5E6F]/75 to-[#0B5E6F]/25" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.4)_0%,transparent_50%)]" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#043915]/20 to-transparent backdrop-blur-[2px]"
                    style={{
                      maskImage:
                        "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                    }}
                  />
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col overflow-y-auto z-10">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 leading-tight flex-shrink-0">
                      {portfolioItems[1].name}
                    </h3>
                    <p className="text-white/95 text-xs sm:text-sm leading-relaxed">
                      {portfolioItems[1].description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: K-12 Experience - Image with text overlay */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative flex-shrink-0"
                style={{
                  width: "90vw",
                  maxWidth: "350px",
                  minWidth: "280px",
                }}
              >
                <div className="relative overflow-hidden h-64 sm:h-80">
                  <img
                    src={portfolioItems[3].image}
                    alt={portfolioItems[3].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 flex flex-col justify-center p-4 sm:p-5 overflow-y-auto">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-3 leading-tight">
                      {portfolioItems[3].name}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {portfolioItems[3].description}
                    </p>
                  </div>
                </div>
              </motion.div>
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
