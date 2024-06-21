import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { UsersIconComponent, ListIconComponent } from '@app/shared/components/layout/icons/index';

@Component({
  selector: 'nav-sidebar',
  standalone: true,
  imports: [RouterModule, UsersIconComponent, ListIconComponent],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css'
})
export class NavSidebarComponent {

}
