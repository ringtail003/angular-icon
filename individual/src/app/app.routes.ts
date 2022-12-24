import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'page1',
    loadComponent: () => import('./page1.component'),
  },
  {
    path: 'page2',
    loadComponent: () => import('./page2.component'),
  },
];
