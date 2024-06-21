import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchIconComponent, RefreshIconComponent } from '@app/shared/components/layout/icons/index';

@Component({
  selector: 'users-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SearchIconComponent, RefreshIconComponent],
  templateUrl: './users-search.component.html',
  styleUrl: './users-search.component.css',
})
export class UsersSearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  userSearch = { name: '', cpf: '', email: ''};

  search() {
    console.log(this.userSearch);

    this.searchEvent.emit(this.userSearch);
  }

  clearUserSearch() {
    this.userSearch.name = '';
    this.userSearch.email = '';
    this.userSearch.cpf = '';
  }

}
