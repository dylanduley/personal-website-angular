export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  github?: string;
  site?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Insurance Policy Management Platform',
    category: 'Angular + Spring',
    description:
      'My current work at LIDP. I develop across the full stack of a life insurance policy management platform: responsive dashboards and validated, API-driven forms on the frontend, and services that manage the policy lifecycle and handle data securely on the backend.',
    image: '/assets/images/web/life-insurance.webp',
  },
  {
    title: 'Doodle Plaza',
    category: 'React + Next.js',
    description:
      'A small social platform for pixel art, inspired by Miiverse and Flipnote. Users draw posts on a 320×120 canvas, share them in themed plazas, react with a "Yeah!" and respond to a daily drawing prompt.',
    image: '/assets/images/web/doodle-plaza.webp',
    github: 'https://github.com/dylanduley/doodle-plaza',
    site: 'https://doodle-plaza.vercel.app/',
  },
  {
    title: 'Snake Game',
    category: 'Java',
    description:
      'A recreation of the classic Snake game in Java, using JFrame and Canvas for rendering.',
    image: '/assets/images/web/snake.webp',
    github: 'https://github.com/dylanduley/snake-game',
  },
  {
    title: 'Random Quotes',
    category: 'HTML + CSS + JS',
    description: 'A static site that displays a random quote from a curated collection.',
    image: '/assets/images/web/random-quotes.webp',
    github: 'https://github.com/dylanduley/random-quotes',
    site: 'https://dylanduley.github.io/random-quotes/',
  },
  {
    title: 'Personal Website',
    category: 'Angular',
    description:
      'This site. Built with Angular and SCSS as a home for my professional work and artwork.',
    image: '/assets/images/web/website.webp',
    github: 'https://github.com/dylanduley/personal-website-angular',
    site: 'https://www.dylanduley.com/',
  },
];
