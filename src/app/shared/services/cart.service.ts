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
export class AsyncCartService {

  constructor() { }

  private cartCommandsSubj = new Subject<CartCommand>();
  cart$ = this.cartCommandsSubj
    .asObservable()
    .pipe(
      scan<CartCommand, Cart>(
        (acc, cur) => {
          switch (cur.command) {
            case 'add':
              addProductToCart(acc, cur.product);
              break;
            case 'delete':
              removeProductFromCart(acc, cur.product);
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

function addProductToCart(cart: Cart, pr: Product) {
  const itemInCart = cart.items.find(x => x.product.name === pr.name);
  if (itemInCart) {
    itemInCart.amount++;
    const itemIndex = cart.items.indexOf(itemInCart);
    // copy an item to have a new object link and ensure OnPush strategy update
    cart.items[itemIndex] = {...itemInCart};
  } else {
    cart.items.push({product: pr, amount: 1});
  }

  cart.totalAmount++;
  cart.totalPrice += pr.price;
}

function removeProductFromCart(cart: Cart, pr: Product) {
  const itemInCart = cart.items.find(x => x.product.name === pr.name);
  if (itemInCart) {
    itemInCart.amount--;
    cart.totalAmount--;
    cart.totalPrice -= pr.price;
    const itemIndex = cart.items.indexOf(itemInCart);
    if (itemInCart.amount === 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      // copy an item to have a new object link and ensure OnPush strategy update
      cart.items[itemIndex] = {...itemInCart};
    }
  }
}
