import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Dylan Duley' },
  { path: 'about', component: AboutComponent, title: 'About | Dylan Duley' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio | Dylan Duley' },
  { path: '**', redirectTo: '' }
];
