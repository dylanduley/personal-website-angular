import { DOCUMENT } from '@angular/common';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import type { RouteSeo } from '../app.routes';

export const SITE_URL = 'https://www.dylanduley.com';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  init(): void {
    const sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.update(e.urlAfterRedirects));
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  private update(url: string): void {
    let route: ActivatedRouteSnapshot = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;

    const seo = route.data['seo'] as RouteSeo | undefined;
    const title = route.title ?? 'Dylan Duley';
    const path = url.split(/[?#]/)[0];
    const pageUrl = SITE_URL + (path === '/' ? '/' : path);

    this.meta.updateTag({ name: 'description', content: seo?.description ?? '' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: seo?.description ?? '' });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({
      name: 'robots',
      content: seo?.index === false ? 'noindex' : 'index, follow',
    });

    let canonical = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.doc.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }
}
