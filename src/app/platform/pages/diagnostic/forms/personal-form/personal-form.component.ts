import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Field } from '../../interfaces/field.interface';
import { fields } from './fields';
import { Configuration } from '../../interfaces/configuration.interface';
import { mockData, initialData } from './fields-data';
import { terms } from './terms';
import { UiService } from 'src/app/platform/services/ui.service';
import { DiagnosticService } from '../../services/diagnostic.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent {

  title: string = 'Inscríbete al programa y construye tu Ruta Personalizada';
  subtitle: string = 'Queremos apoyarte en el desarrollo de habilidades empresariales, fortalecimiento de tu modelo de negocio y fomentar tus conexiones con el mercado e inversión.';
  fields: Field[] = [];
  showModal: boolean = false;
  message: string = '';
  header: string = '';
  personalForm: any;
  configuration: Configuration;
  terms: boolean = false;
  user: User;

  constructor(
    private uiService: UiService,
    private diagnosticService: DiagnosticService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.fields = fields;

    const now = Date.now();
    const day = new Date(now).getDate();
    const month = new Date(now).getMonth();
    const date = new Date(`1930-${month+1}-${day+1}`);

    if (this.user.birthday) {
      const birthDayDay = new Date(this.user.birthday).getDate();
      const birthDayMonth = new Date(this.user.birthday).getMonth();
      const birthDayYear = new Date(this.user.birthday).getFullYear();
      initialData.birthday = new Date(`${birthDayYear}-${birthDayMonth+1}-${birthDayDay+1}`);
      fields[2].readOnly = true;
    } else {
      initialData.birthday = date;
    }

    if (this.user.document_type) {
      initialData.document_type = this.user.document_type;
      fields[0].readOnly = true;
    }

    if (this.user.document) {
      initialData.document = this.user.document;
      fields[1].readOnly = true;
    }

    if (this.user.department) {
      initialData.department = this.user.department;
      fields[3].readOnly = true;
    }

    if (this.user.location) {
      initialData.location = this.user.location;
      fields[4].readOnly = true;
    }


    this.personalForm = initialData;
    this.configuration = {
      fields,
      model: this.personalForm,
      next: 'partner'
    }
  }

  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async validateForm(form: NgForm) {
    let errors = 0;
    this.fields.forEach(field => {
      const data = form.controls.fields.get(field.name);
      if (data?.status == 'INVALID') {
        field.invalid = true;
      } else {
        field.invalid = false;
      }

      if (field.name === 'document' && data?.value == 0) {
        field.invalid = true;
        errors++;
      }

    });

    if (form.invalid || errors) {
      this.message = 'Por favor llena todos los campos requeridos en el formulario para continuar.';
      this.showModal = true;
      this.header = 'Error en formulario';
      return;
    }

    this.uiService.setActive(this.configuration.next);
    this.diagnosticService.addToData('personal', form.value.fields, this.configuration.next);
    window.scroll(0,0);
  }

  closeModal(showModal: boolean) {
    this.showModal = showModal;
  }

  showTerms() {
    this.message = terms;
    this.showModal = true;
    this.header = '';
    this.showModal = true;
  }

}
