import React from 'react';
import { motion } from 'framer-motion';

export default function BYOBSectionok() {
  return (
    <section className="bg-[#FFF8F3] py-8 md:py-16 border-b-[2px] border-[#E7E7E7]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
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
              Beyond The Bottom Line
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-[#0B5E6F] leading-tight">
            BYOB: Building Better Humans
          </h2>
        </motion.div>

        {/* 4 Card Grid - Equal Sizes */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* CARD 1 - Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden border-[2px] border-[#E7E7E7] bg-white aspect-[4/3]"
          >
            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-[#E89161] z-10" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-[#0B5E6F] z-10" />
            
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop"
              alt="BYOB Learning Initiative"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* CARD 2 - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="border-[2px] border-[#E7E7E7] bg-white p-8 lg:p-10 aspect-[4/3] flex flex-col justify-center relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-[2px] border-r-[2px] border-[#E89161] opacity-20" />
            
            <div className="space-y-3 md:space-y-5 text-[13px] md:text-[15px] leading-[1.7] text-[#4A5568]">
              <p className="text-[16px] md:text-[18px] font-semibold text-[#0B5E6F] leading-[1.5]">
                At Leap Ladder, we're in the business of building better humans.
              </p>

              <p>
                BYOB is where we step beyond boardrooms and performance dashboards, and get into the real work: purpose, possibility, and people.
              </p>

              <p>
                We design activity-based learning modules, hands-on skill workshops, and educator development programs that meet learners where they are.
              </p>

              <div className="pt-3 md:pt-4 border-t-[2px] border-[#E89161]/20">
                <p className="text-[13px] md:text-[15px] font-medium text-[#0B5E6F] italic">
                  Real change begins before the résumé. It begins in the classroom.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 - Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-[2px] border-[#E7E7E7] bg-[#0B5E6F] p-8 lg:p-10 aspect-[4/3] flex flex-col justify-center relative overflow-hidden"
          >
            {/* Large decorative letter */}
            <div className="absolute -bottom-8 -right-8 text-[120px] md:text-[180px] lg:text-[220px] font-bold text-white opacity-[0.04] leading-none pointer-events-none">
              BYOB
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-[2px] bg-[#E89161]" />
              
              <h3 className="text-[13px] uppercase tracking-[0.15em] text-[#E89161] font-bold mb-4">
                Our Philosophy
              </h3>
              
              <p className="text-[22px] leading-[1.4] text-white font-semibold mb-4">
                BYOB isn't charity. It's capacity-building. It's future-building.
              </p>
              
              <p className="text-[16px] leading-[1.7] text-white/90">
                It's believing that talent is everywhere — opportunity just needs to catch up.
              </p>
            </div>
          </motion.div>

          {/* CARD 4 - K-12 Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-[2px] border-[#E7E7E7] bg-[#FFF8F5] p-8 lg:p-10 aspect-[4/3] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Decorative number */}
            <div className="absolute -bottom-6 -right-6 text-[100px] md:text-[150px] lg:text-[200px] font-bold text-[#0B5E6F] opacity-[0.03] leading-none pointer-events-none">
             K-12
            </div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-[13px] uppercase tracking-[0.15em] text-[#E89161] font-bold mb-4">
                  K–12 Programs
                </h3>
                <h4 className="text-3xl font-bold text-[#0B5E6F] mb-3 leading-tight tracking-tight">
                  Classrooms That Work, Learning That Lasts
                </h4>
                <div className="w-16 h-[2px] bg-[#E89161]" />
              </div>

              <p className="text-[15px] leading-[1.7] text-[#4A5568] mb-8">
                We're on a mission to help educators teach better, and help students learn smarter — not just in metros, but in the smallest towns.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "🎯", label: "Designed for real-world classrooms" },
                  { icon: "🎓", label: "Built by experts who get it" },
                  { icon: "🚀", label: "Backed by belief" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + (i * 0.1),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-white border-[2px] border-[#E89161] flex items-center justify-center text-sm flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[14px] text-[#1a1a1a] font-medium">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}