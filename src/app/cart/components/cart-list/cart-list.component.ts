import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AsyncCartService } from 'src/app/shared/services/cart.service';
import { Cart, CartItem } from 'src/types/cart';

interface SortingOption{
  field: string, 
  title: string
}

const SortingOptions: SortingOption[] = [
  { field: "amount", title: "amount"},
  { field: "product.name", title: "name"},
  { field: "product.price", title: "price"}
];

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent {
  cartItems: CartItem[] = [];
  totalPrice: number;
  totalAmount: number;
  sortingOptions = SortingOptions;
  activeSortingOption = SortingOptions[0];
  constructor(
    private cartService: AsyncCartService,
    private cdr: ChangeDetectorRef
  ) {
    cartService.cart$.subscribe(x => {this.onCartUpdated(x); });
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
