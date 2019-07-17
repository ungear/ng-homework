import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../../../types/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsCollection: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.productsCollection = this.productService.getProducts();
  }

  onAddToCart(pr: Product) {
    this.cartService.addProductToCart(pr);
  }

}
