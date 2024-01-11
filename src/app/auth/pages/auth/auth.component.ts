import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  showModal: boolean = false;
  message: string = '';
  loading: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login(fLogin: NgForm) {
    if(!fLogin.invalid) {
      try {
        this.loading = true;
        const { token, user } = await this.loginService.login(fLogin.value);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/platform/dashboard']);
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
