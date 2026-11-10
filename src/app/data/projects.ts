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
      'At my current job, I work across the full stack of an insurance policy platform. On the frontend, I build responsive dashboards and validated, API-driven forms. On the backend, I build the services that manage the policy lifecycle and handle data securely.',
    image: '/assets/images/web/life-insurance.webp',
  },
  {
    title: 'Doodle Plaza',
    category: 'React + Next.js',
    description:
      'A tiny social space for pixel doodles, inspired by Miiverse and Flipnote. Every post is hand-drawn on a 320×120 canvas, shared in themed plazas, and people can give their favorites a Yeah! There is also a daily prompt for everyone to draw.',
    image: '/assets/images/web/doodle-plaza.webp',
    github: 'https://github.com/dylanduley/doodle-plaza',
    site: 'https://doodle-plaza.vercel.app/',
  },
  {
    title: 'Snake Game',
    category: 'Java',
    description:
      'A recreation of the classic Snake game, implemented in Java using JFrame and Canvas for the graphical interface.',
    image: '/assets/images/web/snake.webp',
    github: 'https://github.com/dylanduley/snake-game',
  },
  {
    title: 'Random Quotes',
    category: 'HTML + CSS + JS',
    description: 'A simple website showcasing random quotes I like.',
    image: '/assets/images/web/random-quotes.webp',
    github: 'https://github.com/dylanduley/random-quotes',
    site: 'https://dylanduley.github.io/random-quotes/',
  },
  {
    title: 'My website',
    category: 'Angular',
    description:
      'The website you are currently browsing. :D Built with Angular and SCSS to showcase my work and future creative endeavors.',
    image: '/assets/images/web/website.webp',
    github: 'https://github.com/dylanduley/personal-website-angular',
    site: 'https://www.dylanduley.com/',
  },
];
