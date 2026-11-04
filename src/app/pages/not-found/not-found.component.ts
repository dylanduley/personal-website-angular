import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-not-found',
  imports: [PageBannerComponent, RouterLink, IconComponent],
  template: `
    <app-page-banner
      label="404"
      title="Page not found"
      subtitle="This page doesn't exist or may have moved."
    />
    <section class="section">
      <div class="container cta">
        <a class="comic-btn" routerLink="/">
          <span>Back to the home page <app-icon name="arrow-right" /></span>
        </a>
      </div>
    </section>
  `,
  styles: `
    .cta {
      display: flex;
      justify-content: center;
    }
  `,
})
export class NotFoundComponent {}
