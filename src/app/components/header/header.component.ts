import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '[class.is-scrolled]': 'isScrolled() || isMobileMenuOpen()',
    '[class.is-menu-open]': 'isMobileMenuOpen()',
    '(window:scroll)': 'onWindowScroll()',
    '(window:resize)': 'onWindowResize()',
    '(document:keydown.escape)': 'closeMenu()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class HeaderComponent {
  protected readonly theme = inject(ThemeService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About me', exact: false },
    { path: '/portfolio', label: 'Portfolio', exact: false },
  ];

  readonly isMobileMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  constructor() {
    const router = inject(Router);
    const sub = router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
    inject(DestroyRef).onDestroy(() => sub.unsubscribe());

    afterNextRender(() => this.onWindowScroll());
  }

  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  onWindowResize(): void {
    if (this.isMobileMenuOpen() && window.innerWidth > 768) this.closeMenu();
  }

  onDocumentClick(event: MouseEvent): void {
    if (this.isMobileMenuOpen() && !this.host.nativeElement.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

  closeMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }
}
