import { Component, OnInit } from '@angular/core';
import { User } from '@app/usuarios/interfaces/user';
import { UserService } from '@app/usuarios/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MessageService } from '@app/shared/services/message.service';
import { UsersSearchComponent } from '../users-search/users-search.component';

import {
  MoreActionsComponent,
  UnlockIconComponent,
  LockIconComponent,
  EyeIconComponent,
  DeleteIconComponent,
  EditIconComponent,
  ListIconComponent,
} from '@app/shared/components/layout/icons/index';

import { UserFiltroPipe } from '@app/pipes/user/user-filtro.pipe';

@Component({
  selector: 'users-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MoreActionsComponent,
    UsersSearchComponent,
    UserFiltroPipe,
    UnlockIconComponent,
    LockIconComponent,
    EyeIconComponent,
    DeleteIconComponent,
    EditIconComponent,
    ListIconComponent,
  ],
  templateUrl: './users-index.component.html',
  styleUrl: './users-index.component.css',
})
export class UsersIndexComponent implements OnInit {
  userSearch: User | any;
  users: User[] = [];
  userShow: User | any;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  alert() {
    this.messageService.confirm('Tem certeza ?');
  }

  getAllUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }

  async deletar(user: User) {
    console.log('sdasdasdasd');

    try {
      let confirmDelete = await this.messageService.confirm(
        'Deletar usuário ' + user.name + ' ?'
      );

      if (confirmDelete.isConfirmed) {
        this.userService.delete(user.id).subscribe((res) => {
          this.users = this.users?.filter((item) => item.id !== user.id);
          this.messageService.success('Registro deletado com sucesso');
        });

        return;
      }

      this.messageService.operacaoCancelada();
      return;
    } catch (error) {
      this.messageService.ocorreuUmerro();
    }
  }

  showUser(idUser: number) {
    this.userService.getUser(idUser).subscribe(
      (data: User) => {
        this.userShow = data;
      },
      (error) => {
        console.log(error);

        this.messageService.error('Usuário não encontrado');
      }
    );
  }

  async ativar(user: User) {
    let resultConfirm = await this.messageService.confirm(
      'Ativar o usuário ' + user.name + ' ?'
    );

    if (resultConfirm.isConfirmed) {
      this.userService.ativarUser(user.id).subscribe(
        (res) => {
          this.messageService.success('Usuário ativado com sucesso');
        },
        (error) => {
          this.messageService.error('Ocorreu um erro');
        }
      );
    }
  }

  search(searchData: User) {
    this.userSearch = searchData;
  }
}
