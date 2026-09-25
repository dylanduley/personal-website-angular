import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent {
  @Input() label = '';
  @Input() title = '';
  @Input() subtitle = '';
}
