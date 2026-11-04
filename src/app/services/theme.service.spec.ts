import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute('data-theme', 'light');
    TestBed.configureTestingModule({});
  });

  it('starts from the theme already set on <html>', () => {
    const theme = TestBed.inject(ThemeService);
    expect(theme.theme()).toBe('light');
  });

  it('toggles the theme, updates <html> and remembers the choice', () => {
    const theme = TestBed.inject(ThemeService);

    theme.toggle();

    expect(theme.isDark()).toBe(true);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
