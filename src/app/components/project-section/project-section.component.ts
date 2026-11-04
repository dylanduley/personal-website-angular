import { Component, input } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { IconComponent } from '../icon/icon.component';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-section',
  imports: [SectionHeaderComponent, IconComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  readonly header = input('Projects');
  readonly projects = PROJECTS;
}
