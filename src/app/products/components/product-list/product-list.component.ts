import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../../../types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsCollection: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productsCollection = this.productService.getProducts();
  }

}
