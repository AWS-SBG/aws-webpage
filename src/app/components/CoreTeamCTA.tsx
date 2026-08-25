import React from 'react';
import { motion } from 'motion/react';
import { useFadeIn } from '../lib/motion';
import { ArrowRight } from 'lucide-react';

const roles = ['Secretary', 'Treasurer', 'Marketing Director', 'Bootcamp Director'];

export const CoreTeamCTA = () => {
  const fadeIn = useFadeIn();
  return (
    <section className="py-24 px-6 bg-[#00274C] relative overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: '#FFCB05' }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ backgroundColor: '#90D5FF' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* Left — Headline */}
          <motion.div
            initial={fadeIn ? { opacity: 0, y: 50 } : { y: 50 }}
            whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFCB05] border border-[#FFCB05]/30 px-4 py-2 rounded-full mb-10">
              Core Team · Summer 2026
            </span>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
              Be a <br />
              <span className="italic font-serif text-[#FFCB05]">founder.</span>
            </h2>

            <p className="text-lg font-light text-white/60 leading-relaxed max-w-xl">
              We&apos;re assembling the founding core team ahead of our Fall 2026 launch. Core team members shape everything: curriculum, events, culture, and membership.
            </p>
          </motion.div>

          {/* Right — Roles + CTA */}
          <motion.div
            initial={fadeIn ? { opacity: 0, x: 30 } : { x: 30 }}
            whileInView={fadeIn ? { opacity: 1, x: 0 } : { x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:pl-12 lg:border-l border-white/10"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">Open roles</p>
            <div className="flex flex-wrap gap-3 mb-12">
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={fadeIn ? { opacity: 0, y: 10 } : { y: 10 }}
                  whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="px-4 py-2 bg-white/10 border border-white/10 text-sm font-light text-white rounded-full"
                >
                  {role}
                </motion.span>
              ))}
            </div>

            <a
              href="#apply"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFCB05] text-[#00274C] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#FFCB05]/90 transition-colors shadow-lg shadow-[#FFCB05]/20"
            >
              Apply to Core Team
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-xs font-mono text-white/30 mt-6">
              Roles filled on a rolling basis · Club launches Fall 2026
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
