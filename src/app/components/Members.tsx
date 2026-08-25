import React from 'react';
import { motion } from 'motion/react';
import { useFadeIn } from '../lib/motion';
import { BookOpen, Gamepad2, Users, Network } from 'lucide-react';

const allMemberPerks = [
  {
    icon: BookOpen,
    title: "AWS Skill Builder",
    description: "Access to hundreds of courses, digital badges, and learning paths on AWS Skill Builder.",
  },
  {
    icon: Gamepad2,
    title: "Cloud Quest",
    description: "Gamified, hands-on cloud learning across Cloud Practitioner and Generative AI Practitioner tracks.",
  },
  {
    icon: Users,
    title: "Workshops & Events",
    description: "Workshops, building sessions with Kiro, networking panels, and tournaments open to all members.",
  },
  {
    icon: Network,
    title: "Community & Network",
    description: "Connect with peers and AWS professionals through club events, competitions, and socials.",
  },
];


export const Members = () => {
  const fadeIn = useFadeIn();
  return (
    <section id="membership" className="py-24 px-6 bg-[#F4F6F9] relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-20 pointer-events-none" style={{ backgroundColor: '#90D5FF' }} />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section Header */}
        <motion.div
          initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
          whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00274C]/50">Membership</span>
            <div className="h-px w-20 bg-[#90D5FF]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#00274C]">
            For All <span className="italic font-serif text-[#FFCB05]">Members</span>
          </h2>
          <p className="text-lg font-light text-[#5a6474] max-w-2xl mt-6 leading-relaxed">
            Free learning resources available to every builder from day one.
          </p>
        </motion.div>

        {/* What Everyone Gets */}
        <div className="mb-14">
          <motion.div
            initial={fadeIn ? { opacity: 0, y: 20 } : { y: 20 }}
            whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <h3 className="text-2xl font-bold text-[#00274C] tracking-tight">What Everyone Gets</h3>
            <div className="h-px flex-1 bg-[#00274C]/10" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {allMemberPerks.map((perk, index) => (
              <motion.div
                key={index}
                initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
                whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-[#00274C]/5 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#FFCB05]"
              >
                <div className="mb-5 w-11 h-11 rounded-full bg-[#FFCB05]/15 flex items-center justify-center text-[#00274C] group-hover:bg-[#FFCB05] transition-colors duration-300">
                  <perk.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#00274C] mb-2">{perk.title}</h4>
                <p className="text-[#5a6474] font-light leading-relaxed text-sm">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
