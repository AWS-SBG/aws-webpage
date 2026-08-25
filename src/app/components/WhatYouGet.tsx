import React from 'react';
import { motion } from 'motion/react';
import { useFadeIn } from '../lib/motion';
import { Zap, Award, BookOpen, Cpu, Trophy, Users } from 'lucide-react';

const perks = [
  {
    icon: Zap,
    title: 'AWS Credits',
    description: 'Free AWS cloud credits to build and deploy real projects on AWS infrastructure.',
    border: 'border-l-[#FFCB05]',
    iconBg: 'bg-[#FFCB05]/15 group-hover:bg-[#FFCB05]',
  },
  {
    icon: Award,
    title: 'Certification Exam Vouchers',
    description: 'Top bootcamp participants qualify for AWS certification exam vouchers at no cost.',
    border: 'border-l-[#90D5FF]',
    iconBg: 'bg-[#90D5FF]/15 group-hover:bg-[#90D5FF]',
  },
  {
    icon: BookOpen,
    title: 'AWS Skill Builder Access',
    description: 'Hundreds of courses, learning paths, and digital badges, free for every member.',
    border: 'border-l-[#FFCB05]',
    iconBg: 'bg-[#FFCB05]/15 group-hover:bg-[#FFCB05]',
  },
  {
    icon: Cpu,
    title: 'Workshops with AWS Engineers',
    description: 'Hands-on building sessions run directly with AWS technical staff and solutions architects.',
    border: 'border-l-[#90D5FF]',
    iconBg: 'bg-[#90D5FF]/15 group-hover:bg-[#90D5FF]',
  },
  {
    icon: Trophy,
    title: 'Builder Hackathon Track',
    description: 'Compete on a real AWS project in a weekend, with prizes and cert opportunities for top teams.',
    border: 'border-l-[#FFCB05]',
    iconBg: 'bg-[#FFCB05]/15 group-hover:bg-[#FFCB05]',
  },
  {
    icon: Users,
    title: 'Industry Networking',
    description: 'Direct access to AWS professionals and tech recruiters at panel events and socials.',
    border: 'border-l-[#90D5FF]',
    iconBg: 'bg-[#90D5FF]/15 group-hover:bg-[#90D5FF]',
  },
];

export const WhatYouGet = () => {
  const fadeIn = useFadeIn();
  return (
    <section id="services" className="py-24 px-6 bg-[#F4F6F9] relative overflow-hidden scroll-mt-24">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ backgroundColor: '#90D5FF' }} />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00274C]/50">Membership</span>
              <div className="h-px w-20 bg-[#90D5FF]" />
            </div>
            <motion.h2
              initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
              whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-[#00274C]"
            >
              What You <span className="italic font-serif text-[#FFCB05]">Get</span>
            </motion.h2>
          </div>
          <motion.p
            initial={fadeIn ? { opacity: 0, x: 20 } : { x: 20 }}
            whileInView={fadeIn ? { opacity: 1, x: 0 } : { x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg font-light text-[#5a6474] max-w-sm leading-relaxed"
          >
            Everything below is free for every member from day one.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
              whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`group bg-white rounded-2xl p-8 shadow-sm border border-[#00274C]/5 hover:shadow-md transition-all duration-300 border-l-4 ${perk.border}`}
            >
              <div className={`mb-5 w-11 h-11 rounded-full flex items-center justify-center text-[#00274C] transition-colors duration-300 ${perk.iconBg}`}>
                <perk.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#00274C] mb-2">{perk.title}</h3>
              <p className="text-[#5a6474] font-light leading-relaxed text-sm">{perk.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
