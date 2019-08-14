import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
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
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let pId = parseInt(params.get('id'));
        this.product = this.productService.getProductById(pId)
      }) 
  }

  onClearClick(){
    this.router.navigate([{ outlets: { productDetails: null } }]); 
  }

}
