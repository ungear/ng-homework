import { Injectable } from '@angular/core';

import { Product, Category } from '../../../types/product';

const PRODUCTS = [
  {
    id: 1,
    name: 'SICP',
    description: 'a programming book',
    price: 10,
    category: Category.Book,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Cheese',
    description: 'soft French cheese',
    price: 1,
    category: Category.Food,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Apple',
    description: 'a wormy apple',
    price: 1,
    category: Category.Food,
    isAvailable: false,
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductById(pId: number): Product{
    return PRODUCTS.find(x => x.id === pId)
  }
}
