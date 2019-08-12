import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartItem } from 'src/types/cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit{
  cartItems: CartItem[] = [];
  totalPrice: number;
  totalAmount: number;
  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(){
    this.cartItems = this.cartService.currentCart.items;
    this.totalPrice = this.cartService.currentCart.totalPrice;
    this.totalAmount = this.cartService.currentCart.totalAmount;
  }

  onCartItemIncrementAmount(ci: CartItem) {
    this.cartService.addProductToCart(ci.product);
  }

  onCartItemDecrementAmount(ci: CartItem) {
    this.cartService.removeProductFromCart(ci.product);
  }

}
