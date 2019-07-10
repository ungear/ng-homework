import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../types/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: Product;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onAddClick() {
    console.log(`${this.data.name} added to cart`);
    this.cartService.addProductToCart(this.data);
  }

  onRemoveClick() {
    this.cartService.removeProductFromCart(this.data);
  }
}
