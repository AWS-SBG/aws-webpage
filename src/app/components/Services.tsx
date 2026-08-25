import React from 'react';
import { motion } from 'motion/react';
import { useFadeIn } from '../lib/motion';
import { BookOpen, Award, Zap, Users } from 'lucide-react';

const events = [
  {
    icon: BookOpen,
    tag: "Bootcamp",
    tagColor: "bg-[#FFCB05] text-[#00274C]",
    borderColor: "border-l-[#FFCB05]",
    title: "Cloud Quest Bootcamp",
    description: "A hands-on introduction to AWS Cloud and Generative AI Practitioner concepts. No prior experience required.",
  },
  {
    icon: Award,
    tag: "Bootcamp",
    tagColor: "bg-[#90D5FF] text-[#00274C]",
    borderColor: "border-l-[#90D5FF]",
    title: "Microcredential Bootcamp",
    description: "Master AWS cloud concepts and walk away exam-ready. Strong participants may qualify for an AWS certification exam voucher.",
  },
  {
    icon: Zap,
    tag: "Hackathon",
    tagColor: "bg-[#FFCB05] text-[#00274C]",
    borderColor: "border-l-[#FFCB05]",
    title: "AWS Builder Hackathon",
    description: "Build something real on AWS in a weekend. Open to all members, with prizes and certification opportunities for top teams.",
  },
  {
    icon: Users,
    tag: "Networking",
    tagColor: "bg-[#90D5FF] text-[#00274C]",
    borderColor: "border-l-[#90D5FF]",
    title: "Industry Networking Panel",
    description: "AWS and tech industry professionals talk cloud careers, certifications, and what skills employers want right now.",
  },
];

export const Services = () => {
  const fadeIn = useFadeIn();
  return (
    <section id="services" className="py-24 px-6 bg-[#F4F6F9] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-30 pointer-events-none" style={{ backgroundColor: '#90D5FF' }} />

      <div className="container mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00274C]/50">Programs</span>
              <div className="h-px w-20 bg-[#90D5FF]" />
            </div>
            <motion.h2
              initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
              whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-[#00274C]"
            >
              What We <span className="italic font-serif text-[#FFCB05]">Do</span>
            </motion.h2>
          </div>
          <motion.p
            initial={fadeIn ? { opacity: 0, x: 20 } : { x: 20 }}
            whileInView={fadeIn ? { opacity: 1, x: 0 } : { x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg font-light text-[#5a6474] max-w-sm leading-relaxed"
          >
            Events and programs built to give Michigan students real AWS experience, from zero to cloud-certified.
          </motion.p>
        </div>

        {/* Events Grid — zipper layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-y-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
              whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={index % 2 === 1 ? 'md:mt-16' : ''}
              whileHover={{ y: -6 }}
            >
              <div className={`bg-white rounded-2xl p-8 shadow-sm border-l-4 ${event.borderColor} hover:shadow-md transition-shadow duration-300`}>
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${event.tagColor}`}>
                    {event.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F4F6F9] flex items-center justify-center text-[#00274C]">
                    <event.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#00274C] mb-3 tracking-tight">{event.title}</h3>
                <p className="text-[#5a6474] font-light leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};
