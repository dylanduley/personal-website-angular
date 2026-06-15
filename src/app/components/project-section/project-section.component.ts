import { Component } from '@angular/core';

@Component({
  selector: 'app-project-section',
  standalone: true,
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {
  projects = [
    {
      title: 'Titanium — Life Insurance Policy Management',
      category: 'Angular frontend and Spring backend',
      description: 'Collaborated with a team to build a modern, responsive frontend for managing life insurance policies. Developed dashboards, streamlined user workflows, and implemented complex, API-driven forms with robust validation to deliver a seamless user experience. Designed and implemented backend services for insurance policy lifecycle management. Built APIs, created services, and handled secure data processing and business logic.',
      image: '/assets/images/titanium.png'
    },
    {
      title: 'Super Mario Bros Clone',
      category: 'Game',
      description: 'A simple recreation of Super Mario Bros physics built in Pygame. Implemented physics, level rendering, animations, collisions, and game state logic.',
      image: '/assets/images/mario.png'
    },
    {
      title: 'My website',
      category: 'Angular based frontend',
      description: 'The website your currently browsing. :D Created this beautiful website to showcase my work and future creative endeavors.',
      image: '/assets/images/website.png'
    }
  ];
}
