/** Drives the per-event accent colour, icon and kicker label on the card. */
export type EventKind = "bootcamp" | "mhacks" | "panel";

export interface Event {
  title: string;
  kind: EventKind;
  date: string;
  /** Omit while the schedule is still unconfirmed — the card hides the row. */
  time?: string;
  location?: string;
  description: string;
  /** Short pills under the description. Keep to three or fewer. */
  tags?: string[];
  /** Optional flourish line, set in italic serif under the title. */
  note?: string;
  url: string;
}

const MEETUP = "https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/";

export const events: Event[] = [
  {
    title: "Cloud Quest Kickoff Bootcamp",
    kind: "bootcamp",
    date: "Fall 2026",
    description:
      "Hands-on intro to AWS Cloud and Generative AI Practitioner concepts. No prior experience needed.",
    tags: ["Beginner friendly", "Certification prep"],
    url: MEETUP,
  },
  {
    title: "MHacks Track: Best Use of AWS",
    kind: "mhacks",
    date: "October 3–4",
    location: "Ann Arbor, MI",
    // Echoes the MHacks 2026 "Digital Garden" tagline.
    note: "Build something that grows.",
    description:
      "We're sponsoring a track at MHacks, Michigan's flagship hackathon. Build anything you want over 24 hours, grow it on AWS, and the strongest project takes Best Use of AWS.",
    tags: ["Sponsored track", "1,000+ hackers", "Prizes TBA"],
    url: MEETUP,
  },
  {
    title: "Intern Night",
    kind: "panel",
    date: "October 5",
    description:
      "Current interns share how they landed the offer: resumes, interview loops, and the cloud skills that actually mattered on the job.",
    tags: ["AWS", "DraftKings", "Capital One"],
    url: MEETUP,
  },
];
