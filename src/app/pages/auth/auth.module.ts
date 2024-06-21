import { NgModule } from '@angular/core';

import { LoginComponent, ResetPasswordComponent } from './index';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [AuthRoutingModule],
  exports: [],
  declarations: [LoginComponent, ResetPasswordComponent],
  providers: [],
})
export class NameModule { }
