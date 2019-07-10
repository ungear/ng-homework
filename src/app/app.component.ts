import { Component } from '@angular/core';
import { Product } from '../types/product';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  purchasedProducts: Product[] = [];
  constructor(private cartService: CartService) {
    this.cartService.purchasedProducts$.subscribe(p => this.purchasedProducts = p);
  }
}
