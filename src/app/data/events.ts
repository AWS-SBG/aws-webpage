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
    title: "MHacks Track: Best Use of AWS",
    date: "October 3–4",
    location: "MHacks 2026",
    description: "We're sponsoring a track at MHacks. Build whatever you want, deploy it on AWS, and the strongest project takes Best Use of AWS. Prizes TBA.",
    url: "https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/",
  },
  {
    title: "Intern Night",
    date: "Fall 2026",
    description: "Interns from AWS, DraftKings, and Capital One share how they landed the offer: resumes, interview loops, and the cloud skills that actually mattered on the job.",
    url: "https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/",
  },
];
