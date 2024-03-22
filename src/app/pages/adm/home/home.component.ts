import { MessageService } from './../../../services/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private messageService: MessageService
  ) {}

  async alert() {
    let resultConfirm = await this.messageService.confirm(
      "Atenção",
      "What is Lorem Ipsum?"
    );

    if (resultConfirm.isConfirmed) {
      this.messageService.success('Registro deletado com sucesso');
    } else {
      this.messageService.info('Duis aute irure dolor in reprehenderit');
    }
  }
}
