import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { UsersIndexComponent } from '../../../components/crud/users/users-index/users-index.component';
import { UsersCreateComponent } from '../../../components/crud/users/users-create/users-create.component';
import { UsersEditComponent } from '../../../components/crud/users/users-edit/users-edit.component';

const routes: Routes = [
  { path: '', component: UsersIndexComponent },
  { path: 'create', component: UsersCreateComponent },
  { path: 'edit/:idUser', component: UsersEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
