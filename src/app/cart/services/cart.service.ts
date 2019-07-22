import { Injectable } from '@angular/core';
import { Cart } from 'src/types/cart';
import { Product } from 'src/types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData: Cart;
  constructor() {
    this.setDefaultValue();
  }

  addProduct(product: Product, amount: number){
    const itemInCart = this.cartData.items.find(x => x.product.name === product.name);
    if (itemInCart) {
      itemInCart.amount += amount;
    } else {
      this.cartData.items.push({product, amount: amount});
    }
  
    this.cartData.totalAmount += amount;
    this.cartData.totalPrice += product.price * amount;
  }

  removeProduct(product: Product, amount?: number){
    const itemInCart = this.cartData.items.find(x => x.product.name === product.name);
    if(!itemInCart) return;

    let numberToRemove = amount === null ? itemInCart.amount : amount;
    itemInCart.amount -= numberToRemove;
    this.cartData.totalAmount -= numberToRemove;
    this.cartData.totalPrice -= product.price * numberToRemove;
    const itemIndex = this.cartData.items.indexOf(itemInCart);
    if (itemInCart.amount === 0) {
      this.cartData.items.splice(itemIndex, 1);
    }
  }

  cleanCart(){
    this.setDefaultValue();
  }

  private setDefaultValue(){
    this.cartData = {
      items: [],
      totalPrice: 0,
      totalAmount: 0,
    }
  }
}
