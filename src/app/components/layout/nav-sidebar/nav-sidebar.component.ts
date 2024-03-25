import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersIconComponent } from '../shared/icons/users-icon/users-icon.component';
import { ListIconComponent } from '../shared/icons/list-icon/list-icon.component';

@Component({
  selector: 'nav-sidebar',
  standalone: true,
  imports: [RouterModule, UsersIconComponent, ListIconComponent],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css'
})
export class NavSidebarComponent {

}
