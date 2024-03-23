import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersIconComponent } from '../shared/icons/users-icon/users-icon.component';

@Component({
  selector: 'nav-sidebar',
  standalone: true,
  imports: [RouterModule, UsersIconComponent],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css'
})
export class NavSidebarComponent {

}
