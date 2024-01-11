import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/platform/services/ui.service';
import { Configuration } from '../../interfaces/configuration.interface';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() configuration!: Configuration;
  @Input() disabled?: boolean = false;

  constructor(
    private uiService: UiService
  ) { }

  ngOnInit(): void {
  }

  setActive(active: string) {
    this.uiService.setActive(active);
  }

}
