import React from 'react';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Needy vs. Driven: Stop confusing life stage with a lack of ambition",
      excerpt: "Like my favorite song going round and round my head…",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      category: "Leadership",
      date: "November 10, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Are you content-wise and retention-foolish?",
      excerpt: "In today's information age, knowledge explodes at our fingertips. A simple Google search can unlock a treasure trove of articles, videos, and online courses on virtually any topic imaginable. Surprising with the advent of AI, you can now access information you never imagined too! However, the abundance of this learning material presents a unique question to the learning and development fraternity –",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      category: "Learning & Development",
      date: "November 5, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Like my favorite song going round and round my head…",
      excerpt: "With the advent of the performance season and most of us rounding up annual goals and scorecards – October is typically a busy month. For me, perhaps this time of the year was a bit different and amusing too… It was a month-long learning journey, and for once, I found myself on the receiving end… As a learner.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      category: "Reflection",
      date: "October 28, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="bg-[#FFF8F3] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-[2px] bg-[#E89161]" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#E89161] font-semibold">
              Insights & Stories
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-[#0B5E6F] leading-tight mb-4">
            Our Blog
          </h1>
          <p className="text-[16px] text-[#4A5568] max-w-3xl leading-relaxed">
            Thoughts on learning, leadership, and building better workplaces — one conversation at a time.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-white border-[2px] border-[#E7E7E7] group relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10 bg-[#0B5E6F] px-4 py-1.5">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-white font-semibold">
                    {blog.category}
                  </span>
                </div>

                {/* Image */}
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0B5E6F]/0 group-hover:bg-[#0B5E6F]/10 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Meta Info */}
                <div className="flex items-center gap-3 mb-4 text-[12px] text-[#4A5568]">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B5E6F] mb-3 leading-tight tracking-tight group-hover:text-[#E89161] transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[14px] leading-[1.7] text-[#4A5568] mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-[#E89161] group"
                >
                  Read More
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-[2px] border-b-[2px] border-[#E89161] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.article>
          ))}
        </div>

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0B5E6F] text-white text-[14px] font-semibold uppercase tracking-wide group"
          >
            Load More Articles
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 border-[2px] border-[#E7E7E7] bg-white p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute -bottom-8 -right-8 text-[200px] font-bold text-[#0B5E6F] opacity-[0.02] leading-none pointer-events-none">
            💬
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0B5E6F] mb-4 tracking-tight">
              Ready to Transform Your Team?
            </h3>
            <p className="text-[16px] text-[#4A5568] mb-8 leading-relaxed">
              Let's discuss how we can help you build better learning experiences and drive meaningful growth in your organization.
            </p>

            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#E89161] text-white text-[14px] font-semibold uppercase tracking-wide group"
            >
              TAKE THE LEAP
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}