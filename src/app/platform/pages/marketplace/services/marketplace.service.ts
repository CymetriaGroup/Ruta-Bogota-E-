import { Injectable } from '@angular/core';
import { SDK } from '../../../../sdk/sdk';
import { Order } from '../../transactions/interfaces/order.interface';
import { Marketplace } from '../interfaces/marketplace.interface';


@Injectable({
  providedIn: 'root'
})
export class MarketplaceService extends SDK {

  getMarketplace() {
    return this.get<Marketplace[]>(`${this.endpoints.marketplace}/`, {
      time: Date.now()
    });
  }

  createOrder(data: Order) {
    return this.post<Order>(`${this.endpoints.order}/`, data);
  }

}
