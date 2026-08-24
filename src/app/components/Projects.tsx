import React from 'react';
import { motion } from 'motion/react';
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
    socials: { linkedin: 'https://www.linkedin.com/in/arnavkodwani/' },
  },
];

/** A member shows only the fields they actually supplied. Anyone with nothing
 *  filled in yet — named or not — keeps the standard three-row TBA skeleton so
 *  the grid stays even and the card reads as pending rather than empty. */
const detailRows = (member: TeamMember): [string, string][] => {
  const rows: [string, string][] = [];
  if (member.gradYear) rows.push(['Grad Year', member.gradYear]);
  if (member.major) rows.push(['Major', member.major]);
  if (member.hometown) rows.push(['Hometown', member.hometown]);
  if (member.interests.length) rows.push(['Interests', member.interests.join(', ')]);
  if (member.hotTake) rows.push(['Hot take', member.hotTake]);
  else if (member.funFact) rows.push(['Fun fact', member.funFact]);

  return rows.length ? rows : [['Grad Year', ''], ['Interests', ''], ['Fun fact', '']];
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <p className="text-[13px] leading-relaxed text-white/85">
    <span className="font-bold text-white">{label}:</span>{' '}
    <span className={value ? '' : 'text-white/40 italic'}>{value || 'TBA'}</span>
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

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8 }}
    className="group h-full flex flex-col bg-[#00274C] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-500"
  >
    {/* Avatar */}
    <div className="flex justify-center mb-6">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-[#F4F6F9] shrink-0">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          /* No headshot yet — stand the club mark in its place. Inset to 80% so the
             chip's corners clear the circular crop; its baked-in navy matches the card. */
          <div className="w-full h-full flex items-center justify-center bg-[#00274C]">
            <img
              src="/wolverine-builder.png"
              alt=""
              aria-hidden="true"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
        )}
      </div>
    </div>

    {/* Name + role */}
    <h3 className={`text-lg text-center font-light mb-2 ${member.name ? 'text-white' : 'text-white/40'}`}>
      {member.name || 'Name to be announced'}
    </h3>
    {member.pronouns && (
      <p className="-mt-1 mb-2 text-xs text-center text-white/50">{member.pronouns}</p>
    )}
    <p className="text-sm font-bold text-center text-white mb-5">{member.title}</p>

    {/* Details */}
    <div className="space-y-2">
      {detailRows(member).map(([label, value]) => (
        <DetailRow key={label} label={label} value={value} />
      ))}
    </div>

    <SocialLinks socials={member.socials} />
  </motion.div>
);

export const Projects = () => {
  return (
    <section id="team" className="py-24 px-6 bg-white relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 pointer-events-none" style={{ backgroundColor: '#FFCB05' }} />

      <div className="container mx-auto max-w-[1400px] relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
