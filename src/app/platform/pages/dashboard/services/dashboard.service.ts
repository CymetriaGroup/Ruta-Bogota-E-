import { Injectable } from '@angular/core';
import { SDK } from '../../../../sdk/sdk';
import { Top } from '../interfaces/top.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends SDK {

  getTop() {
    return this.get<Top[]>(`${this.endpoints.top}/`, {
      time: Date.now()
    });
  }

}
