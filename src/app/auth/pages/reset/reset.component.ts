import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
  providers: [MessageService]
})
export class ResetComponent implements OnInit {

  loading: boolean = false;
  showModal: boolean = false;
  message: string = '';

  reset = {
    new_password1: '',
    new_password2: '',
    uid: '',
    token: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.reset.uid = params.uid;
      this.reset.token = params.token;
    })
  }

  async resetPassword(fReset: NgForm) {
    if(!fReset.invalid) {
      try {
        this.loading = true;
        await this.loginService.reset(fReset.value);
        this.messageService.add({
          severity:'success',
          summary:'Contraseña actualizada!',
          detail: 'Tu contraseña ha sido actualizada exitosamente. Inicia sesión nuevamente.'
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2500);
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
