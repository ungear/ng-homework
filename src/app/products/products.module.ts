import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSnippetComponent } from './components/product-snippet/product-snippet.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductSnippetComponent,
    ProductListComponent, 
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
