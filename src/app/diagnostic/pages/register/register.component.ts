import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RestService } from '../../services/rest.service';
import { Areas } from '../../interfaces/areas.interface';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  disabled: boolean = false;
  completed: boolean = false;

  constructor(
    private restService: RestService,
    private uiService: UiService,
    private messageService: MessageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.restService.finishFormListener.subscribe(finish => {
      if (finish) {
        this.saveData();
      }
    });
  }

  async saveData() {
    this.messageService.add({
      severity:'info',
      summary:'Enviando información',
      detail: 'Por favor espere...'
    });
    try {
      this.disabled = true;
      const data = await this.restService.getData;
      await this.restService.saveAnnouncement(data);
      this.messageService.add({
        severity:'success',
        summary:'Usuario registrado',
        detail: 'Información guardada exitosamente'
      });
      setTimeout(() => {
        this.completed = true;
      }, 1000);
    } catch ({ error }) {
      this.disabled = false;
      this.messageService.add({
        severity:'error',
        summary:'Error',
        detail:error
      });
    }
  }

  setActive(active: string) {
    if (Object.keys(this.restService.getData).includes(active)) {
      this.uiService.setActive(active);
    }
  }

}
