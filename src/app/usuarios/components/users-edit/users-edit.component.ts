import { Component, OnInit } from '@angular/core';
import { User } from '@app/usuarios/interfaces/user';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '@app/usuarios/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '@app/shared/services/message.service';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-users-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './users-edit.component.html',
  styleUrl: './users-edit.component.css'
})
export class UsersEditComponent implements OnInit {
  id: number | any;
  user!: User;
  userEditForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.userEditForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
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

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idUser'];

    this.userService.getUser(this.id).subscribe((data: User) => {
      this.user = data;
      console.log("aqui");
      console.log(data);

    });
  }

  update() {
    this.userService
      .update(this.id, this.userEditForm.value)
      .subscribe((res) => {
        this.messageService.success('Dados atualizados com sucesso');
        this.router.navigateByUrl('/users');
      });
  }
}
