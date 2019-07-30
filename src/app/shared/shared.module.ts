import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MagnifierDirective } from './directives/magnifier.directive';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [HighlightDirective, MagnifierDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, MagnifierDirective, OrderByPipe]
})
export class SharedModule { }
