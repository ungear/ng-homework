import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../../../types/product';
import { AsyncCartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  productsCollection: Product[];

  constructor(
    private productService: ProductService,
    private cartService: AsyncCartService,
  ) { }

  ngOnInit() {
    this.productsCollection = this.productService.getProducts();
  }

  onAddToCart(pr: Product) {
    this.cartService.addProductToCart(pr);
  }

  onRemoveFromCart(pr: Product) {
    this.cartService.removeProductFromCart(pr);
  }

}
