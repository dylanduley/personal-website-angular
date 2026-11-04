export interface SkillGroup {
  title: string;
  description: string;
  tags: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Full-Stack Development',
    description:
      'Building scalable web applications with modern frontend frameworks, backend services, and APIs.',
    tags: [
      'Angular',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Java',
      'Spring Boot',
      'Node.js',
      'REST APIs',
    ],
  },
  {
    title: 'UI Engineering',
    description:
      'Creating responsive interfaces with component-driven development and scalable styling systems.',
    tags: ['HTML5', 'SCSS', 'Tailwind CSS', 'Storybook', 'Chromatic', 'Figma'],
  },
  {
    title: 'Cloud, Data & DevOps',
    description:
      'Deploying, automating, and managing applications with modern infrastructure and databases.',
    tags: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'PostgreSQL', 'SQL Server'],
  },
];
