import React from "react";
import { motion } from "framer-motion";

const BlogGrid = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Work-Life Balance",
      date: "21.05.2026",
      title: "Women don't take breaks, they rebalance life",
      image: "/images/blog3.jpeg",
      link: "https://leapladder.pro/blogs/2026/05/21/women-dont-take-breaks-they-rebalance-life/",
    },
    {
      id: 2,
      category: "Leadership",
      date: "21.05.2026",
      title: "From compliance to conscious leadership",
      image: "/images/blog1.jpeg",
      link: "https://leapladder.pro/blogs/2026/05/21/from-compliance-to-conscious-leadership/",
    },
    {
      id: 3,
      category: "Learning",
      date: "21.05.2026",
      title: "The rhythm of learning",
      image: "/images/blog2.jpeg",
      link: "https://leapladder.pro/blogs/2026/05/21/the-rhythm-of-learning/",
    },
  ];

  return (
    <div className=" bg-[#FFF8F3] py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#0B5E6F] text-3xl md:text-4xl font-bold"
          >
            Blog
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-[#E89161] font-semibold hover:text-[#0B5E6F] transition-colors duration-300"
          >
            View all
            <span className="ml-2 text-lg">✓</span>
          </motion.button>
        </motion.div>

        {/* Blog Posts Grid - Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white p-4 border border-[#0B5E6F]/10 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                {/* Square image at top of card */}
                <div className="mb-3 w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Category and Date */}
                <div className="flex justify-between items-start mb-2.5">
                  <span className="text-[#0B5E6F] font-semibold text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-600 text-xs">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-gray-700 font-semibold text-base leading-snug mb-4 flex-grow">
                  {post.title}
                </h3>

                {/* Read More Link */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start text-[#E89161] font-semibold text-sm hover:text-[#0B5E6F] transition-colors duration-300 flex items-center group-hover:translate-x-1 transform"
                >
                  Read more
                  <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
