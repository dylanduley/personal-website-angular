import { Component, booleanAttribute, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { IconComponent } from '../icon/icon.component';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-section',
  imports: [SectionHeaderComponent, IconComponent, RouterLink],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  readonly header = input('Projects');
  readonly featuredOnly = input(false, { transform: booleanAttribute });

  readonly projects = computed(() =>
    this.featuredOnly() ? PROJECTS.filter((p) => p.featured) : PROJECTS,
  );
}
