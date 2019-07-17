import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

import { Product } from '../../../types/product';
import { Cart } from 'src/types/cart';

interface CartCommand {
  product: Product;
  command: 'add' | 'delete';
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartCommandsSubj = new Subject<CartCommand>();
  cart$ = this.cartCommandsSubj
    .asObservable()
    .pipe(
      scan<CartCommand, Cart>(
        (acc, cur) => {
          switch (cur.command) {
            case 'add':
              addProductToCart(acc, cur.product)
              break;
            case 'delete':
              removeProductFromCart(acc, cur.product)
              break;
            default:
              break;
          }
          return acc;
        },
        {
          items: [],
          totalPrice: 0,
          totalAmount: 0
        }
      )
    );

  addProductToCart(product: Product) {
    this.cartCommandsSubj.next({
      product,
      command: 'add'
    });
  }
  removeProductFromCart(product: Product) {
    this.cartCommandsSubj.next({
      product,
      command: 'delete'
    });
  }
}

function addProductToCart(cart: Cart, pr: Product){
  let productInCart = cart.items.find(x => x.product.name === pr.name);
  if(productInCart)
    productInCart.amount++;
  else
    cart.items.push({product: pr, amount: 1})

  cart.totalAmount++;
  cart.totalPrice += pr.price
}

function removeProductFromCart(cart: Cart, pr: Product){
  let productInCart = cart.items.find(x => x.product.name === pr.name);
  if(productInCart){
    productInCart.amount--;
    cart.totalAmount--;
    cart.totalPrice -= pr.price
    if(productInCart.amount === 0){
      let itemIndex = cart.items.indexOf(productInCart);
      cart.items.splice(itemIndex,1)
    }
  }
}
