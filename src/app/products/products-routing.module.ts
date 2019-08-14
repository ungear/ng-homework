import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { CommentsListComponent } from "./components/comments-list/comments-list.component";

// { path: ':productId', component: ProductDetailsComponent },
const routes: Routes = [
  { 
    path: 'products-list', 
    component: ProductListComponent,
  },
  { 
    path: 'product', 
    children: [
      { 
        path: ':productId', 
        component: ProductDetailsComponent, 
        children: [
          { 
            path: 'comments', 
            component: CommentsListComponent,
            outlet: 'comments'
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule {}