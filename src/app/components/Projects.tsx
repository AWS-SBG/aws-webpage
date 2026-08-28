import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useFadeIn, useMediaQuery } from '../lib/motion';
import { Github, Linkedin, Instagram, Mail, Globe, Youtube } from 'lucide-react';

/** Add a key here and it becomes available on every member's `socials` object. */
const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  email: Mail,
  website: Globe,
} as const;

type SocialKey = keyof typeof SOCIAL_ICONS;

interface TeamMember {
  /** Empty until the role is filled — the card renders a placeholder instead. */
  name: string;
  title: string;
  gradYear: string;
  interests: string[];
  funFact: string;
  /** Optional — only the ones provided become rows, so no member shows filler. */
  pronouns?: string;
  major?: string;
  hometown?: string;
  /** Rendered in place of `funFact`, under its own label. */
  hotTake?: string;
  image?: string;
  /** Plug in URLs later — only the keys present render an icon. */
  socials?: Partial<Record<SocialKey, string>>;
}

const team: TeamMember[] = [
  {
    name: 'Jordan Ayling',
    title: 'President',
    gradYear: '2028',
    major: 'Computer Science',
    interests: ['Building in all aspects'],
    funFact:
      "I'm a Navy veteran and love traveling the world when I can: Japan, Costa Rica, Puerto Rico, Mexico. Next up are Canada and the Dolomites in Italy.",
    image: '/team/jordan-ayling.jpg',
    socials: {
      github: 'https://github.com/JordanAyl',
      linkedin: 'https://www.linkedin.com/in/jordan-ayling-darial/',
    },
  },
  {
    name: 'Justin Lagman',
    title: 'Vice President & Design',
    gradYear: '',
    interests: [],
    funFact: '',
    image: '/team/justin-lagman.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/justin-lagman/' },
  },
  {
    name: 'Yunying (Yuni) Zhang',
    title: 'Head of Cloud Engineering',
    pronouns: 'She/her',
    gradYear: '',
    major: 'Computer Science',
    hometown: 'Midland, MI',
    interests: [],
    funFact: '',
    hotTake: 'Python indexing should start at 1',
    image: '/team/yunying-zhang.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/yunying-zhang-5440662a9' },
  },
  {
    name: 'Shiraaz Haidar',
    title: 'Head of Financial Engineering',
    gradYear: '2029',
    major: 'Computer Science',
    interests: ['AI', 'Design'],
    funFact:
      "I'm currently developing a personalized AI assistant for my room! Outside of tech, I'm passionate about languages and am planning to study abroad in Spain.",
    image: '/team/shiraaz-haidar.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/shiraazhaidar/' },
  },
  {
    name: 'Arnav Kodwani',
    title: 'Head of Technologies',
    pronouns: 'He/Him',
    gradYear: '',
    major: 'Computer Science',
    hometown: 'Troy, MI',
    interests: [],
    funFact: '',
    hotTake: "Emojis have peaked, we don't need more",
    image: '/team/arnav-kodwani.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/arnavkodwani/' },
  },
];

/** Grad Year, Interests and the personality line always show — falling back to TBA —
 *  so every card answers the same questions. Major and Hometown appear only when given. */
const detailRows = (member: TeamMember): [string, string][] => {
  const rows: [string, string][] = [
    ['Grad Year', member.gradYear],
    ['Interests', member.interests.join(', ')],
  ];
  if (member.major) rows.push(['Major', member.major]);
  if (member.hometown) rows.push(['Hometown', member.hometown]);
  rows.push(member.hotTake ? ['Hot take', member.hotTake] : ['Fun fact', member.funFact]);
  return rows;
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <p className="text-[12px] leading-relaxed text-white/75">
    <span className="font-bold text-white">{label}:</span>{' '}
    <span className={value ? '' : 'italic text-white/40'}>{value || 'TBA'}</span>
  </p>
);

const SocialLinks = ({ socials }: { socials?: Partial<Record<SocialKey, string>> }) => {
  const entries = (Object.keys(SOCIAL_ICONS) as SocialKey[])
    .filter((key) => socials?.[key])
    .map((key) => [key, socials![key] as string] as const);

  if (entries.length === 0) return null;

  return (
    <div className="flex items-center gap-3 pt-5 mt-auto">
      {entries.map(([key, href]) => {
        const Icon = SOCIAL_ICONS[key];
        return (
          <a
            key={key}
            href={key === 'email' ? `mailto:${href}` : href}
            target={key === 'email' ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={key}
            className="text-white/80 hover:text-[#FFCB05] transition-colors duration-300"
          >
            <Icon className="w-5 h-5" strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
};

const TeamCard = ({ member }: { member: TeamMember }) => {
  const rows = detailRows(member);
  const reduceMotion = useReducedMotion();
  /* Narrow screens slide without fading — see useFadeIn for why. */
  const fadeIn = useFadeIn();
  /* Touch fires pointerenter with no pointerleave, which leaves a tapped card stuck lifted. */
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');

  return (
    <motion.div
      initial={reduceMotion ? false : fadeIn ? { opacity: 0, y: 18 } : { y: 18 }}
      whileInView={reduceMotion ? undefined : fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
      viewport={{ once: true, margin: '0px 0px 800px 0px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={canHover && !reduceMotion ? { y: -8 } : undefined}
      className={`group h-full flex flex-col overflow-hidden rounded-2xl bg-[#00274C] shadow-sm transition-shadow duration-500 ${
        canHover ? 'hover:shadow-xl' : ''
      }`}
    >
      {/* Photo panel — square to match the source crops, so nothing gets re-cropped. */}
      <div className="relative w-full aspect-square overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-full object-cover object-center ${
              canHover ? 'transition-transform duration-700 ease-out group-hover:scale-[1.04]' : ''
            }`}
          />
        ) : (
          /* No headshot yet — stand the club mark in its place. */
          <div className="w-full h-full flex items-center justify-center bg-[#00274C]">
            <img
              src="/wolverine-builder.png"
              alt=""
              aria-hidden="true"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        )}
        {/* Scrim so the photo settles into the card instead of ending on a hard edge. */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#00274C] to-transparent pointer-events-none" />
      </div>

      <div className="relative -mt-4 flex flex-1 flex-col px-5 pb-5">
        <h3 className={`text-base font-medium leading-tight ${member.name ? 'text-white' : 'text-white/40'}`}>
          {member.name || 'Name to be announced'}
        </h3>
        {member.pronouns && <p className="mt-0.5 text-[11px] text-white/55">{member.pronouns}</p>}
        <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#FFCB05]">
          {member.title}
        </p>

        <div className="mt-3 space-y-1.5">
          {rows.map(([label, value]) => (
            <DetailRow key={label} label={label} value={value} />
          ))}
        </div>

        <SocialLinks socials={member.socials} />
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const fadeIn = useFadeIn();
  return (
    <section id="team" className="py-24 px-6 bg-white relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 pointer-events-none" style={{ backgroundColor: '#FFCB05' }} />

      <div className="container mx-auto max-w-[1400px] relative z-10">

        {/* Section Header */}
        <motion.div
          initial={fadeIn ? { opacity: 0, y: 40 } : { y: 40 }}
          whileInView={fadeIn ? { opacity: 1, y: 0 } : { y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00274C]/50">Team</span>
            <div className="h-px w-20 bg-[#FFCB05]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#00274C]">
            Meet the <span className="italic font-serif text-[#FFCB05]">Team</span>
          </h2>
        </motion.div>

        {/* Team Grid — all five in one row on large screens, equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};
