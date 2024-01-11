import { Injectable } from '@angular/core';
import { SDK } from '../../../../sdk/sdk';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService extends SDK {

  getTransactions() {
    return this.get<Transaction[]>(`${this.endpoints.transaction}/`, {
      time: Date.now()
    });
  }

}
