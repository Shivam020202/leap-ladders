import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const [isTopRowPaused, setIsTopRowPaused] = useState(false);
  const [isBottomRowPaused, setIsBottomRowPaused] = useState(false);

  const topRowTestimonials = [
    {
      company: "GENPACT",
      quote: "Working with this team brought structure, creativity, and rigor to our learning ecosystem. The programs they designed significantly improved learner engagement and channel effectiveness. Their approach reflects deep instructional design craft and a genuine commitment to impact."
    },
    {
      company: "NTT",
      quote: "Our recruiter learning and candidate experience programs were transformed end-to-end. They combined thoughtful design with outcomes-driven execution, making complex initiatives feel seamless and aligned to business goals."
    },
    {
      company: "ACCENTURE",
      quote: "This team brings structure, clarity, and sound judgment to every project. Their depth in L&D and HR makes them a trusted partner who drives progress, removes blockers, and elevates outcomes — consistently."
    },
    {
      company: "GUS",
      quote: "A tremendous asset to our HR function — dedicated, solution-oriented, and respected across the organization. Their willingness to step up, collaborate, and support others left a lasting impact."
    }
  ];

  const bottomRowTestimonials = [
    {
      company: "ABC CONSULTANTS",
      quote: "A passionate HR team that thrives in complex environments. They build trust effortlessly, drive culture programs with intention, and bring fresh, contemporary thinking to strategic HR. They help workplaces feel more connected and aligned."
    },
    {
      company: "NIELSEN",
      quote: "The team brings deep HR expertise and fresh, actionable ideas. They drive meaningful employee engagement and are highly appreciated for their energy, facilitation style, and commitment to people growth."
    },
    {
      company: "UOB GROUP",
      quote: "Sharp research, thoughtful messaging, and a human approach to content design. The team invests time in understanding context and delivers clarity and precision in every output. A dependable partner across learning and communication initiatives."
    }
  ];

  // Duplicate testimonials for infinite scroll - triple for smoother loop
  const topRowDuplicated = [...topRowTestimonials, ...topRowTestimonials, ...topRowTestimonials];
  const bottomRowDuplicated = [...bottomRowTestimonials, ...bottomRowTestimonials, ...bottomRowTestimonials, ...bottomRowTestimonials];

  const TestimonialCard = ({ company, quote }) => (
    <div className="flex-shrink-0 w-[280px] md:w-[420px] mx-2 md:mx-4">
      <div className="bg-[#FFF8F5] border-[2px] border-[#E7E7E7] p-5 md:p-8 h-full">
        {/* Quote Mark */}
        <svg className="w-7 h-7 md:w-10 md:h-10 text-[#E89161] mb-3 md:mb-4 opacity-40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>

        {/* Quote Text */}
        <p className="text-[13px] md:text-[15px] leading-[1.7] text-[#1a1a1a] mb-4 md:mb-6">
          {quote}
        </p>

        {/* Company */}
        <div className="pt-3 md:pt-4 border-t-[2px] border-[#E89161]/20">
          <p className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.1em] text-[#0B5E6F]">
            {company}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#FFF8F3] py-8 md:py-16 mx-auto max-w-7xl overflow-hidden border-b-[2px] border-[#E7E7E7]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 mb-8 md:mb-16">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="bg-[#0B5E6F] px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#E89161]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-white text-[11px] md:text-[13px] font-medium">Trusted by 700+ professionals</span>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-[#0B5E6F] mb-4 leading-tight px-2">
            Words of praise from others<br className="hidden md:block" />
            <span className="md:inline"> about our presence.</span>
          </h2>
        </motion.div>
      </div>

      {/* Top Row - Left to Right */}
      <div className="mb-6 md:mb-8 relative overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FFF8F3] to-transparent z-10 pointer-events-none" />

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FFF8F3] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex"
          animate={isTopRowPaused ? {} : {
            x: [0, '-33.33%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
          onMouseEnter={() => setIsTopRowPaused(true)}
          onMouseLeave={() => setIsTopRowPaused(false)}
          style={{ willChange: 'transform' }}
        >
          {topRowDuplicated.map((testimonial, index) => (
            <TestimonialCard 
              key={`top-${index}`}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Row - Right to Left */}
      <div className="relative overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FFF8F3] to-transparent z-10 pointer-events-none" />

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FFF8F3] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex"
          animate={isBottomRowPaused ? {} : {
            x: ['-25%', 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear"
            }
          }}
          onMouseEnter={() => setIsBottomRowPaused(true)}
          onMouseLeave={() => setIsBottomRowPaused(false)}
          style={{ willChange: 'transform' }}
        >
          {bottomRowDuplicated.map((testimonial, index) => (
            <TestimonialCard 
              key={`bottom-${index}`}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}