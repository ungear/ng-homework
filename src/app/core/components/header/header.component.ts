import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Cart } from 'src/types/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemsInCart = 0;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
   this.cartService.cart$.subscribe(this.onCartUpdated.bind(this));
  }

  private onCartUpdated(c: Cart){
    this.itemsInCart = c && c.items && c.items.length
      ? c.items.length
      : 0;
  }

}
