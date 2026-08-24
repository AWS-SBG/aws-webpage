import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import umAwsLogo from '../../imports/Frame1/928df293123cc664a4d68c71b80294b486382868.png';

const SLACK_URL = 'https://join.slack.com/t/mawsbuilders/shared_invite/zt-47pp0sp1e-UpvbV5XT62wXtHbcJrE0bg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navItems = [
    { name: 'Programs', to: '/#services' },
    { name: 'Events', to: '/#events' },
    { name: 'Members', to: '/#membership' },
    { name: 'Team', to: '/#team' },
    { name: 'Contact', to: '/#connect' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-black/5'
          : 'bg-white/90 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="flex items-center gap-2 z-50">
            <motion.img
              src={umAwsLogo}
              alt="UMich AWS logo"
              className="h-8 w-8 object-contain self-center"
              initial={{ rotate: -180 }}
              animate={{ rotate: [-180, 0, 0] }}
              transition={{ rotate: { duration: 6.004, times: [0, 0.1008, 1], ease: ['easeOut', 'linear'], repeat: Infinity } }}
            />
            <span className="self-center text-sm md:text-base font-bold tracking-tight text-[#00274C]">AWS Student Builder Group at UMich</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link
                to={item.to}
                className="text-sm font-medium text-[#00274C]/70 hover:text-[#00274C] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCB05] transition-all group-hover:w-full rounded-full" />
              </Link>
            </motion.div>
          ))}
          <motion.a
            href={SLACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="px-4 py-2 bg-[#FFCB05] text-[#00274C] text-sm font-semibold rounded-full hover:bg-[#FFCB05]/90 transition-colors"
          >
            Join Slack
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 text-[#00274C]">
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
            >
              {navItems.map((item) => (
                <Link key={item.name} to={item.to} className="text-3xl font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors">
                  {item.name}
                </Link>
              ))}
              <a href={SLACK_URL} target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-3 bg-[#FFCB05] text-[#00274C] font-bold rounded-full text-lg">
                Join Slack
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
