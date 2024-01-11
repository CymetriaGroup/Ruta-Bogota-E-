import { Component, OnInit } from '@angular/core';
import { Transaction } from '../interfaces/transaction.interface';
import { TransactionsService } from '../services/transactions.service';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = [];
  totalPoints: number = 0;
  totalPointsStar: number = 0;
  star: number = 1;
  showStar: number = 1;

  constructor(
    private transactionService: TransactionsService,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  async getTransactions() {
    await this.uiService.setLoading();
    this.transactions = await this.transactionService.getTransactions();
    this.transactions.forEach(transaction => {

      this.totalPoints += transaction.points;

      this.totalPointsStar += transaction.points > 0 ? transaction.points : 0;

      if (transaction.description.startsWith('Invalid') || (transaction.description.startsWith('RutaBogotae') && transaction.points < 0)) {
        this.totalPointsStar += transaction.points;
      }

      this.calculateStar(this.totalPointsStar);
    });
    await this.uiService.setLoading();
  }

  calculateStar(points: number) {
    if (points >= 0 && points < 400) {
      this.star = 1;
    } else if (points >= 400 && points < 600) {
      this.star = 2;
    } else if (points >= 600 && points < 800) {
      this.star = 3;
    } else if (points >= 800 && points < 999) {
      this.star = 4;
    }else {
      this.star = 5;
    }
  }

}
