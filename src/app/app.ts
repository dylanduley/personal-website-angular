import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    inject(SeoService).init();

    // offset anchor scrolling by the fixed header height
    inject(ViewportScroller).setOffset(() => {
      const header =
        typeof document !== 'undefined' ? document.querySelector('app-header .header') : null;
      return [0, (header?.getBoundingClientRect().height ?? 75) + 16];
    });
  }

  skipToMain(event: Event): void {
    event.preventDefault();
    document.getElementById('main')?.focus();
  }
}
