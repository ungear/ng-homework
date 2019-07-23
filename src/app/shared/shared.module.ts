import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MagnifierDirective } from './directives/magnifier.directive';



@NgModule({
  declarations: [HighlightDirective, MagnifierDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, MagnifierDirective]
})
export class SharedModule { }
