import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loading: boolean = false;
  @Output() onLogin: EventEmitter<NgForm> = new EventEmitter();

  login = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doLogin(fLogin: NgForm) {
    this.onLogin.emit(fLogin);
  }

}
