export interface MemberProject {
  title: string;
  stack: string[];
  description: string;
  status: 'In Progress' | 'Completed';
  url?: string;
}

export const memberProjects: MemberProject[] = [
  {
    title: 'Grant Tracking App',
    stack: ['AWS Amplify', 'DynamoDB', 'React'],
    description: 'A full-stack app for tracking research grant deadlines and funding status, built during the Builder Hackathon.',
    status: 'In Progress',
  },
];
