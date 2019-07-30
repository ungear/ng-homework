import { Injectable } from '@angular/core';

import { Product, Category } from '../../../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Promise<Product[]> {
    const products:Product[] = [
      {
        name: 'SICP',
        description: 'a programming book',
        price: 10,
        category: Category.Book,
        isAvailable: true,
      },
      {
        name: 'Cheese',
        description: 'soft French cheese',
        price: 1,
        category: Category.Food,
        isAvailable: true,
      },
      {
        name: 'Apple',
        description: 'a wormy apple',
        price: 1,
        category: Category.Food,
        isAvailable: false,
      }
    ];
    
    return new Promise<Product[]>((resolve, reject) => {
      setTimeout(_ => resolve(products), 500)
    })
  }
}
