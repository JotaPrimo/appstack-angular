import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// component
import { HomeComponent } from '../../../pages/adm/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
