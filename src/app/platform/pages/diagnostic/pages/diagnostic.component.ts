import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UiService } from 'src/app/platform/services/ui.service';
import { Areas } from '../interfaces/areas.interface';
import { DiagnosticService } from '../services/diagnostic.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css'],
  providers: [MessageService]
})
export class DiagnosticComponent implements OnInit {

  active: string = 'personal';
  areas: Areas[] = [];
  disabled: boolean = false;

  menu = [
    {
      id: 1,
      form: 'personal',
      name: 'Datos personales'
    },
    {
      id: 2,
      form: 'partner',
      name: 'Datos de socios'
    },
    {
      id: 3,
      form: 'company',
      name: 'Datos de emprendimiento'
    }
  ];
  user: User;

  constructor(
    private diagnosticService: DiagnosticService,
    private uiService: UiService,
    private messageService: MessageService,
    private router: Router,
    private userService: UserService
  ) {
    this.active = uiService.getActive;
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {

    if (this.userService.isRegisteredUser(this.user)) {
      this.router.navigateByUrl(`/platform/results`);
      return;
    }

    this.diagnosticService.requestAreas().then(areas => {
      this.areas = areas;

      let index = 4;
      this.areas.forEach(area => {
        this.menu.push({
          id: index,
          form: area.area.slug,
          name: area.area.name
        });
        index++;
      });

    });
    this.uiService.activeListener.subscribe(active => {
      this.active = active;
    });
    this.diagnosticService.finishDiagnosticListener.subscribe(finish => {
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
      const data = await this.diagnosticService.getData;
      await this.diagnosticService.saveAnnouncement(data, this.user.id);
      await this.userService.getPoints(this.user.id);
      this.messageService.add({
        severity:'success',
        summary:'Usuario registrado',
        detail: 'Información guardada exitosamente. Cargando tus resultados...'
      });
      setTimeout(() => {
        this.router.navigateByUrl(`/platform/results`);
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
    if (Object.keys(this.diagnosticService.getData).includes(active)) {
      this.uiService.setActive(active);
    }
  }

}
