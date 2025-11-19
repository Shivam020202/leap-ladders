import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryPage() {
  const [openExpert, setOpenExpert] = useState(null);
  const [expandedExpert, setExpandedExpert] = useState(null);

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
      role: "Learning Strategist | HR Transformation | Talent Development | Experience Designer",
      img: "/images/team/rupali-2.jpg",
      quote: "Coloring outside the lines because rules are boring.",
      bio: "Roopali brings 15+ years of HR transformation experience to every project. If you see magic in learning design, odds are it's hers.",
      achievements: [
        "Master certified in Experience Design & Design Thinking",
        "Transformed learning cultures at Zomato, MobiKwik & Lenskart",
        "Architect of 100+ bespoke learning programs"
      ],
      expandedContent: "Roopali's strategic thinking and ability to navigate complex projects have made her a sought-after leader in the field of HR. She has a proven track record of building high-performing teams, managing large-scale initiatives, and driving tangible business results.\nShe's delivered over 2350 hours of training, which is more screen time than your favorite Netflix show.\nHer understanding of instructional design and knowledge management is so deep, Google once tried to index her brain.\nComplex projects? Roopali eats those for breakfast (with a side of Avocado of course) with a drizzle of change management.\nSo, if your organization is lost in the wilderness of disengaged employees and training modules that feel like 2003 PowerPoint trauma... fear not.\nRoopali's got the compass, the map, and probably a motivational quote to go with it.\nWatch out, HR Avengers. She's assembling.",
      tab: "Roopali Suri",
      color: "#E89161"
    },
    {
      name: "Sanchita Banerjee",
      role: "Certified Happiness Coach | Published Author | L&D Specialist | Content Curator",
      img: "/images/team/Sanchita.png",
      quote: "Spreading happiness one training session at a time.",
      bio: "Popularly known as the corporate fairy godmother, Sanchita has 15+ years of creating measurable growth and genuine workplace joy.",
      achievements: [
        "Certified Happiness Coach transforming workplace culture",
        "Published author & content creation specialist",
        "Expert in blending psychology with practical L&D"
      ],
      expandedContent: "Sanchita has a proven track record of delivering innovative and impactful training solutions across diverse industries, making her a trusted partner for businesses aiming to elevate their performance and foster a culture of growth. And, of course, because one career wasn't enough to tickle her brains, she founded two companies — Decoding Happiness and FeedIn Services, which sounds like a tech startup but is really where innovation meets people development.\nAnd then, she still had more time in hand so she became an author. She's got books in two languages — English and Hindi including an international bestseller, Unstoppable Courage. That's right. She can inspire you in whichever language your inner critic speaks.\nSo, if you're looking for someone who can project manage a unicorn, coach a cactus into blooming, and still have time to edit a best-seller, Sanchita's your person.",
      tab: "Sanchita Banerjee",
      color: "#0B5E6F"
    },
    {
      name: "Chumki Sen",
      role: "Communication Strategist | Brand Messaging | Internal & External Comms | Soft Skills Training",
      img: "/images/team/chumki.png",
      quote: "Words matter. Clarity matters more.",
      bio: "A communication powerhouse with 20+ years of narrative leadership. HR strategist by day, grammar ninja by legacy.",
      achievements: [
        "20+ years shaping corporate communication strategies",
        "Expert in soft skills training & brand messaging",
        "Yoga instructor bringing balance to boardrooms"
      ],
      expandedContent: "With over two decades of experience spanning media, publishing, healthcare, and insurance, Chumki's pretty much worn every communication hat short of writing carrier pigeon manuals. From drafting white papers to ghostwriting for C-suite execs, she's played spokesperson, strategist, editor, and occasional sanity-restorer for brands like Max Life Insurance and GE Medical Systems. As Assistant Editor at Business World, she edited news with one eye, ran the desk with the other. Oh, and did we mention she researched, wrote, and roamed for travel guides at Dorling Kindersley?\n\nHobbies? Reading, traveling, and reminding people that yoga is more than just headstands — it's also how she handles project deadlines.\nWith a career that reads like a bookshelf and the agility to switch from internal comms to downward dog in 2.3 seconds, she's back in the game — strategic, centered, and creatively caffeinated.",
      tab: "Chumki Sen",
      color: "#E89161"
    },
    {
      name: "Sakshi Khurana",
      role: "L&D Specialist | OD Transformation | Talent Development | Employee Experience Designer",
      img: "/images/team/sakshi.png",
      quote: "From boardroom to microphone, hitting all the right notes.",
      bio: "Sakshi's 18 years span TA, HRBP, L&D, and OD — like a playlist of HR hits that actually delivers results.",
      achievements: [
        "Full-spectrum HR expertise: TA, HRBP, L&D & OD",
        "Transformed teams at Cognizant, Infosys & startups",
        "Professional singer bringing rhythm to retention"
      ],
      expandedContent: "Sakshi tangoed with Talent Acquisition, and has been the secret spice behind Hiring. She has introduced Induction programs that don't induce naps, skip-level meetings that skip the embarrassment and HR reviews that didn't involve pocket cuts.\nSakshi has served a lot of 'a-ha' learning programs for field executives as well as client service teams, sales professionals and IT specialists. She's clocked training hours are more like HR version of a marathoner – 4500+ manhours.\nWhen she's not fine-tuning PowerPoint presentations, she's busy hitting high notes. She's a trained classical vocalist, who has lent her voice to e-learning modules for universities and participated in marketing and advertising collaborations with corporates and freelance organizations.\nBasically, she hits the right notes both in HR and from behind the mic.",
      tab: "Sakshi Khurana",
      color: "#0B5E6F"
    },
    {
      name: "Payal Lath",
      role: "Educator | Mentor | Teacher Trainer | Curriculum Designer",
      img: "/images/team/payal.jpg",
      quote: "Making learning fizz, pop, and bubble with purpose.",
      bio: "Armed with a Master's in Chemistry and 10+ years in education, Payal transforms complex concepts into engaging experiences.",
      achievements: [
        "Master's in Chemistry with 10+ years teaching experience",
        "Expert in curriculum design & teacher training",
        "Transforms complex concepts into engaging learning"
      ],
      expandedContent: "Payal fully trilingual – fluent in Hindi, English, and Punjabi – whether the conversation turns academic, emotional, or just mildly dramatic, she can keep up with it.\nAfter finally washing her hands off the chalk dust, she has set her sights on something bigger – up-skilling teachers in small towns to help strengthen education right, where it matters most. These days, she designs creative, workshops on everything from education management to classroom delivery – sprinkled, of course, with practical tips for keeping students engaged and awake.\nShe believes that if teachers are given the right tools, a few creative nudges, and a strong cup of chai – they'll light up minds (without setting off the fire alarm).",
      tab: "Payal Lath",
      color: "#E89161"
    },
  ];
 const [activeIndex, setActiveIndex] = useState(0);
  const activeExpert = experts[activeIndex];
  return (
    <div className="min-h-screen bg-[#FFF8F3] text-[var(--fg)] font-sans no-rounded">
      <style>{`
        :root {
          --bg: #ffffff;
          --card: #fafafa;
          --fg: #1c1c1c;
          --muted: #4e4e4e;
          --accent: #0B5E6F;
          --accent-2: #39d98a;
          --line: #e7e7e7;
        }
        .no-rounded * { border-radius: 0 !important; }
      `}</style>

      {/* HERO SECTION */}
 {/* HERO SECTION */}
{/* HERO SECTION */}
<section id="hero" className="border-b border-[#E7E7E7] bg-[#FFF8F3] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFF8F5]/30 to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-20 py-8 md:py-16">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT — Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#E89161]" />
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#E89161] font-semibold">
                Our Philosophy
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1a1a1a] mb-12"
            >
              We{" "}
              <span className="relative inline-block text-[#0B5E6F]">
                engage
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  // className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#E89161] origin-left"
                />
              </span>{" "}
              minds,{" "}
              <span className="relative inline-block text-[#0B5E6F]">
                empower
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  // className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#E89161] origin-left"
                />
              </span>{" "}
              growth and{" "}
              <span className="relative inline-block text-[#0B5E6F]">
                excel
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  // className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#E89161] origin-left"
                />
              </span>{" "}
              together
            </motion.h1>

            {/* Three Values */}
            <div className="space-y-8 max-w-2xl">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + (i * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative"
                >
                  {/* Number indicator */}
                  <div className="absolute -left-1 top-0 text-[80px] font-bold text-[#0B5E6F] opacity-[0.03] leading-none pointer-events-none">
                    {i + 1}
                  </div>
                  
                  <div className="relative border-l-[3px] border-[#E89161] pl-6 py-1">
                    {/* Accent dot */}
                    <div className="absolute -left-[7px] top-3 w-[11px] h-[11px] bg-[#E89161] transform rotate-45" />
                    
                    <h3 className="text-[18px] font-bold text-[#0B5E6F] mb-2 tracking-wide uppercase text-[13px]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#4A5568]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA or Stats (optional addition) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="h-[1px] w-16 bg-[#E89161]" />
              <p className="text-[13px] text-[#4A5568] italic">
                Building better workplaces, one leap at a time
              </p>
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative frame elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-[3px] border-r-[3px] border-[#E89161] pointer-events-none z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-[3px] border-l-[3px] border-[#0B5E6F] pointer-events-none" />
              
              {/* Image container */}
              <div className="relative border-[2px] border-[#E7E7E7] overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -left-6 bg-[#0B5E6F] border-[2px] border-[#E7E7E7] p-6 z-20 min-w-[200px]"
              >
                <div className="text-[11px] uppercase tracking-[0.12em] text-[#E89161] font-semibold mb-2">
                  Since 2019
                </div>
                <div className="text-3xl font-bold text-white">
                  700+
                </div>
                <div className="text-[13px] text-white/80 mt-1">
                  Learners Empowered
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>



      {/* SECTION 2 — The Leap of Faith */}
    <section className="border-b border-[#E7E7E7] bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 md:py-16">
        {/* Header with decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-[#E89161]" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#E89161] font-medium">
              Our Story
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-[#0B5E6F] leading-[1.1]">
            The Leap of faith
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* LEFT — Main Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Opening paragraph - larger */}
              <p className="text-[17px] leading-[1.7] text-[#0B5E6F] font-medium">
                To put it plainly, it all started when four women with solid corporate pedigrees,
                and even stronger opinions and diverse backgrounds just took a shot. That's the only story actually.
              </p>

              {/* Chips section with accent border */}
              <div className="border-l-[3px] border-[#E89161] pl-6 py-2">
                <div className="flex flex-wrap gap-3">
                  {chips.map((chip, i) => (
                    <motion.div
                      key={chip}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + (i * 0.1),
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="border-[1.5px] border-[#E89161] px-5 py-2.5 bg-[#FFF8F5] text-[#E89161] text-[13px] font-medium tracking-wide"
                    >
                      {chip}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Body paragraphs */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 text-[15px] leading-[1.8] text-[#4A5568]"
              >
                <p>
                  The situation: the 9-to-9 grind wasn't working anymore with increasing traffic on the road
                  and general madness of running around with chronic shortage of sleep.
                </p>
                <p>
                  So why not make better use of their time and their brain cells to create and build something of their own?
                  A little more human, collective determination and with a lot of 'good' coffee they turned their corporate
                  wisdom into workable, practical, personal and a powerful HR training and leadership program.
                </p>
                <p>
                  It began as one project and soon it gathered pace – more clients, more ideas and a strong urge to put it
                  all out there. Because great work deserves to be seen (and occasionally shown off).
                </p>
              </motion.div>

              {/* Closing statement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-[17px] leading-[1.7] text-[#0B5E6F] font-medium pt-4"
              >
                So here we are – four women, one ladder, and plenty of leaps ahead.
              </motion.p>
            </motion.div>
          </div>

          {/* RIGHT — Visual accent column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Accent corner */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-[3px] border-l-[3px] border-[#E89161]" />
              
              <div className="border-[1.5px] border-[#E7E7E7] bg-[#FFF8F5] p-8 mt-2 ml-2">
                <svg className="w-8 h-8 text-[#E89161] mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-[15px] leading-[1.8] text-[#0B5E6F] font-medium">
                  No strategy slides. No investor decks. Just curiosity, craft, and a stubborn desire to do HR better for real people.
                </p>
                <div className="mt-6 pt-4 border-t border-[#E89161]/20">
                  <p className="text-[12px] uppercase tracking-[0.1em] text-[#E89161] font-semibold">
                    Founders, Leap Ladders
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Metrics grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.k}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + (i * 0.08),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="border-[1.5px] border-[#E7E7E7] bg-white p-6 relative overflow-hidden group"
                >
                  {/* Subtle accent line on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E89161] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                  
                  <div className="text-[11px] uppercase tracking-[0.12em] text-[#E89161] font-semibold mb-2">
                    {metric.k}
                  </div>
                  <div className="text-3xl font-semibold text-[#0B5E6F] tracking-tight">
                    {metric.v}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] bg-gradient-to-r from-[#E89161] to-transparent origin-left"
            />
          </div>
        </div>
      </div>
    </section>

      {/* SECTION 3 – Meet Our Experts */}
  <section className="bg-[#FAFAFA] py-8 md:py-16 border-b-[2px] border-[#E7E7E7]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-[2px] bg-[#E89161]" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#E89161] font-semibold">
              The Dream Team
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-[#0B5E6F] mb-4 leading-tight">
            Meet Our Experts
          </h2>
          <p className="text-[15px] text-[#4A5568] max-w-3xl leading-relaxed">
            Four women with solid corporate pedigrees, stronger opinions, and diverse backgrounds who decided to take a leap together.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4 mb-8 justify-center"
        >
          {experts.map((expert, index) => (
            <motion.button
              key={expert.tab}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className={`px-6 py-3 text-[13px] font-medium tracking-wide transition-all duration-300 border-[2px] ${
                activeIndex === index
                  ? 'text-white border-transparent'
                  : 'text-[#4A5568] border-[#E7E7E7] bg-white'
              }`}
              style={{
                backgroundColor: activeIndex === index ? expert.color : undefined,
              }}
            >
              {expert.tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border-[2px] border-[#E7E7E7]"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* LEFT — Image Side */}
              <div className="relative bg-[#FFF8F5] overflow-hidden">
                {/* Large Quote Mark */}
                <div className="absolute top-12 left-8 text-[200px] font-serif text-[#0B5E6F] opacity-[0.03] leading-none pointer-events-none">
                  "
                </div>

                {/* Quote Text Overlay */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-24 left-8 right-8 max-w-md z-10"
                >
                  <p className="text-[18px] leading-[1.6] text-[#0B5E6F] font-medium italic">
                    {activeExpert.quote}
                  </p>
                </motion.div> */}

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full min-h-[600px]"
                >
                  <img
                    src={activeExpert.img}
                    alt={activeExpert.name}
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>

                {/* Corner Accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute bottom-0 right-0 w-24 h-24 border-r-[3px] border-b-[3px]"
                  style={{ borderColor: activeExpert.color }}
                />
              </div>

              {/* RIGHT — Content Side */}
              <div className="p-10 lg:p-12 flex flex-col justify-center relative">
                {/* Corner Accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute top-0 left-0 w-20 h-20 border-t-[3px] border-l-[3px] border-[#0B5E6F]"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Name */}
                  <h3 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    {activeExpert.name}
                  </h3>

                  {/* Role */}
                  <p className="text-[14px] text-[#4A5568] mb-6 leading-relaxed">
                    {activeExpert.role}
                  </p>

                  {/* Bio */}
                  <p className="text-[15px] text-[#4A5568] leading-[1.8] mb-8">
                    {activeExpert.bio}
                  </p>

                  {/* Divider */}
                  <div 
                    className="w-20 h-[2px] mb-8"
                    style={{ backgroundColor: activeExpert.color }}
                  />

                  {/* Achievements Header */}
                  <h4 className="text-[13px] uppercase tracking-[0.12em] text-[#0B5E6F] font-bold mb-6">
                    {activeExpert.name.split(' ')[0]}'s Achievements
                  </h4>

                  {/* Achievements List */}
                  <div className="space-y-4 mb-8">
                    {activeExpert.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + (i * 0.1),
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="flex items-start gap-3"
                      >
                        {/* Checkmark Circle */}
                        <div
                          className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: activeExpert.color }}
                        >
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-[15px] leading-[1.7] text-[#4A5568] flex-1">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Know More Button & Expanded Content */}
                  {activeExpert.expandedContent && (
                    <div className="mb-8">
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        onClick={() => setExpandedExpert(expandedExpert === activeIndex ? null : activeIndex)}
                        className="inline-flex items-center gap-2 text-[14px] font-medium transition-all duration-300 hover:gap-3"
                        style={{ color: activeExpert.color }}
                      >
                        Know more
                        <motion.span
                          animate={{ rotate: expandedExpert === activeIndex ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ↓
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {expandedExpert === activeIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-6 border-t border-[#E7E7E7]">
                              {activeExpert.expandedContent.split('\n').map((paragraph, i) => (
                                paragraph.trim() && (
                                  <p key={i} className="text-[15px] leading-[1.8] text-[#4A5568] mb-4">
                                    {paragraph}
                                  </p>
                                )
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Social Icons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-4 pt-6 border-t border-[#E7E7E7]"
                  >
                    <span className="text-[12px] uppercase tracking-[0.1em] text-[#4A5568]">
                      Connect
                    </span>
                    <div className="flex gap-3">
                      {['Be', 'Db', 'In', 'Tw'].map((icon, i) => (
                        <div
                          key={icon}
                          className="w-9 h-9 border-[1.5px] border-[#E7E7E7] bg-white flex items-center justify-center text-[11px] font-bold text-[#0B5E6F] opacity-60 hover:opacity-100 transition-opacity duration-300"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </motion.div>
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
