import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() label = '';
  @Input() header = '';
  @Input() description = '';
  @Input() align: 'left' | 'center' = 'left';
}
