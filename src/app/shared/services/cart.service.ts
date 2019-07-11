// На мой взгляд немного не логично размещать сервисы в папке shared
// Обычно в такой папке размещаются повторно используемые компоненты, директивы, пайпы
// Даный сервис можно переместить сюда cart/services/
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

import { Product } from '../../../types/product';

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
  purchasedProducts$ = this.cartCommandsSubj
    .asObservable()
    .pipe(
      scan<CartCommand, Product[]>(
        (acc, cur) => {
          switch (cur.command) {
            case 'add':
              acc.push(cur.product);
              break;
            case 'delete':
              const ind = acc.indexOf(cur.product);
              if (ind >= 0) {
                acc.splice(ind, 1);
              }
              break;
            default:
              break;
          }
          return acc;
        },
        []
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
