import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getToast() {
    return Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  }

  async confirm(text: string) {
    return await Swal.fire({
      title: "Atenção",
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    });
  }

  success(text: string) {
    this.getToast().fire({
      icon: 'success',
      title: text,
    });
  }

  error(text: string) {
    this.getToast().fire({
      icon: 'error',
      title: text,
    });
  }

  info(text: string) {
    this.getToast().fire({
      icon: 'info',
      title: text,
    });
  }

  operacaoCancelada() {
    this.info("Operação cancelada com sucesso");
  }

  ocorreuUmerro() {
    this.error("Ocorreu um erro");
  }

}
