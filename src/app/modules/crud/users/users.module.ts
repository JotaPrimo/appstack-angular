import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// users
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from '../../../services/user.service';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';


@NgModule({
  declarations: [ 
   
  ],
  imports: [
    CommonModule,   
    UsersRoutingModule, 
    HttpClientModule, 
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [ 
    UserService, HttpClient, HttpClientModule
   ]
})
export class UsersModule { }
