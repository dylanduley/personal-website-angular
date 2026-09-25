import { Component } from '@angular/core';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SkillSectionComponent } from '../../components/skills-section/skill-section.component';
import { ExperienceSectionComponent } from '../../components/experience-section/experience-section.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    PageWrapperComponent,
    HeroComponent,
    SkillSectionComponent,
    ExperienceSectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
