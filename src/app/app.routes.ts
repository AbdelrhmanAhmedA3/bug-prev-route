import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/index').then((m) => m.Home),
  },
  {
    path: 'group',
    loadComponent: () => import('./pages/index').then((m) => m.Group),
  },
];
