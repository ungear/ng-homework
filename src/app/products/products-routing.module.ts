import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

// { path: ':productId', component: ProductDetailsComponent },
const routes: Routes = [
  { 
    path: 'products-list', 
    component: ProductListComponent,
    children: [
      { 
        path: ':id', 
        component: ProductDetailsComponent,
        outlet: 'productDetails'
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule {}