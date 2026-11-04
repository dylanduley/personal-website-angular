import { Component } from '@angular/core';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { AboutIntroComponent } from '../../components/about-intro/about-intro.component';
import { SketchbookTeaserComponent } from '../../components/sketchbook-teaser/sketchbook-teaser.component';

@Component({
  selector: 'app-about',
  imports: [PageBannerComponent, AboutIntroComponent, SketchbookTeaserComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
