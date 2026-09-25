import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';

interface Experience {
  role: string;
  org: string;
  period: string;
  logo: string;
  logoAlt: string;
  description?: string;
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  templateUrl: './experience-section.component.html',
  imports: [SectionHeaderComponent],
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent {
  readonly items: Experience[] = [
    {
      role: 'Senior Full Stack Software Engineer',
      org: 'LIDP Consulting Services',
      period: '2023 – Present',
      logo: 'assets/images/web/LIDP.webp',
      logoAlt: 'LIDP logo',
      description:
        'Developed Angular UI and Java Spring backend solutions for life insurance workflows. Built reusable components, REST APIs, automation tools, and data migration solutions to improve efficiency. Collaborated with teams to deliver solutions and support architectural decisions.'
    },
    {
      role: 'B.S. Computer Science (In Progress)',
      org: 'University of Florida',
      period: '2026 – Present',
      logo: 'assets/images/web/UF.webp',
      logoAlt: 'University of Florida logo'
    },
    {
      role: 'A.A. & A.S. Degrees',
      org: 'State College of Florida',
      period: 'Completed',
      logo: 'assets/images/web/SCF.webp',
      logoAlt: 'State College of Florida logo'
    },
    {
      role: 'Certified FLMI, ACS, AIRC, ALMI',
      org: 'LOMA',
      period: 'Completed',
      logo: 'assets/images/web/LOMA.webp',
      logoAlt: 'LOMA logo'
    }
  ];
}
