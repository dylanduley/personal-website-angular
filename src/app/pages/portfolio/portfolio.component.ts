import { Component } from '@angular/core';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectSectionComponent } from '../../components/project-section/project-section.component';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ArtGalleryComponent } from '../../components/art-gallery/art-gallery.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    PageWrapperComponent,
    HeaderComponent,
    PageBannerComponent,
    ProjectSectionComponent,
    SectionHeaderComponent,
    ArtGalleryComponent,
    FooterComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {}
