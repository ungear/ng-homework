import { Product } from './product';

export interface CartItem {
  product: Product;
  amount: number;
}

export interface Cart {
  items: CartItem[];
  totalPrice: number;
  totalAmount: number;
}
