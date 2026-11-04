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
    title: 'Titanium — Life Insurance Policy Management',
    category: 'Angular + Spring',
    description:
      'Developed responsive frontend dashboards for managing policies and API-driven forms with validation. Implemented backend services for policy lifecycle management, including APIs, services, and secure data processing.',
    image: '/assets/images/web/titanium.webp',
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
