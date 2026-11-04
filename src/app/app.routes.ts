import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export interface RouteSeo {
  description: string;
  index?: boolean;
}

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Dylan Duley',
    data: {
      seo: {
        description:
          'Dylan Duley, full stack software engineer and artist. Skills, featured projects and experience.',
      } satisfies RouteSeo,
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Dylan Duley',
    data: {
      seo: {
        description:
          'About Dylan Duley: senior full stack engineer at LIDP, UF computer science student, and digital painter.',
      } satisfies RouteSeo,
    },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Portfolio | Dylan Duley',
    data: {
      seo: {
        description:
          'Projects Dylan Duley has built at work and for fun, plus paintings and sketches.',
      } satisfies RouteSeo,
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page not found | Dylan Duley',
    data: {
      seo: { description: 'This page could not be found.', index: false } satisfies RouteSeo,
    },
  },
];
