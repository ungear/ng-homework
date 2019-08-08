import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Cart, CartItem } from 'src/types/cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit{
  cartItems: CartItem[] = [];
  totalPrice: number;
  totalAmount: number;
  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {
    cartService.cart$.subscribe(x => {this.onCartUpdated(x); });
  }

  ngOnInit(){
    this.onCartUpdated(this.cartService.currentCart);
  }

  onCartUpdated(cart: Cart) {
    this.cartItems = cart.items;
    this.totalPrice = cart.totalPrice;
    this.totalAmount = cart.totalAmount;
    this.cdr.detectChanges();
  }

  onCartItemIncrementAmount(ci: CartItem) {
    this.cartService.addProductToCart(ci.product);
  }

  onCartItemDecrementAmount(ci: CartItem) {
    this.cartService.removeProductFromCart(ci.product);
  }

}
