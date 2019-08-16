import { Injectable } from '@angular/core';

import { Product, Category, ProductComment } from '../../../types/product';

const PRODUCTS: Product[] = [
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

const COMMENTS: ProductComment[] = [
  { productId: 1, text: "Exciting!" },
  { productId: 2, text: "Delicious!" },
  { productId: 2, text: "Awesome cheesee" },
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

  getProductComments(pId: number): ProductComment[] {
    return COMMENTS.filter(x => x.productId === pId)
  }
}
