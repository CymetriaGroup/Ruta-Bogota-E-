import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Configuration } from '../../interfaces/configuration.interface';
import { Field } from '../../interfaces/field.interface';
import { fieldPartner1, fieldPartner2 } from './fields';
import { mockDataPartner1, mockDataPartner2, initialDataPartner1, initialDataPartner2 } from './fields-data';
import { UiService } from '../../services/ui.service';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerFormComponent implements OnInit {

  title: string = 'Datos de Socios';
  subtitle: string = 'Puedes registrar hastas dos socios (co-founders) adicionales a continuación:';
  partnerNumber: number = 0;
  showModal: boolean = false;
  message: string = '';
  header: string = '';

  values = [
    {
      name: 'Soy solo yo (contacto principal)',
      value: 0
    },
    {
      name: 'Quiero registrar un (1) socio adicional',
      value: 1
    },
    {
      name: 'Quiero registrar dos (2) socios adicionales',
      value: 2
    },
  ];

  configurationPartner1: Configuration;
  configurationPartner2: Configuration;
  fields: Field[] = [];

  get getPartners() {
    return new Array(this.partnerNumber);
  }

  constructor(
    private uiService: UiService,
    private restService: RestService
  ) {
    this.configurationPartner1 = {
      fields: fieldPartner1,
      model: initialDataPartner1,
      next: 'company',
      prev: 'personal'
    }
    this.configurationPartner2 = {
      fields: fieldPartner2,
      model: initialDataPartner2,
      next: 'company',
      prev: 'personal'
    }
  }

  ngOnInit(): void {
  }

  validateForm(form: NgForm) {
    if (this.partnerNumber == 0) {
      this.uiService.setActive(this.configurationPartner1.next);
      return;
    }

    if (this.partnerNumber == 1) {
      this.configurationPartner1.fields.forEach(field => {
        const data = form.controls.fields.get(field.name);
        if (data?.status == 'INVALID') {
          field.invalid = true;
        } else {
          field.invalid = false;
        }
      });
    }

    if (this.partnerNumber == 2) {
      this.configurationPartner1.fields.forEach(field => {
        const data = form.controls.fields.get(field.name);
        if (data?.status == 'INVALID') {
          field.invalid = true;
        } else {
          field.invalid = false;
        }
      });

      this.configurationPartner2.fields.forEach(field => {
        const data = form.controls.fields.get(field.name);
        if (data?.status == 'INVALID') {
          field.invalid = true;
        } else {
          field.invalid = false;
        }
      });
    }

    if (form.invalid) {
      this.message = 'Por favor llena todos los campos requeridos en el formulario para continuar.';
      this.showModal = true;
      this.header = 'Error en formulario';
      return;
    }

    this.uiService.setActive(this.configurationPartner1.next);
    this.restService.addToData('partners', form.value.fields, this.configurationPartner1.next);
    window.scroll(0,0);
  }

  setActive() {
    this.uiService.setActive(this.configurationPartner1.prev!);
  }

  closeModal(showModal: boolean) {
    this.showModal = showModal;
  }



}
