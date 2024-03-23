import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// components
import { NavSidebarComponent } from './components/layout/nav-sidebar/nav-sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavSuperiorComponent } from './components/layout/nav-superior/nav-superior.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavSidebarComponent, NavSuperiorComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appstack-angular';
}
