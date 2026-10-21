import { Component } from '@angular/core';
import {SectionHeaderComponent} from '../section-header/section-header.component';
import { IconComponent } from '../icon/icon.component';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  github?: string;
  site?: string;
}

@Component({
  selector: 'app-project-section',
  standalone: true,
  templateUrl: './project-section.component.html',
  imports: [
    SectionHeaderComponent,
    IconComponent
  ],
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {
  // leave github/site empty to hide that icon
  projects: Project[] = [
    {
      title: 'Titanium — Life Insurance Policy Management',
      category: 'Angular + Spring',
      description: 'Developed responsive frontend dashboards for managing policies and API-driven forms with validation. Implemented backend services for policy lifecycle management, including APIs, services, and secure data processing.',
      image: '/assets/images/web/titanium.webp'
    },
    {
      title: 'Doodle Plaza',
      category: 'React + Next.js',
      description: 'A tiny social space for pixel doodles, inspired by Miiverse and Flipnote. Every post is hand-drawn on a 320×120 canvas, shared in themed plazas, and people can give their favorites a Yeah! There is also a daily prompt for everyone to draw.',
      image: '/assets/images/web/doodle-plaza.webp',
      github: 'https://github.com/dylanduley/doodle-plaza',
      site: 'doodle-plaza.vercel.app'
    },
    {
      title: 'Snake Game',
      category: 'Java',
      description: 'A recreation of the classic Snake game, implemented in Java using JFrame and Canvas for the graphical interface.',
      image: '/assets/images/web/snake.webp',
      github: 'https://github.com/dylanduley/snake-game'
    },
    {
      title: 'My website',
      category: 'Angular',
      description: 'The website you are currently browsing. :D Created this beautiful website to showcase my work and future creative endeavors.',
      image: '/assets/images/web/website.webp',
      github: 'https://github.com/dylanduley/personal-website-angular',
      site: 'https://www.dylanduley.com/'
    }
  ];
}
