import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../../types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: Product;
  @Output() addToCart = new EventEmitter<Product>();

  onAddClick() {
    this.addToCart.emit(this.data);
  }

  onRemoveClick() {
    //this.cartService.removeProductFromCart(this.data);
  }
}
