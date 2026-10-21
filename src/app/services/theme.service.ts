import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(this.initialTheme());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    if (!this.isBrowser) return;

    this.apply(this.theme());

    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    media?.addEventListener('change', (e) => {
      if (!this.storedTheme()) this.set(e.matches ? 'dark' : 'light', false);
    });
  }

  toggle(): void {
    this.set(this.isDark() ? 'light' : 'dark');
  }

  set(theme: Theme, remember = true): void {
    this.theme.set(theme);
    this.apply(theme);
    if (remember && this.isBrowser) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {}
    }
  }

  private apply(theme: Theme): void {
    if (this.isBrowser) this.doc.documentElement.setAttribute('data-theme', theme);
  }

  private storedTheme(): Theme | null {
    try {
      const t = localStorage.getItem(STORAGE_KEY);
      return t === 'light' || t === 'dark' ? t : null;
    } catch {
      return null;
    }
  }

  private initialTheme(): Theme {
    if (!this.isBrowser) return 'light';
    const attr = this.doc.documentElement.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return this.storedTheme() ?? (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
}
