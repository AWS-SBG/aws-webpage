import React from 'react';
import { motion } from 'motion/react';
import { useFadeIn } from '../lib/motion';

const SLACK_URL = 'https://join.slack.com/t/mawsbuilders/shared_invite/zt-47pp0sp1e-UpvbV5XT62wXtHbcJrE0bg';

const steps = [
  {
    step: '01',
    title: 'Join the Slack',
    description: 'One click, no application. This is where events, resources, and project teams get announced.',
  },
  {
    step: '02',
    title: 'Claim your credits',
    description: 'Members get AWS credits, certification exam vouchers, and full AWS Skill Builder access.',
  },
  {
    step: '03',
    title: 'Start building',
    description: 'Workshops with AWS engineers, the Builder Hackathon, and member projects you can ship.',
  },
];

export const JoinCTA = () => {
  const fadeIn = useFadeIn();
  return (
    <section className="py-24 px-6 bg-[#00274C] relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.10] pointer-events-none"
        style={{ backgroundColor: '#FFCB05' }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">

        <motion.div
          initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
          whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#FFCB05]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">How it works</span>
            <div className="h-px w-12 bg-[#FFCB05]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
            Ready to{' '}
            <span className="italic font-serif text-[#FFCB05]">build?</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mt-14 mb-14">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={fadeIn ? { opacity: 0, y: 30 } : { y: 30 }}
              whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.03] p-8"
            >
              <span className="text-xs font-mono tracking-widest text-[#FFCB05]">{item.step}</span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2 tracking-tight">{item.title}</h3>
              <p className="text-sm font-light text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={fadeIn ? { opacity: 0, y: 20 } : { y: 20 }}
          whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <a
            href={SLACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-12 py-5 bg-[#FFCB05] text-[#00274C] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#FFCB05]/90 transition-colors shadow-xl shadow-[#FFCB05]/20"
          >
            Join our Slack →
          </a>
          <p className="mt-5 text-sm text-white/40">
            Free to join · Open to all U-M students · Launching Fall 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
};
