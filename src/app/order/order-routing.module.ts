import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderFormComponent } from "./components/order-form/order-form.component"

const routes: Routes = [
  { path: 'order', component: OrderFormComponent},
  
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OrderRoutingModule { }
