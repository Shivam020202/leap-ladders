import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Strategize the Change",
      subtitle: "Consulting",
      description: "We partner with organizations to turn people strategy into practical, sustainable action. With 20+ years in HR and Organizational Development, we support leaders through transformation—whether it involves rethinking HR systems, reshaping culture, or aligning leadership around a shared direction.",
      features: [
        "HR Operating Model and process transformation",
        "Culture, capability, and experience design",
        "Learning strategy and modernization",
        "Technology and digital enablement",
        "Change, adoption and knowledge management"
      ],
      cta: "Request a free consultation",
      expert: "Smritie",
      ctaColor: "#0B5E6F"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Transform Your People",
      subtitle: "Coaching",
      description: "Growth doesn't happen through sessions alone—it happens when people feel equipped, supported, and confident. We build capability across leaders, teams, educators, students, and early-career professionals through coaching and skill-building programs designed to create real, lasting behavioral change.",
      features: [
        "Leadership and Manager Development",
        "Early career and college to corporate readiness",
        "Communication, language and behavior skills",
        "Team effectiveness, collaboration, and tech enablement",
        "Academic, educator and student enablement"
      ],
      cta: "Talk to an expert",
      expert: "Roopali",
      ctaColor: "#E89161"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Find the Method in the Madness",
      subtitle: "Toolkit",
      description: "We believe great ideas only matter when they can be put into practice. That's why we create simple, adaptable, and field-tested tools that make HR work real, repeatable, and scalable. Our templates and frameworks support performance management, onboarding, employee engagement, DEI enablement, and POSH compliance.",
      features: [
        "Experience design, coaching and manager enablement (kits)",
        "Performance and growth frameworks",
        "Onboarding, SOPs, and workflow templates",
        "Employee engagement and culture kit",
        "Compliance, governance and policy toolkits"
      ],
      cta: "Book a 1-on-1 with an expert",
      expert: "Chumki",
      ctaColor: "#E89161"
    }
  ];

  return (
    <section className="bg-[#FFF8F3] py-8 md:py-16 border-b-[2px] border-[#E7E7E7]">
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
              What We Do
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-[#0B5E6F] mb-6 leading-tight">
            Our services & solutions
          </h2>
          <p className="text-[16px] text-[#4A5568] max-w-4xl leading-[1.8]">
            We design learning experiences that build skills and spark confidence — for students, professionals, and organizations. From classroom skilling programs and student workshops, to leadership coaching, team capability-building, and tailored learning resources, we support people at different stages of life and work to grow with clarity and purpose.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="border-[2px] border-[#E7E7E7] bg-white flex flex-col"
            >
              {/* Icon Container */}
              <div className="p-8 pb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="w-16 h-16 bg-[#FFF8F5] border-[2px] border-[#E89161] flex items-center justify-center text-[#E89161] mb-8"
                >
                  {service.icon}
                </motion.div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[13px] uppercase tracking-[0.1em] text-[#E89161] font-semibold mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-[15px] leading-[1.7] text-[#4A5568] mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-4">
                  {service.features
                    .slice(0, expandedService === index ? service.features.length : 3)
                    .map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + 0.3 + (i * 0.08),
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="flex items-start gap-3"
                      >
                        {/* Dot Icon */}
                        <div className="flex-shrink-0 mt-1.5">
                          <svg className="w-3 h-3 text-[#E89161]" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="5" />
                          </svg>
                        </div>
                        <span className="text-[14px] text-[#1a1a1a] leading-[1.6]">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                </div>

                {/* Read More Button */}
                {service.features.length > 3 && (
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="text-[#E89161] font-medium text-[14px] mb-8 hover:underline inline-flex items-center"
                  >
                    {expandedService === index ? "Read less" : "Read more"}
                    <motion.span
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-1"
                    >
                      ↓
                    </motion.span>
                  </button>
                )}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                className="mt-auto p-8 pt-0"
              >
                <button
                  className="w-full px-6 py-4 text-white text-[14px] font-semibold tracking-wide flex items-center justify-center gap-3 group transition-all duration-300 hover:gap-4"
                  style={{ backgroundColor: service.ctaColor }}
                >
                  {service.cta}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-[12px] text-[#4A5568] text-center mt-3">
                  Connect with <span className="font-semibold text-[#0B5E6F]">{service.expert}</span>
                </p>
              </motion.div>

              {/* Decorative Corner Accent */}
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[2px] border-l-[2px]" style={{ borderColor: service.ctaColor, opacity: 0.3 }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border-t-[2px] border-[#E89161] pt-6">
            <p className="text-[14px] text-[#4A5568] italic">
              Our approach is systems-led, data-informed, and context-specific—ensuring solutions that are relevant and lasting.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}