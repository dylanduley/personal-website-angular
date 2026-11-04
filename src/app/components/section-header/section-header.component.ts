import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  readonly label = input('');
  readonly header = input('');
  readonly description = input('');
  readonly align = input<'left' | 'center'>('left');
}
