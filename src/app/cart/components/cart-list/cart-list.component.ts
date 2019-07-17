import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from 'src/types/product';
import { Cart, CartItem } from 'src/types/cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  cartItems: CartItem[] = [];
  totalPrice: number;
  totalAmount: number;
  constructor(private cartService: CartService) {
    cartService.cart$.subscribe(x => {this.onCartUpdated(x)})
  }

  onCartUpdated(cart: Cart){
    this.cartItems = cart.items;
    this.totalPrice = cart.totalPrice;
    this.totalAmount = cart.totalAmount;
  }

  onCartItemIncrementAmount(ci: CartItem){
    this.cartService.addProductToCart(ci.product)
  }

  onCartItemDecrementAmount(ci: CartItem){
    this.cartService.removeProductFromCart(ci.product)
  }

}
