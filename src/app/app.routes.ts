import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./modules/pages/home/home-routing.module').then(m => m.HomeRoutingModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./modules/crud/users/users-routing.module').then(m => m.UsersRoutingModule)
    },
];
