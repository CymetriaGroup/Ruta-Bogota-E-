import { Component, OnInit } from '@angular/core';
import { Marketplace } from './interfaces/marketplace.interface';
import { MarketplaceService } from './services/marketplace.service';
import { UiService } from '../../services/ui.service';
import { User } from '../../../diagnostic/interfaces/user.interface';
import { Order } from '../transactions/interfaces/order.interface';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { ImagePipe } from 'src/app/shared/pipes/image.pipe';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ MessageService ]
})
export class MarketplaceComponent implements OnInit {

  marketplace: Marketplace[] = [];
  order!: Order;
  user: User;
  showRedeemModal:boolean = false;
  productSelected = {
    id: 0,
    name: '',
    points: 0
  }

  constructor(
    private marketplaceService: MarketplaceService,
    private userService: UserService,
    private uiService: UiService,
    private messageService: MessageService,
    private imagePipe: ImagePipe
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
    this.getMarketplace();
  }

  async getMarketplace() {
    this.uiService.setLoading();
    this.marketplace = await this.marketplaceService.getMarketplace();
    this.uiService.setLoading();
  }

  async createOrder(product: number) {
    await this.uiService.setLoading();
    try {
      this.order = {
        product
      };
      await this.marketplaceService.createOrder(this.order);
      await this.userService.getPoints(this.user.id);
      await this.getMarketplace();
      this.messageService.add({severity:'success', summary: 'Producto redimido exitosamente', detail: 'Recibirás un correo con las instrucciones'});
    } catch (error) {
      this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
    } finally {
      this.uiService.setLoading();
      this.showRedeemModal = false;
    }
  }

  redeemProduct(product: Marketplace) {
    this.productSelected = {
      id: product.id,
      name: product.name,
      points: product.points
    }
    this.showRedeemModal = true;
  }

  getBackground(image: string, stock: number) {
    const imageBg = this.imagePipe.transform(image);
    if (stock > 0) {
      return `background-image: url(${imageBg})`;
    } else {
      return `background-image:
      linear-gradient(black, black),
      url(${imageBg});
      background-size: cover;
      background-blend-mode: saturation;`;
    }
  }

}
