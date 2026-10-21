import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    // offset anchor scrolling by the fixed header height
    inject(ViewportScroller).setOffset(() => {
      const header = typeof document !== 'undefined' ? document.querySelector('app-header .header') : null;
      return [0, (header?.getBoundingClientRect().height ?? 75) + 16];
    });
  }
}
