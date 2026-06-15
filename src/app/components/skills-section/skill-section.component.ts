import { Component } from '@angular/core';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  templateUrl: './skill-section.component.html',
  imports: [
    CardComponent
  ],
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent {
}
