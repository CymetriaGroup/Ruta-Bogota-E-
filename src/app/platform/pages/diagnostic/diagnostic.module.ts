import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { TimelineModule } from 'primeng/timeline';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';

import { DiagnosticRoutingModule } from './diagnostic-routing.module';
import { DiagnosticComponent } from './pages/diagnostic.component';

import { PersonalFormComponent } from './forms/personal-form/personal-form.component';
import { CompanyFormComponent } from './forms/company-form/company-form.component';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';
import { CustomFormComponent } from './forms/custom-form/custom-form.component';
import { PartnerFormComponent } from './forms/partner-form/partner-form.component';
import { FieldsComponent } from './components/fields/fields.component';
import { HeadComponent } from './components/head/head.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DiagnosticComponent,
    PersonalFormComponent,
    CompanyFormComponent,
    FormComponent,
    ModalComponent,
    CustomFormComponent,
    PartnerFormComponent,
    FieldsComponent,
    HeadComponent,
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    DiagnosticRoutingModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    DialogModule,
    ButtonModule,
    InputTextareaModule,
    ChartModule,
    ToastModule,
    SkeletonModule,
    TimelineModule,
    InputSwitchModule,
    MultiSelectModule,
    PasswordModule,
    SharedModule
  ]
})
export class DiagnosticModule { }
