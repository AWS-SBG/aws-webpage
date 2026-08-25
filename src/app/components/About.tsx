import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useFadeIn } from '../lib/motion';
import { CheckCircle } from 'lucide-react';

const highlights = [
  "Core team applications open now",
  "Open to all U-M majors and class years at launch",
  "Free AWS Skill Builder access and Cloud Quest for all members",
];

export const About = () => {
  const fadeIn = useFadeIn();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} id="about" className="py-24 relative bg-white overflow-hidden">
      {/* Subtle maize accent top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ backgroundColor: '#FFCB05' }} />

      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00274C]/50">About the Club</span>
          <div className="h-px flex-1 max-w-[80px] bg-[#FFCB05]" />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">

          {/* Text Content */}
          <div className="relative z-10">
            <motion.h2
              initial={fadeIn ? { opacity: 0, y: 60 } : { y: 60 }}
              whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-[0.9] text-[#00274C]"
            >
              Where Wolverines <br />
              <span className="italic font-serif text-[#FFCB05]">build</span> the future.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 text-base font-normal text-[#5a6474] leading-relaxed mb-12">
              <motion.div
                initial={fadeIn ? { opacity: 0, y: 20 } : { y: 20 }}
                whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="space-y-4"
              >
                <p>The AWS Student Builder Group at UMich is a student-led, student-driven organization focused on learning the cloud through AWS technologies.</p>
                <p>We cover security, AI, business analytics, and the real-world skills employers are actively hiring for.</p>
              </motion.div>
              <motion.div
                initial={fadeIn ? { opacity: 0, y: 20 } : { y: 20 }}
                whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="space-y-4"
              >
                <p>We give students hands-on experience through bootcamps, building sessions, and industry networking, all centered around AWS tools.</p>
                <p className="font-semibold text-[#00274C]">Launching Fall 2026.</p>
              </motion.div>
            </div>

            {/* Highlights */}
            <div className="pt-10 border-t border-[#00274C]/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00274C]/40 block mb-6">What to expect</span>
              <div className="space-y-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={fadeIn ? { opacity: 0, x: -20 } : { x: -20 }}
                    whileInView={fadeIn ? { opacity: 1, x: 0 } : { x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    className="flex items-start gap-3 text-[#0d1117] font-light"
                  >
                    <CheckCircle className="w-5 h-5 text-[#FFCB05] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div style={{ opacity }} className="relative lg:mt-16">
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#F4F6F9]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00274C]/40 to-transparent rounded-2xl" />
            </motion.div>

            {/* Floating tag */}
            <motion.div
              initial={fadeIn ? { opacity: 0, y: 20 } : { y: 20 }}
              whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-[#FFCB05] text-[#00274C] px-5 py-3 rounded-xl font-bold text-sm shadow-lg"
            >
              🎓 U-M Official Club
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
