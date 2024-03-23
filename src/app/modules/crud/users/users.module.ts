import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// users
import { UsersRoutingModule } from './users-routing.module';
import { UsersIndexComponent } from '../../../components/crud/users/users-index/users-index.component';
import { UsersEditComponent } from '../../../components/crud/users/users-edit/users-edit.component';
import { UsersCreateComponent } from '../../../components/crud/users/users-create/users-create.component';
import { UserService } from '../../../services/user.service';


@NgModule({
  declarations: [ 
   
  ],
  imports: [
    CommonModule,   
    UsersRoutingModule, 
    HttpClientModule,            
  ],
  providers: [ 
    UserService, HttpClient, HttpClientModule
   ]
})
export class UsersModule { }
