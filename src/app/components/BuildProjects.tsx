import React from 'react';
import { motion } from 'motion/react';
import { useFadeIn } from '../lib/motion';
import { memberProjects } from '../data/memberProjects';

export const BuildProjects = () => {
  const fadeIn = useFadeIn();
  if (memberProjects.length === 0) return null;

  return (
    <section id="projects" className="py-24 px-6 bg-[#00274C] relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.18] pointer-events-none" style={{ backgroundColor: '#90D5FF' }} />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
          whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">Member Work</span>
            <div className="h-px w-20 bg-[#FFCB05]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
            What {"We're"} <span className="italic font-serif text-[#FFCB05]">Building</span>
          </h2>
          <p className="text-lg font-light text-white/60 max-w-2xl mt-6 leading-relaxed">
            Real projects built by club members on AWS. Updated each semester.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className={`grid gap-8 ${memberProjects.length > 1 ? 'md:grid-cols-2' : 'md:max-w-2xl'}`}>
          {memberProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
              whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300 flex flex-col gap-6"
            >
              {/* Top row: status + stack */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  project.status === 'Completed'
                    ? 'bg-[#FFCB05] text-[#00274C]'
                    : 'bg-[#90D5FF]/15 text-[#90D5FF]'
                }`}>
                  {project.status}
                </span>
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-white/60 bg-white/[0.08] px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFCB05] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-[#FFCB05] transition-colors"
                >
                  View project →
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
