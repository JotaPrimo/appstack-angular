import { MessageService } from '../../../shared/services/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.css'
})
export class PrivateLayoutComponent {
  
  constructor(
    private messageService: MessageService
  ) {}


}
