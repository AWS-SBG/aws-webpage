import React from 'react';
import { motion } from 'motion/react';
import { useFadeIn } from '../lib/motion';
import { Calendar, Clock, MapPin, ArrowUpRight, Cloud, Sprout, Users, type LucideIcon } from 'lucide-react';
import { events, type EventKind } from '../data/events';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Per-event styling. The MHacks card borrows the sage of their 2026 "Digital Garden"
 * theme (their #bdc59a, lifted for legibility on navy); the rest stay maize and sky.
 */
const KINDS: Record<EventKind, { label: string; accent: string; Icon: LucideIcon }> = {
  bootcamp: { label: 'Bootcamp', accent: '#FFCB05', Icon: Cloud },
  mhacks: { label: 'MHacks 2026 · Digital Garden', accent: '#C2D19B', Icon: Sprout },
  panel: { label: 'Panel', accent: '#57B9FF', Icon: Users },
};

/** Renders 'September 12, 2026' as SEP/12, 'Fall 2026' as FALL/2026, 'TBD' as one line. */
const EventDate = ({ date, accent }: { date: string; accent: string }) => {
  const [label, value] = date.split(' ');
  const short = MONTHS.includes(label) ? label.slice(0, 3) : label;

  return (
    <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/[0.08] border border-white/10 flex flex-col items-center justify-center text-white group-hover:bg-white/[0.12] transition-colors duration-300">
      {value ? (
        <>
          <span className="text-xs font-mono uppercase tracking-widest leading-none" style={{ color: accent }}>
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
  const fadeIn = useFadeIn();
  if (events.length === 0) return null;

  return (
    <section id="events" className="py-24 px-6 bg-[#00274C] relative overflow-hidden scroll-mt-24">
      <div className="absolute bottom-0 right-0 w-[460px] h-[460px] rounded-full blur-[140px] opacity-[0.14] pointer-events-none" style={{ backgroundColor: '#FFCB05' }} />

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
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">Upcoming</span>
            <div className="h-px w-20 bg-[#FFCB05]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
            Upcoming <span className="italic font-serif text-[#FFCB05]">Events</span>
          </h2>
        </motion.div>

        {/* Event Cards */}
        <div className="flex flex-col gap-6">
          {events.map((event, index) => {
            const { label, accent, Icon } = KINDS[event.kind];
            /** 'October 5' has a day; 'Fall 2026' does not — only the latter still needs a date TBA. */
            const dateIsExact = MONTHS.includes(event.date.split(' ')[0]);

            return (
              <motion.a
                key={index}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={fadeIn ? { opacity: 0, y: 30 } : { y: 30 }}
                whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6"
                style={{ '--accent': accent } as React.CSSProperties}
              >
                {/* Accent spine */}
                <span
                  className="absolute inset-y-0 left-0 w-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: accent }}
                />
                {/* Accent glow, revealed on hover */}
                <span
                  className="absolute -right-16 -top-16 w-64 h-64 rounded-full blur-[90px] opacity-0 group-hover:opacity-[0.18] transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: accent }}
                />
                {/* Oversized kind icon as a watermark */}
                <Icon
                  strokeWidth={1}
                  className="absolute -right-4 -bottom-8 w-40 h-40 opacity-[0.05] group-hover:opacity-[0.11] group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none"
                  style={{ color: accent }}
                />

                {/* Date block */}
                <div className="relative">
                  <EventDate date={event.date} accent={accent} />
                </div>

                {/* Info */}
                <div className="relative flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
                    <span className="text-[10px] font-mono uppercase tracking-[0.28em]" style={{ color: accent }}>
                      {label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {event.title}
                  </h3>
                  {event.note && (
                    <p className="italic font-serif text-base mb-2" style={{ color: accent }}>
                      &ldquo;{event.note}&rdquo;
                    </p>
                  )}
                  <p className="text-white/60 font-normal text-sm leading-relaxed mb-4">{event.description}</p>

                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider border transition-colors duration-300"
                          style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}14` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 text-xs font-mono text-white/50">
                    {event.time && (
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{event.time}</span>
                    )}
                    {event.location && (
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
                    )}
                    {!event.location && (
                      <span className="flex items-center gap-1.5">
                        {dateIsExact
                          ? <><MapPin className="w-3.5 h-3.5" />Location TBA</>
                          : <><Calendar className="w-3.5 h-3.5" />Exact date &amp; location TBA</>}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="relative shrink-0">
                  <span
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-[#00274C] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 group-hover:shadow-[0_10px_28px_-8px_var(--accent)]"
                    style={{ backgroundColor: accent }}
                  >
                    RSVP
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
