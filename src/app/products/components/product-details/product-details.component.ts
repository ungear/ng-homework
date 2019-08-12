import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Product } from 'src/types/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(
    private route:ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    let pId = parseInt(this.route.snapshot.paramMap.get('productId'));
    this.product = this.productService.getProductById(pId)
  }

}
