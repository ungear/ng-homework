import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartListComponent } from "./components/cart-list/cart-list.component"

const routes: Routes = [
  { path: 'cart', component: CartListComponent},
  
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CartRoutingModule { }
