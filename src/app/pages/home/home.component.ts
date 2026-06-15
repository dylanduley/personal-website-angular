import { Component } from '@angular/core';
import {PageWrapperComponent} from '../../components/page-wrapper/page-wrapper.component';
import {HeroComponent} from '../../components/hero/hero.component';
import {SkillSectionComponent} from '../../components/skills-section/skill-section.component';
import {ProjectSectionComponent} from '../../components/project-section/project-section.component';
import {ExperienceSectionComponent} from '../../components/experience-section/experience-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    PageWrapperComponent,
    HeroComponent,
    SkillSectionComponent,
    ProjectSectionComponent,
    ExperienceSectionComponent,
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
