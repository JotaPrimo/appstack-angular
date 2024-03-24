import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../interfaces/user';

@Pipe({
  name: 'userFiltro',
  standalone: true,
})
export class UserFiltroPipe implements PipeTransform {
  transform(users: User[], search: User): User[] {
    console.log(users);

    if (!users || !search) {
      return users;
    }

    return users.filter(
      (user: User) =>
        (!search.name || user.name.toLocaleLowerCase().includes(search.name.toLocaleLowerCase())) &&
        (!search.cpf || user.name.includes(search.cpf)) &&
        (!search.email || user.email.toLocaleLowerCase().includes(search.email.toLocaleLowerCase()))
    );
  }
  
}
