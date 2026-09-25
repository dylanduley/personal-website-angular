import { Component } from '@angular/core';
import {SectionHeaderComponent} from '../section-header/section-header.component';

@Component({
  selector: 'app-project-section',
  standalone: true,
  templateUrl: './project-section.component.html',
  imports: [
    SectionHeaderComponent
  ],
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {
  projects = [
    {
      title: 'Titanium — Life Insurance Policy Management',
      category: 'Angular + Spring',
      description: 'Developed responsive frontend dashboards for managing policies and API-driven forms with validation. Implemented backend services for policy lifecycle management, including APIs, services, and secure data processing.',
      image: '/assets/images/web/titanium.webp'
    },
    {
      title: 'Super Mario Bros Clone',
      category: 'Python · Pygame',
      description: 'A simple recreation of Super Mario Bros physics built in Pygame. Implemented physics, level rendering, animations, collisions, and game state logic.',
      image: '/assets/images/web/mario.webp'
    },
    {
      title: 'My website',
      category: 'Angular',
      description: 'The website you are currently browsing. :D Created this beautiful website to showcase my work and future creative endeavors.',
      image: '/assets/images/web/website.webp'
    }
  ];
}
