import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { UsersIndexComponent } from '../../../components/crud/users/users-index/users-index.component';

const routes: Routes = [
  { path: '', component: UsersIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
