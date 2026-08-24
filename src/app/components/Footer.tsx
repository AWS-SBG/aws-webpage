import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Send } from 'lucide-react';

const SLACK_URL = 'https://join.slack.com/t/mawsbuilders/shared_invite/zt-47pp0sp1e-UpvbV5XT62wXtHbcJrE0bg';

const connectLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/awssbgmich/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aws-builders-umich/' },
  { label: 'Meetup', href: 'https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/' },
  { label: 'Slack', href: SLACK_URL },
];

const navLinks = [
  { label: 'What You Get', href: '#services' },
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
];

export const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <footer id="connect" className="relative bg-[#00274C] py-20 px-6 overflow-hidden scroll-mt-24">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 mb-16">

            {/* Left — club info */}
            <div>
              <p className="text-white font-bold text-lg mb-2">AWS Student Builder Group at UMich</p>
              <a
                href="mailto:awsumich@umich.edu"
                className="inline-flex items-center gap-2 text-sm font-mono text-white/50 hover:text-[#FFCB05] transition-colors mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCB05] animate-pulse" />
                awsumich@umich.edu
              </a>
              <div>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="text-xs font-mono text-white/30 hover:text-[#FFCB05] transition-colors flex items-center gap-1"
                >
                  Partner or sponsor with us <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right — links */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-white/30 mb-6">Connect</h4>
                <ul className="space-y-4">
                  {connectLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base font-light text-white/60 hover:text-[#FFCB05] transition-colors group"
                      >
                        {label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-white/30 mb-6">Navigate</h4>
                <ul className="space-y-4">
                  {navLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="text-base font-light text-white/60 hover:text-[#FFCB05] transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-4">
            <p className="font-mono text-xs uppercase tracking-widest text-white/25">
              © 2026 AWS Student Builder Group at UMich
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-white/25">
              University of Michigan · Ann Arbor
            </p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        onClose();
        setFormState('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#00274C]/80 backdrop-blur-md z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[101] w-full md:w-[560px] bg-white shadow-2xl p-8 md:p-12 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-[#00274C]/40 hover:text-[#00274C] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-[#FFCB05] rounded-full flex items-center justify-center mb-6"
                >
                  <Send className="w-8 h-8 text-[#00274C]" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#00274C] mb-2">Message Sent!</h3>
                <p className="text-[#5a6474] font-light">{"We'll"} get back to you soon.</p>
              </div>
            ) : (
              <div className="mt-12">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00274C]/40 mb-6 block">Contact Us</span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#00274C] mb-2">
                  Say <span className="italic font-serif text-[#FFCB05]">Hello.</span>
                </h3>
                <p className="text-[#5a6474] font-light mb-10">
                  Questions, partnership ideas, or just curious about the club. {"We'd"} love to hear from you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full border-b-2 border-[#00274C]/15 py-3 text-lg font-light text-[#0d1117] focus:outline-none focus:border-[#FFCB05] transition-colors placeholder:text-[#0d1117]/30 bg-transparent"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full border-b-2 border-[#00274C]/15 py-3 text-lg font-light text-[#0d1117] focus:outline-none focus:border-[#FFCB05] transition-colors placeholder:text-[#0d1117]/30 bg-transparent"
                    />
                    <textarea
                      required
                      placeholder="What's on your mind?"
                      rows={4}
                      className="w-full border-b-2 border-[#00274C]/15 py-3 text-lg font-light text-[#0d1117] focus:outline-none focus:border-[#FFCB05] transition-colors resize-none placeholder:text-[#0d1117]/30 bg-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-[#00274C] text-white text-sm font-bold uppercase tracking-widest py-4 rounded-full hover:bg-[#FFCB05] hover:text-[#00274C] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
