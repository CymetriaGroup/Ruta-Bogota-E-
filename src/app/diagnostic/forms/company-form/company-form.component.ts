import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Field } from '../../interfaces/field.interface';
import { fields } from './fields';
import { Configuration } from '../../interfaces/configuration.interface';
import { UiService } from '../../services/ui.service';
import { RestService } from '../../services/rest.service';
import { mockData, initialData } from './fields-data';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent {

  title: string = 'Datos del Emprendimiento, Empresa o Negocio';
  subtitle: string = 'A continuación te pediremos registres algunos datos de tu emprendimiento, empresa o negocio.';
  fields: Field[] = [];
  companyForm = initialData;
  showModal: boolean = false;
  message: string = '';
  header: string = '';
  configuration: Configuration;

  constructor(
    private uiService: UiService,
    private restService: RestService
  ) {
    this.fields = fields;
    this.configuration = {
      fields,
      model: this.companyForm,
      next: 'strategy',
      prev: 'partner'
    }
  }

  validateForm(form: NgForm) {

    this.fields.forEach(field => {
      const data = form.controls.fields.get(field.name);
      if (data?.status == 'INVALID') {
        field.invalid = true;
      } else {
        field.invalid = false;
      }
    });

    if (form.invalid) {
      this.message = 'Por favor llena todos los campos requeridos en el formulario para continuar.';
      this.showModal = true;
      this.header = 'Error en formulario';
      return;
    }
    this.uiService.setActive(this.configuration.next);
    this.restService.addToData('company', form.value.fields, this.configuration.next);
    window.scroll(0,0);
  }

  closeModal(showModal: boolean) {
    this.showModal = showModal;
  }

}
