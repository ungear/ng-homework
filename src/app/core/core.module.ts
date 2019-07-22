import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service'
import { Constants } from "./services/constants.service"

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    { provide: LocalStorageService, useClass: LocalStorageService},
    { provide: Constants, useValue: Constants}
  ]
})
export class CoreModule { }
