import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent {
  readonly label = input('');
}
