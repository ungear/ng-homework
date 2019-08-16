import { Component, OnInit } from '@angular/core';
import { ProductComment } from 'src/types/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  comments: ProductComment[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    let pId = parseInt(this.route.snapshot.paramMap.get('productId'));
    this.comments = this.productService.getProductComments(pId);
  }

}
