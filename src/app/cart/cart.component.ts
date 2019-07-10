import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() purchasedProducts: Product[];
}
