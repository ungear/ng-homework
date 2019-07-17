import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/types/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
}
