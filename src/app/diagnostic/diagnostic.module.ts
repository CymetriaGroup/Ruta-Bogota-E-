import { NgModule } from '@angular/core';

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

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './pages/register/register.component';
import { PersonalFormComponent } from './forms/personal-form/personal-form.component';
import { CompanyFormComponent } from './forms/company-form/company-form.component';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';
import { ResultsComponent } from './pages/results/results.component';
import { CustomFormComponent } from './forms/custom-form/custom-form.component';
import { PartnerFormComponent } from './forms/partner-form/partner-form.component';
import { FieldsComponent } from './components/fields/fields.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DiagnosticRoutingModule } from './diagnostic-routing.module';


@NgModule({
  declarations: [
    RegisterComponent,
    PersonalFormComponent,
    CompanyFormComponent,
    FormComponent,
    ModalComponent,
    ResultsComponent,
    CustomFormComponent,
    PartnerFormComponent,
    FieldsComponent,
    HeaderComponent,
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DiagnosticRoutingModule,

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
    PasswordModule

  ]
})
export class DiagnosticModule { }
