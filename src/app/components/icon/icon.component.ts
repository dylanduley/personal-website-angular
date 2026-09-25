import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICONS } from './icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  template: `
    @if (icon(); as i) {
      <svg [attr.viewBox]="i.viewBox" focusable="false"><path [attr.d]="i.path" /></svg>
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }

    svg {
      width: 1em;
      height: 1em;
      fill: currentColor;
    }
  `
})
export class IconComponent {
  readonly name = input.required<string>();
  protected readonly icon = computed(() => ICONS[this.name()]);
}
