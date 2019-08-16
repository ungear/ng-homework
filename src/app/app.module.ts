import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";
import { OrderModule } from "./order/order.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ProductsModule,
    CartModule,
    CoreModule,
    OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
