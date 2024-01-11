import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    SharedModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
