import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-about-intro',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './about-intro.component.html',
  styleUrls: ['./about-intro.component.scss']
})
export class AboutIntroComponent {
  readonly facts = [
    { icon: 'code', value: '2023', label: 'Shipping software at LIDP since' },
    { icon: 'graduation-cap', value: 'UF', label: 'B.S. Computer Science in progress' },
    { icon: 'certificate', value: '4', label: 'LOMA designations: FLMI, ACS, AIRC, ALMI' },
    { icon: 'paintbrush', value: '∞', label: 'Sketches started (mostly unfinished)' }
  ];
}
