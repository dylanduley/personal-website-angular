import { Component, HostListener, Input, computed, signal } from '@angular/core';
import { ARTWORKS, Artwork } from '../../data/artwork';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-art-gallery',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.scss']
})
export class ArtGalleryComponent {
  private readonly max = signal<number | null>(null);

  @Input() set limit(value: number | null | undefined) {
    this.max.set(value ?? null);
  }

  readonly artworks = computed(() => {
    const n = this.max();
    return n ? ARTWORKS.slice(0, n) : ARTWORKS;
  });

  readonly selected = signal<Artwork | null>(null);

  open(art: Artwork) {
    this.selected.set(art);
  }

  @HostListener('document:keydown.escape')
  close() {
    this.selected.set(null);
  }
}
