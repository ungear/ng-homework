import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, HostBinding } from '@angular/core';
import { CartItem } from 'src/types/cart';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
  @Output() incrementAmount = new EventEmitter()
  @Output() decrementAmount = new EventEmitter()

  @HostBinding('class.focused') isFocused: boolean = false;
  @HostListener("mouseover") 
  private onHostMouseOver(){
    this.isFocused = true;
  }

  @HostListener("mouseout") 
  private onHostMouseOut(){
    this.isFocused = false;
  }
  

  onIncrementAmountClick(){
    this.incrementAmount.emit()
  }

  onDecrementAmountClick(){
    this.decrementAmount.emit()
  }

}
