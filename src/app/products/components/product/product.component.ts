import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../../../types/product';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: Product;

  // Этот компонет получил данные от родителя,
  // Не стоит их тут обрабатывать сервисом
  // Я бы сгенерил output тем самым убрал бы зависимость
  // а в родительском компоненте уже что-то делал с данными
  constructor(private cartService: CartService) {}

  onAddClick() {
    console.log(`${this.data.name} added to cart`);
    this.cartService.addProductToCart(this.data);
  }

  onRemoveClick() {
    this.cartService.removeProductFromCart(this.data);
  }
}
