import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { events } from '../data/events';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** Renders 'September 12, 2026' as SEP/12, 'Fall 2026' as FALL/2026, 'TBD' as one line. */
const EventDate = ({ date }: { date: string }) => {
  const [label, value] = date.split(' ');
  const short = MONTHS.includes(label) ? label.slice(0, 3) : label;

  return (
    <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/[0.08] border border-white/10 flex flex-col items-center justify-center text-white group-hover:bg-white/[0.12] group-hover:border-white/20 transition-colors duration-300">
      {value ? (
        <>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFCB05] leading-none">
            {short}
          </span>
          <span className="text-2xl font-bold leading-none mt-1.5">
            {value.replace(',', '')}
          </span>
        </>
      ) : (
        <span className="text-base font-bold uppercase tracking-widest leading-none">
          {label}
        </span>
      )}
    </div>
  );
};

export const Events = () => {
  if (events.length === 0) return null;

  return (
    <section id="events" className="py-24 px-6 bg-[#00274C] relative overflow-hidden scroll-mt-24">
      <div className="absolute bottom-0 right-0 w-[460px] h-[460px] rounded-full blur-[140px] opacity-[0.14] pointer-events-none" style={{ backgroundColor: '#FFCB05' }} />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">Upcoming</span>
            <div className="h-px w-20 bg-[#FFCB05]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
            Upcoming <span className="italic font-serif text-[#FFCB05]">Events</span>
          </h2>
        </motion.div>

        {/* Event Cards */}
        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <motion.a
              key={index}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6"
            >
              {/* Date block */}
              <EventDate date={event.date} />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFCB05] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-white/60 font-normal text-sm leading-relaxed mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-white/50">
                  {event.time && (
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{event.time}</span>
                  )}
                  {event.location && (
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
                  )}
                  {!event.time && !event.location && (
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Exact date &amp; location TBA</span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFCB05] text-[#00274C] text-xs font-bold uppercase tracking-widest rounded-full group-hover:shadow-lg group-hover:shadow-[#FFCB05]/30 transition-all duration-300">
                  RSVP
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
