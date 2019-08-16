export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

export interface ProductComment {
  productId: number,
  text: string;
}

export enum Category {
  Book = 'book',
  Food = 'food',
}
