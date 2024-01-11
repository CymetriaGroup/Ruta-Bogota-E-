import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgModelGroup } from '@angular/forms';
import { Configuration } from '../../interfaces/configuration.interface';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: NgModelGroup}] // here
})
export class FieldsComponent implements OnInit {

  @Input() configuration!: Configuration;

  constructor() { }

  ngOnInit(): void {
  }

}
