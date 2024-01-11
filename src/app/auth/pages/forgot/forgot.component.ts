import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
  providers: [MessageService]
})
export class ForgotComponent implements OnInit {

  loading: boolean = false;
  showModal: boolean = false;
  message: string = '';

  forgot = {
    email: ''
  }

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async forgotPassword(fForgot: NgForm) {
    if(!fForgot.invalid) {
      try {
        this.loading = true;
        await this.loginService.forgot(fForgot.value);

        this.messageService.add({
          severity:'success',
          summary:'Correo enviado!',
          detail: 'Hemos enviado un correo electrónico con la información para actualizar tu contraseña'
        });

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 4000);
      } catch (error) {
        let html = ''
        Object.values(error.error).forEach(error => html += error);
        this.message = html;
        this.showModal = true;
        this.loading = false;
      }
    }
  }

  closeModal() {
    this.showModal = false;
  }

}
