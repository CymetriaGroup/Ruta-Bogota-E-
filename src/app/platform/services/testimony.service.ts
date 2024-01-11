import { Injectable } from '@angular/core';
import { SDK } from '../../sdk/sdk';
import { TestimonyResponse } from '../pages/dashboard/interfaces/testimony.interface';

@Injectable({
  providedIn: 'root'
})

export class TestimonyService extends SDK {

  getTestimony() {
    return this.get<TestimonyResponse>(`${this.endpoints.testimony}/`, {
      time: Date.now()
    });
  }

}
