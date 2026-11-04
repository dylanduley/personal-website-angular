import { Component, input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-card',
  imports: [TagComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  readonly title = input('');
  readonly description = input('');
  readonly tags = input<string[]>([]);
}
