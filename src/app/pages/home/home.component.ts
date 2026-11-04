import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SkillSectionComponent } from '../../components/skills-section/skill-section.component';
import { ExperienceSectionComponent } from '../../components/experience-section/experience-section.component';

const HERO_PRELOADS = [
  {
    href: '/assets/images/web/hero-day.webp',
    media: '(min-width: 801px) and (prefers-color-scheme: light)',
  },
  {
    href: '/assets/images/web/hero-day-sm.webp',
    media: '(max-width: 800px) and (prefers-color-scheme: light)',
  },
  {
    href: '/assets/images/web/hero-night.webp',
    media: '(min-width: 801px) and (prefers-color-scheme: dark)',
  },
  {
    href: '/assets/images/web/hero-night-sm.webp',
    media: '(max-width: 800px) and (prefers-color-scheme: dark)',
  },
];

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SkillSectionComponent, ExperienceSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {
    const doc = inject(DOCUMENT);
    for (const { href, media } of HERO_PRELOADS) {
      if (doc.head.querySelector(`link[rel="preload"][href="${href}"]`)) continue;
      const link = doc.createElement('link');
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'image');
      link.setAttribute('href', href);
      link.setAttribute('media', media);
      link.setAttribute('fetchpriority', 'high');
      doc.head.appendChild(link);
    }
  }
}
