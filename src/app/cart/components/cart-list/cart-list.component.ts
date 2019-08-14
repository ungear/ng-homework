import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartItem, Cart } from 'src/types/cart';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy{
  cartItems: CartItem[] = [];
  totalPrice: number;
  totalAmount: number;
  destroy$ = new Subject<Boolean>();
  constructor(
    private cartService: CartService,
  ) {
    this.cartService.cart$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(this.onCartUpdated.bind(this))
  }

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

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  private onCartUpdated(c: Cart){
    this.cartItems = this.cartService.currentCart.items;
    this.totalPrice = this.cartService.currentCart.totalPrice;
    this.totalAmount = this.cartService.currentCart.totalAmount;
  }

}
