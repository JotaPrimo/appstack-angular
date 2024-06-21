import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./usuarios/users-routing.module').then(
        (m) => m.UsersRoutingModule
      ),
  },
];
