import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { ArtGalleryComponent } from '../art-gallery/art-gallery.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-sketchbook-teaser',
  standalone: true,
  imports: [IconComponent, RouterLink, SectionHeaderComponent, ArtGalleryComponent],
  templateUrl: './sketchbook-teaser.component.html',
  styleUrls: ['./sketchbook-teaser.component.scss']
})
export class SketchbookTeaserComponent {
  @Input() limit = 3;
}
