import {Component, HostListener} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const hero = document.querySelector('.hero') as HTMLElement;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    hero.style.setProperty('--x', `${x}px`);
    hero.style.setProperty('--y', `${y}px`);
  }
}
