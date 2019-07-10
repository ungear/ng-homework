import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../../types/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() purchasedProducts: Product[];

  ngOnInit() {
  }

}
