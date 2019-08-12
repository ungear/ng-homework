import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { CoreRoutingModule } from "./core-routing.module"


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
