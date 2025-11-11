import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryPageok() {
  const [openExpert, setOpenExpert] = useState(null);

  const values = [
    {
      title: "Engage",
      desc: "We don't just communicate; we connect. Through trust, inclusion, and open dialogue, we build spaces where ideas flow freely.",
    },
    {
      title: "Empower",
      desc: "Growth isn't given, it's inspired. We give people the tools and confidence to lead with purpose.",
    },
    {
      title: "Excel",
      desc: "Excellence isn't a finish line; it's a habit. Together, we raise the bar — every project, every day.",
    },
  ];

  const chips = [
    "No grand business plans",
    "No investor decks.",
    "No endless meetings-that-should-have-been-emails.",
  ];

  const metrics = [
    { k: "Founded", v: "2019" },
    { k: "Programs", v: "100+" },
    { k: "Training Hours", v: "2350+" },
    { k: "Learners", v: "700+" },
  ];

  const experts = [
    {
      name: "Roopali Suri",
      role:
        "Learning Strategist | HR Transformation | Talent Development | Experience Designer",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
      quote: "Coloring outside the lines because rules are boring.",
      bio: "Roopali brings 15+ years of HR transformation experience to every project. If you see magic in learning design, odds are it's hers.",
      achievements: [
        "Master certified in Experience Design & Design Thinking",
        "Transformed learning cultures at Zomato, MobiKwik & Lenskart",
        "Architect of 100+ bespoke learning programs",
      ],
      tab: "Roopali Suri",
      color: "#E89161",
    },
    {
      name: "Sanchita Banerjee",
      role:
        "Certified Happiness Coach | Published Author | L&D Specialist | Content Curator",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop",
      quote: "Spreading happiness one training session at a time.",
      bio: "Popularly known as the corporate fairy godmother, Sanchita has 15+ years of creating measurable growth and genuine workplace joy.",
      achievements: [
        "Certified Happiness Coach transforming workplace culture",
        "Published author & content creation specialist",
        "Expert in blending psychology with practical L&D",
      ],
      tab: "Sanchita Banerjee",
      color: "#0B5E6F",
    },
    {
      name: "Chumki Sen",
      role:
        "Communication Strategist | Brand Messaging | Internal & External Comms | Soft Skills Training",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=800&fit=crop",
      quote: "Words matter. Clarity matters more.",
      bio: "A communication powerhouse with 20+ years of narrative leadership. HR strategist by day, grammar ninja by legacy.",
      achievements: [
        "20+ years shaping corporate communication strategies",
        "Expert in soft skills training & brand messaging",
        "Yoga instructor bringing balance to boardrooms",
      ],
      tab: "Chumki Sen",
      color: "#E89161",
    },
    {
      name: "Sakshi Khurana",
      role:
        "L&D Specialist | OD Transformation | Talent Development | Employee Experience Designer",
      img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=800&h=800&fit=crop",
      quote: "From boardroom to microphone, hitting all the right notes.",
      bio: "Sakshi's 18 years span TA, HRBP, L&D, and OD — like a playlist of HR hits that actually delivers results.",
      achievements: [
        "Full-spectrum HR expertise: TA, HRBP, L&D & OD",
        "Transformed teams at Cognizant, Infosys & startups",
        "Professional singer bringing rhythm to retention",
      ],
      tab: "Sakshi Khurana",
      color: "#0B5E6F",
    },
    {
      name: "Payal Lath",
      role: "Educator | Mentor | Teacher Trainer | Curriculum Designer",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&h=800&fit=crop",
      quote: "Making learning fizz, pop, and bubble with purpose.",
      bio: "Armed with a Master's in Chemistry and 10+ years in education, Payal transforms complex concepts into engaging experiences.",
      achievements: [
        "Master's in Chemistry with 10+ years teaching experience",
        "Expert in curriculum design & teacher training",
        "Transforms complex concepts into engaging learning",
      ],
      tab: "Payal Lath",
      color: "#E89161",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeExpert = experts[activeIndex];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] font-sans no-rounded">
      <style>{`
        :root {
          --bg: #ffffff;
          --card: #fafafa;
          --fg: #1c1c1c;
          --muted: #4e4e4e;
          --accent: #0B5E6F; /* primary teal */
          --accent-2: #E89161; /* warm salmon */
          --line: #e7e7e7;
        }
        .no-rounded * { border-radius: 0 !important; }
        /* Reduce heavy focus outline but keep accessibility */
        :focus { outline: 2px solid rgba(11,94,111,0.12); outline-offset: 2px; }
      `}</style>

      {/* HERO */}
      <section id="hero" className="border-b border-[var(--line)] bg-[var(--bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFF8F5]/40 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-[2px] bg-[var(--accent-2)]" />
                <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--accent-2)] font-semibold">
                  Our Philosophy
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-tight text-[var(--fg)] mb-8 max-w-xl"
              >
                We{" "}
                <span className="relative inline-block text-[var(--accent)]">
                  engage
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-[var(--accent-2)] origin-left"
                  />
                </span>{" "}
                minds,{" "}
                <span className="relative inline-block text-[var(--accent)]">
                  empower
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-[var(--accent-2)] origin-left"
                  />
                </span>{" "}
                growth and{" "}
                <span className="relative inline-block text-[var(--accent)]">
                  excel
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-[var(--accent-2)] origin-left"
                  />
                </span>{" "}
                together
              </motion.h1>

              {/* Values list (compact) */}
              <div className="space-y-6 max-w-2xl">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="relative pl-6"
                  >
                    <div className="absolute -left-2 top-0 text-[72px] font-bold text-[var(--accent)] opacity-[0.03] leading-none pointer-events-none">
                      {i + 1}
                    </div>

                    <div className="border-l-[3px] border-[var(--accent-2)] pl-6 py-1">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[var(--accent-2)] transform rotate-45" />
                        <h3 className="text-[14px] tracking-wide uppercase font-semibold text-[var(--accent)]">
                          {v.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[15px] leading-[1.7] text-[var(--muted)]">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Subnote */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex items-center gap-6"
              >
                <div className="h-[1px] w-16 bg-[var(--accent-2)]" />
                <p className="text-[13px] text-[var(--muted)] italic">
                  Building better workplaces, one leap at a time
                </p>
              </motion.div>
            </div>

            {/* Image column */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                {/* simple decorative corners */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-[3px] border-r-[3px] border-[var(--accent-2)] pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-[3px] border-l-[3px] border-[var(--accent)] pointer-events-none" />

                <div className="relative border-[2px] border-[var(--line)] overflow-hidden">
                  <motion.img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=1200&fit=crop"
                    alt="Team collaboration"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1 }}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>

                {/* small floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="absolute -bottom-6 -left-6 bg-[var(--accent)] border-[2px] border-[var(--line)] p-4 z-10 min-w-[180px]"
                >
                  <div className="text-[11px] uppercase tracking-[0.12em] text-[var(--accent-2)] font-semibold">
                    Since 2019
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">700+</div>
                  <div className="text-[12px] text-white/90 mt-1">Learners Empowered</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Leap of Faith (editorial block using exact content) */}
      <section className="border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-12 items-start">
            {/* left text */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--accent)] mb-6">
                The Leap of faith
              </h2>

              <div className="space-y-5 text-[15px] leading-[1.8] text-[var(--muted)] max-w-prose">
                <p>
                  To put it plainly, it all started when four women with solid corporate pedigrees, and even stronger opinions and diverse backgrounds just took a shot. That’s the only story actually.
                </p>

                {/* chips — exact copy, styled */}
                <div className="flex flex-wrap gap-3">
                  {chips.map((c, i) => (
                    <motion.div
                      key={c}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.08 + i * 0.06 }}
                      className="border border-[var(--line)] px-4 py-2 bg-[#FFF8F5] text-[var(--accent-2)] text-[14px] font-medium"
                    >
                      {c}
                    </motion.div>
                  ))}
                </div>

                <p>
                  The situation: the 9-to-9 grind wasn’t working anymore with increasing traffic on the road and general madness of running around with chronic shortage of sleep.
                </p>

                <p>
                  So why not make better use of their time and their brain cells to create and build something of their own? A little more human, collective determination and with a lot of ‘good’ coffee they turned their corporate wisdom into workable, practical, personal and a powerful HR training and leadership program.
                </p>

                <p>
                  It began as one project and soon it gathered pace – more clients, more ideas and a strong urge to put it all out there. Because great work deserves to be seen (and occasionally shown off).
                </p>

                <p className="text-[15px] text-[var(--accent)] font-medium">
                  So here we are – four women, one ladder, and plenty of leaps ahead.
                </p>
              </div>
            </motion.div>

            {/* right accent column */}
            <motion.aside
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="flex flex-col gap-6"
            >
              {/* quote */}
              <div className="border-l-[4px] border-[var(--accent-2)] bg-[#FFF8F5] p-5">
                <p className="text-[15px] text-[var(--accent)] font-medium italic">
                  “No strategy slides. No investor decks. Just curiosity, craft, and a stubborn desire to do HR better for real people.”
                </p>
                <div className="mt-4 text-[13px] text-[var(--accent-2)] font-semibold">— Founders, Leap Ladders</div>
              </div>

              {/* metrics */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((m, i) => (
                  <motion.div
                    key={m.k}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.12 + i * 0.06 }}
                    className="border border-[var(--line)] bg-[var(--card)] p-4"
                  >
                    <div className="text-[12px] uppercase tracking-[0.12em] text-[var(--accent-2)] font-semibold">{m.k}</div>
                    <div className="mt-2 text-xl font-semibold text-[var(--accent)]">{m.v}</div>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* SECTION 3 – Meet Our Experts */}
      <section className="bg-[#FAFAFA] py-20 border-t border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-[2px] bg-[var(--accent-2)]" />
              <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--accent-2)] font-semibold">The Dream Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--accent)] mb-2">Meet Our Experts</h2>
            <p className="text-[15px] text-[var(--muted)] max-w-3xl">Four women with solid corporate pedigrees, stronger opinions, and diverse backgrounds who decided to take a leap together.</p>
          </motion.div>

          {/* tabs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-8 justify-center"
          >
            {experts.map((ex, idx) => (
              <button
                key={ex.tab}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 text-[13px] font-medium tracking-wide border-[1.5px] ${activeIndex === idx ? 'text-white' : 'text-[var(--muted)]'}`}
                style={{
                  backgroundColor: activeIndex === idx ? ex.color : '#ffffff',
                  borderColor: activeIndex === idx ? ex.color : 'var(--line)',
                }}
                aria-pressed={activeIndex === idx}
              >
                {ex.tab}
              </button>
            ))}
          </motion.div>

          {/* content card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="border border-[var(--line)] bg-white overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* left: image + quote overlay */}
                <div className="relative bg-[#FFF8F5] min-h-[420px]">
                  <div className="absolute top-12 left-8 text-[180px] font-serif text-[var(--accent)] opacity-[0.03] leading-none pointer-events-none">"</div>

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute top-24 left-8 right-8 z-10 max-w-md"
                  >
                    <p className="text-[18px] leading-[1.6] text-[var(--accent)] font-medium italic">
                      {activeExpert.quote}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 1.03, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    className="h-full"
                  >
                    <img
                      src={activeExpert.img}
                      alt={activeExpert.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>

                  <div className="absolute bottom-0 right-0 w-20 h-20" style={{ borderRight: `3px solid ${activeExpert.color}`, borderBottom: `3px solid ${activeExpert.color}` }} />
                </div>

                {/* right: content */}
                <div className="p-8 lg:p-12">
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[var(--fg)] mb-2">{activeExpert.name}</h3>
                    <p className="text-[14px] text-[var(--muted)] mb-6">{activeExpert.role}</p>

                    <p className="text-[15px] text-[var(--muted)] leading-[1.7] mb-6">
                      {activeExpert.bio}
                    </p>

                    <div style={{ height: 2, backgroundColor: activeExpert.color }} className="w-20 mb-6" />

                    <h4 className="text-[13px] uppercase tracking-[0.12em] text-[var(--accent)] font-semibold mb-4">{activeExpert.name.split(' ')[0]}'s Achievements</h4>

                    <div className="space-y-4 mb-6">
                      {activeExpert.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div style={{ backgroundColor: activeExpert.color }} className="w-6 h-6 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-[15px] text-[var(--muted)] leading-[1.7]">{ach}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[var(--line)] flex items-center gap-4">
                      <span className="text-[12px] uppercase tracking-[0.1em] text-[var(--muted)]">Connect</span>
                      <div className="flex gap-3">
                        {["Be", "Db", "In", "Tw"].map((ic) => (
                          <div key={ic} className="w-9 h-9 border border-[var(--line)] flex items-center justify-center text-[11px] font-bold text-[var(--accent)] opacity-80">
                            {ic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
