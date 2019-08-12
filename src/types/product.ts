export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

export enum Category {
  Book = 'book',
  Food = 'food',
}
