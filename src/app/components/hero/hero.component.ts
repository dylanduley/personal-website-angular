import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { SOCIAL_LINKS } from '../../data/social';

@Component({
  selector: 'app-hero',
  imports: [IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly socialLinks = SOCIAL_LINKS;
}
