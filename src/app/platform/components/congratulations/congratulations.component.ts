import { Component, Input, OnInit } from '@angular/core';
import { Marketplace } from '../../pages/marketplace/interfaces/marketplace.interface';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {

  @Input() marketplace: Marketplace[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
