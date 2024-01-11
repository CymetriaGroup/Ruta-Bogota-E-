import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './components/results.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    ChartModule
  ]
})
export class ResultsModule { }
