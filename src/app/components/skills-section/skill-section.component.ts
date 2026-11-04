import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { SKILL_GROUPS } from '../../data/skills';

@Component({
  selector: 'app-skill-section',
  imports: [CardComponent, SectionHeaderComponent],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss',
})
export class SkillSectionComponent {
  readonly skillGroups = SKILL_GROUPS;
}
