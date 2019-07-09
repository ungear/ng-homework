import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs"
import { Product } from "../../types/product"
import { scan, map } from "rxjs/operators";

type CartCommand = {
  product: Product,
  command: "add" | "delete"
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartCommandsSubj = new Subject<CartCommand>()
  purchasedProducts$ = this.cartCommandsSubj
    .asObservable()
    .pipe(
      scan<CartCommand, Product[]>(
        (acc, cur) => {
          switch (cur.command) {
            case "add":
              acc.push(cur.product)
              break;
            case "delete":
              let ind = acc.indexOf(cur.product)
              acc.splice(ind, 1)
              break;
            default:
              break;
          }
          return acc;
        },
        []
      )
    )

  addProductToCart(product: Product) {
    this.cartCommandsSubj.next({
      product,
      command: "add"
    })
  }
  removeProductFromCart(product: Product) {
    this.cartCommandsSubj.next({
      product,
      command: "delete"
    })
  }
}