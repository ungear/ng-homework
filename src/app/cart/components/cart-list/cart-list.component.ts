import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from 'src/types/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  purchasedProducts: Product[] = [];

  constructor(private cartService: CartService) {
    cartService.purchasedProducts$.subscribe(x => this.purchasedProducts = x)
  }

  ngOnInit() {
  }

}
