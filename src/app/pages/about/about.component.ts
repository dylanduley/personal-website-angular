import { Component } from '@angular/core';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';
import { HeaderComponent } from '../../components/header/header.component';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { AboutIntroComponent } from '../../components/about-intro/about-intro.component';
import { SketchbookTeaserComponent } from '../../components/sketchbook-teaser/sketchbook-teaser.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PageWrapperComponent,
    HeaderComponent,
    PageBannerComponent,
    AboutIntroComponent,
    SketchbookTeaserComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent {}
