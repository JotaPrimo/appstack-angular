import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// users
import { UsersRoutingModule } from './users-routing.module';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { UserService } from './services/user.service';


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
