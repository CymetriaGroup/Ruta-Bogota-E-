import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Configuration } from '../../interfaces/configuration.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() configuration!: Configuration;
  @Input() disabled?: boolean = false;
  @Output() onSubmit: EventEmitter<NgForm> = new EventEmitter();
  value: Date = new Date();

  constructor() {

  }

  ngOnInit(): void {

  }

  validateForm(form: NgForm) {
    this.onSubmit.emit(form);
  }

}
