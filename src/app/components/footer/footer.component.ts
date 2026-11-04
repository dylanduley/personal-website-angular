import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { SOCIAL_LINKS } from '../../data/social';

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly socialLinks = SOCIAL_LINKS;
}
