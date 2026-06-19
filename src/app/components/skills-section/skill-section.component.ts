import { Component } from '@angular/core';
import {CardComponent} from '../card/card.component';
import {SectionHeaderComponent} from '../section-header/section-header.component';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  templateUrl: './skill-section.component.html',
  imports: [
    CardComponent,
    SectionHeaderComponent
  ],
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent {
}
