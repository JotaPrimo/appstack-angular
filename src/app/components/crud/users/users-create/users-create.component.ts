import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { MessageService } from '../../../../services/message.service';
import { CommonModule } from '@angular/common';
import { CardBodyComponent } from '../../../layout/shared/card/card-body/card-body.component';
import { CardHeaderComponent } from '../../../layout/shared/card/card-header/card-header.component';
import { CardFooterComponent } from '../../../layout/shared/card/card-footer/card-footer.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [ 
    ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe,
    CardBodyComponent, CardHeaderComponent, CardFooterComponent
  ],
  templateUrl: './users-create.component.html',
  styleUrl: './users-create.component.css',
})
export class UsersCreateComponent {
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.email,
      ]),
    });
  }

  store() {
    try {
      this.userService
      .store(this.userForm.value)
      .subscribe((res) => {
        this.messageService.success("Usuário cadastrado com sucesso");
        this.router.navigateByUrl('users');
      });
    } catch (error) {
      this.messageService.error("Ocorreu um erro ");
    }
  }


}
