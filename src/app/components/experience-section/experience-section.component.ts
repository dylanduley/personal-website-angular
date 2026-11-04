import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { EXPERIENCE } from '../../data/experience';

@Component({
  selector: 'app-experience-section',
  imports: [SectionHeaderComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {
  readonly items = EXPERIENCE;
}
