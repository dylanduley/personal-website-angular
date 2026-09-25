import { Component, HostBinding, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  protected readonly theme = inject(ThemeService);

  readonly links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About Me', exact: false },
    { path: '/portfolio', label: 'Portfolio', exact: false }
  ];

  isMobileMenuOpen = false;
  isScrolled = false;

  @HostBinding('class.is-scrolled') get scrolledClass() {
    return this.isScrolled || this.isMobileMenuOpen;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('document:keydown.escape')
  closeMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
