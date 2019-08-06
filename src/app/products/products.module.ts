import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSnippetComponent } from './components/product-snippet/product-snippet.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductSnippetComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
