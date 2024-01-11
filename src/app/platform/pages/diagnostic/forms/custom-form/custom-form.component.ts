import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Areas } from '../../interfaces/areas.interface';
import { Field } from '../../interfaces/field.interface';
import { Configuration } from '../../interfaces/configuration.interface';
import { DiagnosticService } from '../../services/diagnostic.service';
import { UiService } from 'src/app/platform/services/ui.service';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  @Input() areas: Areas[] = [];
  @Input() disabled?: boolean;
  @Input() title!: string;
  customTitle: string = '';
  subtitle: string = 'A continuación te pediremos respondas las siguientes preguntas:';
  fields: Field[] = [];
  personalForm = {};
  showModal: boolean = false;
  message: string = '';
  header: string = '';
  configuration!: Configuration;
  area: Areas | undefined;

  constructor(
    private diagnosticService: DiagnosticService,
    private uiService: UiService
  ) {
  }

  ngOnInit(): void {
    if (this.areas.length) {
      this.loadFields();
      this.customTitle = `Diagnóstico por Área Funcional<br />${this.title}`;
    }
  }

  loadFields() {
    this.area = this.areas.find(area => area.area.name === this.title);
    this.fields = this.area!.questions.map(({ data, answers }) => {
      return {
        label: data.name,
        type: 'input-select',
        name: data.id.toString(),
        values: answers.map(answer => {
          return {
            value: answer.id,
            name: answer.name
          }
        }),
        isRequired: true
      }
    });
    this.configuration = {
      fields: this.fields,
      model: this.personalForm,
      prev: this.area!.area.prev,
      next: this.area!.area.next
    }
  }

  validateForm(form: NgForm) {
    if (form.invalid) {

      this.fields.forEach(field => {
        const data = form.controls.fields.get(field.name);
        if (data?.status == 'INVALID') {
          field.invalid = true;
        } else {
          field.invalid = false;
        }
      });

      this.message = 'Por favor llena todos los campos requeridos en el formulario para continuar.';
      this.showModal = true;
      this.header = 'Error en formulario';
      return;
    }
    this.diagnosticService.addToData(this.area!.area.slug, form.value.fields, this.configuration.next);
    if (this.configuration.next) {
      this.uiService.setActive(this.configuration.next);
    }
    window.scroll(0,0);
  }

  closeModal(showModal: boolean) {
    this.showModal = showModal;
  }

}
