import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from 'src/types/cart';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
  @Output() incrementAmount = new EventEmitter()
  @Output() decrementAmount = new EventEmitter()

  onIncrementAmountClick(){
    this.incrementAmount.emit()
  }

  onDecrementAmountClick(){
    this.decrementAmount.emit()
  }
}
