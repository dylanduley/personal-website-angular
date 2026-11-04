import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { FACTS } from '../../data/facts';

@Component({
  selector: 'app-about-intro',
  imports: [IconComponent],
  templateUrl: './about-intro.component.html',
  styleUrl: './about-intro.component.scss',
})
export class AboutIntroComponent {
  readonly facts = FACTS;
}
