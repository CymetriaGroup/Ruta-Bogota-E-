import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Field } from '../../interfaces/field.interface';
import { fields } from './fields';
import { Configuration } from '../../interfaces/configuration.interface';
import { UiService } from '../../services/ui.service';
import { RestService } from '../../services/rest.service';
import { mockData, initialData } from './fields-data';
import { terms } from './terms';

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

  constructor(
    private uiService: UiService,
    private restService: RestService
  ) {
    this.fields = fields;

    const now = Date.now();
    const day = new Date(now).getDate();
    const month = new Date(now).getMonth();
    const date = new Date(`1930-${month+1}-${day+1}`);

    initialData.birthday = date;

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
    const passwordValues: string[] = [];
    this.fields.forEach(field => {
      console.log(field.name);
      const data = form.controls.fields.get(field.name);
      if (data?.status == 'INVALID') {
        field.invalid = true;
        errors++;
      } else {
        field.invalid = false;
      }

      if (field.name === 'email' && !this.validateEmail(data?.value)) {
        field.invalid = true;
        errors++;
      }

      if (field.name === 'password') {
        passwordValues.push(data?.value)
      }

      if (field.name === 'cpassword') {
        passwordValues.push(data?.value)
      }

    });

    if (passwordValues.length) {
      if (passwordValues[0] !== passwordValues[1]) {
        this.message = 'Las contraseñas no coinciden';
        this.showModal = true;
        this.header = 'Error en formulario';
        return;
      }
    }

    if (form.invalid || errors > 0) {
      this.message = 'Por favor llena todos los campos requeridos en el formulario para continuar.';
      this.showModal = true;
      this.header = 'Error en formulario';
      return;
    }

    const userResponse = await this.restService.getUserByDocument(this.personalForm.email!);

    if (userResponse.results.length) {
      this.message = 'El e-mail ya se encuentra registrado';
      this.showModal = true;
      this.header = 'Error en formulario';
      return;
    }

    this.uiService.setActive(this.configuration.next);
    this.restService.addToData('personal', form.value.fields, this.configuration.next);
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
