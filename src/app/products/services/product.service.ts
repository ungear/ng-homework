import { Injectable } from '@angular/core';

import { Product, Category, ProductComment } from '../../../types/product';

const PRODUCTS_INITIAL_DATA: Product[] = [
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
  private productsCache: Product[];
  private readonly storageName = "ng_homework_products";
  
  constructor() { 
    let lsData = localStorage.getItem(this.storageName);
    if(lsData){
      this.productsCache = JSON.parse(lsData);
    }
    else{
      localStorage.setItem(this.storageName, JSON.stringify(PRODUCTS_INITIAL_DATA));
      this.productsCache = PRODUCTS_INITIAL_DATA;
    }
  }

  getProducts(): Product[] {
    return this.productsCache;
  }

  getProductById(pId: number): Product{
    return this.productsCache.find(x => x.id === pId)
  }

  getProductComments(pId: number): ProductComment[] {
    return COMMENTS.filter(x => x.productId === pId)
  }
}
