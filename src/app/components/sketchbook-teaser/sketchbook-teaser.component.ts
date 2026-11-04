import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { ArtGalleryComponent } from '../art-gallery/art-gallery.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-sketchbook-teaser',
  imports: [IconComponent, RouterLink, SectionHeaderComponent, ArtGalleryComponent],
  templateUrl: './sketchbook-teaser.component.html',
  styleUrl: './sketchbook-teaser.component.scss',
})
export class SketchbookTeaserComponent {
  readonly limit = input(3);
}
