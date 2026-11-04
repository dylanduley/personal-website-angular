import { Component } from '@angular/core';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { ProjectSectionComponent } from '../../components/project-section/project-section.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ArtGalleryComponent } from '../../components/art-gallery/art-gallery.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    PageBannerComponent,
    ProjectSectionComponent,
    SectionHeaderComponent,
    ArtGalleryComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
