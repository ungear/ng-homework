import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
