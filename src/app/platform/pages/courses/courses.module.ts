import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';
import { LevelsComponent } from './components/levels/levels.component';
import { ForumComponent } from './components/forum/forum.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    DashboardComponent,
    DetailComponent,
    ListComponent,
    LevelsComponent,
    ForumComponent
  ],
  imports: [
    FormsModule,
    CoursesRoutingModule,
    CommonModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    TableModule,
    SharedModule,
    CarouselModule,
    InputTextModule,
    InputTextareaModule,
  ]
})
export class CoursesModule { }
