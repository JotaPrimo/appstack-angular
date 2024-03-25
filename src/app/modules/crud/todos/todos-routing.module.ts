import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { TodosIndexComponent } from '../../../components/crud/todos/todos-index/todos-index.component';
import { TodosCreateComponent } from '../../../components/crud/todos/todos-create/todos-create.component';
import { TodosEditComponent } from '../../../components/crud/todos/todos-edit/todos-edit.component';

const routes: Routes = [
  { path: '', component: TodosIndexComponent },
  { path: 'create', component: TodosCreateComponent },
  { path: 'edit/:idTodo', component: TodosEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
