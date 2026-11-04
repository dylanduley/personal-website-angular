import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.scss',
})
export class PageBannerComponent {
  readonly label = input('');
  readonly title = input('');
  readonly subtitle = input('');
}
