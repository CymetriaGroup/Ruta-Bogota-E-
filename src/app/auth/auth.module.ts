import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ForgotComponent } from './pages/forgot/forgot.component';

import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ResetComponent } from './pages/reset/reset.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    DialogModule,
    ToastModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
