import { Component } from '@angular/core';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { AboutIntroComponent } from '../../components/about-intro/about-intro.component';

@Component({
  selector: 'app-about',
  imports: [PageBannerComponent, AboutIntroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
