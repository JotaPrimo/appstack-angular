import { Component, OnInit } from '@angular/core';
import { User } from '../../../../interfaces/user';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MessageService } from '../../../../services/message.service';
import { MoreActionsComponent } from '../../../layout/shared/icons/more-actions/more-actions.component';



@Component({
  selector: 'users-index',
  standalone: true,
  imports: [CommonModule, RouterLink, MoreActionsComponent],
  templateUrl: './users-index.component.html',
  styleUrl: './users-index.component.css',
})
export class UsersIndexComponent implements OnInit {

  users: User[] | undefined;
  userShow: User | any;

  constructor(   
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  alert() {
    this.messageService.confirm("Tem certeza ?");
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
      let confirmDelete = await this.messageService.confirm("Deletar usuário " +user.name+ " ?");

      if (confirmDelete.isConfirmed) {
        this.userService
          .delete(user.id)
          .subscribe((res) => {
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
    try {
      this.userService.getUser(idUser).subscribe((data: User) => {
        this.userShow = data;
        console.log("aqui");
        console.log(this.userShow);       
        
      });
    } catch (error) {
      this.messageService.error("Usuário não encontrado");
    }
  }

}
