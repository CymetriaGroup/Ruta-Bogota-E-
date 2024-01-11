import { Injectable } from '@angular/core';
import { SDK } from '../../sdk/sdk';
import { Login } from '../interfaces/login.interface';
import { LoginResponse } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends SDK {

  login(data: Login) {
    return this.post<LoginResponse>(this.endpoints.user.login, data);
  }

  forgot(data: any) {
    return this.post<any>(this.endpoints.user.resetPassword, data);
  }

  reset(data: any) {
    return this.post<any>(this.endpoints.user.confirmPassword, data);
  }

  verifyToken(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false); // return false
    }
    return of(true);
  }

}
