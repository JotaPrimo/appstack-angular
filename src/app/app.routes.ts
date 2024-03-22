import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
    },
    {
        path: 'faq',
        loadChildren: () => import('./modules/faq/faq-routing.module').then(m => m.FaqRoutingModule)
    },
];
