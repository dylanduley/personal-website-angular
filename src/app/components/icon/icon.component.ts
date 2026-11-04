import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICONS, IconName } from './icons';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  template: `
    <svg [attr.viewBox]="icon().viewBox" focusable="false"><path [attr.d]="icon().path" /></svg>
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
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  protected readonly icon = computed(() => ICONS[this.name()]);
}
