import React from 'react';
import { motion } from 'motion/react';

const SLACK_URL = 'https://join.slack.com/t/mawsbuilders/shared_invite/zt-47pp0sp1e-UpvbV5XT62wXtHbcJrE0bg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-[#00274C]">

      {/* Blobs — maize top-right, light blue bottom-right only, no left-side overlap */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-[0.12] pointer-events-none"
        style={{ backgroundColor: '#FFCB05' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[-15%] right-[-5%] w-[45vw] h-[45vw] rounded-full blur-[130px] opacity-[0.22] pointer-events-none"
        style={{ backgroundColor: '#90D5FF' }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center pt-24 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-mono uppercase tracking-widest mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFCB05] animate-pulse" />
          Official AWS Chapter
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-8 text-white"
        >
          Built to{' '}
          <span className="italic font-serif text-[#FFCB05]">Build.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl font-light text-white/70 max-w-2xl leading-relaxed mb-10"
        >
          Free AWS credits, certification vouchers, and workshops run with AWS engineers, open to all U-M students.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <a
            href={SLACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#FFCB05] text-[#00274C] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#FFCB05]/90 transition-colors shadow-lg shadow-[#FFCB05]/20"
          >
            Join our Slack →
          </a>
        </motion.div>

        {/* Secondary text links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
        >
          <a href="https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
            Meetup
          </a>
          <span>·</span>
          <a href="https://www.instagram.com/awssbgmich/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
            Instagram
          </a>
          <span>·</span>
          <a href="https://www.linkedin.com/company/aws-builders-umich/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
            LinkedIn
          </a>
        </motion.div>

        {/* Affiliation bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-6 border-t border-white/10 pt-8 w-full text-white/30 text-xs font-mono uppercase tracking-widest"
        >
          <span>Official AWS Student Builder Group</span>
          <span className="text-white/15">·</span>
          <span>University of Michigan</span>
          <span className="text-white/15">·</span>
          <span>Launching Fall 2026</span>
        </motion.div>
      </div>
    </section>
  );
};
