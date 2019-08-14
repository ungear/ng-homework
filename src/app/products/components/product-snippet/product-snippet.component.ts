import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../../../../types/product';

@Component({
  selector: 'app-product-snippet',
  templateUrl: './product-snippet.component.html',
  styleUrls: ['./product-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSnippetComponent {
  @Input() data: Product;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() removeFromCart = new EventEmitter<Product>();
  @Output() showDetails = new EventEmitter<Product>();
  onAddClick() {
    this.addToCart.emit(this.data);
  }

  onRemoveClick() {
    this.removeFromCart.emit(this.data);
  }

  onNameClick(){
    this.showDetails.emit(this.data);
  }
}
