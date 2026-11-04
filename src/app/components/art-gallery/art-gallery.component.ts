import { Component, ElementRef, computed, input, signal, viewChild } from '@angular/core';
import { ARTWORKS, Artwork } from '../../data/artwork';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-art-gallery',
  imports: [IconComponent],
  templateUrl: './art-gallery.component.html',
  styleUrl: './art-gallery.component.scss',
})
export class ArtGalleryComponent {
  readonly limit = input<number | null>(null);

  readonly artworks = computed(() => {
    const n = this.limit();
    return n ? ARTWORKS.slice(0, n) : ARTWORKS;
  });

  readonly selected = signal<Artwork | null>(null);

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private opener: HTMLElement | null = null;

  open(art: Artwork, opener: HTMLElement): void {
    this.opener = opener;
    this.selected.set(art);
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  onClosed(): void {
    this.selected.set(null);
    this.opener?.focus();
    this.opener = null;
  }

  onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
