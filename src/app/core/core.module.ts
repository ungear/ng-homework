import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { CoreRoutingModule } from "./core-routing.module";
import { NavigationComponent } from './components/navigation/navigation.component'


@NgModule({
  declarations: [HeaderComponent, NavigationComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [HeaderComponent, NavigationComponent]
})
export class CoreModule { }
