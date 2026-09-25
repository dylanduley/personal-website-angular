import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [TagComponent],
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() tags: string[] = [];
}
