export interface Event {
  title: string;
  date: string;
  /** Omit while the schedule is still unconfirmed — the card hides the row. */
  time?: string;
  location?: string;
  description: string;
  url: string;
}

export const events: Event[] = [
  {
    title: "Cloud Quest Kickoff Bootcamp",
    date: "Fall 2026",
    description: "Hands-on intro to AWS Cloud and Generative AI Practitioner concepts. No prior experience needed.",
    url: "https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/",
  },
  {
    title: "AWS Builder Hackathon",
    date: "Fall 2026",
    description: "Build something real on AWS in a day. Open to all members, with prizes for top teams.",
    url: "https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/",
  },
  {
    title: "Industry Networking Night",
    date: "Fall 2026",
    description: "Meet AWS and tech industry professionals and hear what skills employers are hiring for right now.",
    url: "https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/",
  },
];
