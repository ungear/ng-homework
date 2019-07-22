import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service'
import { Constants } from "./services/constants.service"
import { generate, GeneratorFactoryService } from './services/generator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    { provide: LocalStorageService, useClass: LocalStorageService},
    { provide: Constants, useValue: Constants},
    { provide: GeneratorFactoryService, useValue: generate}
  ]
})
export class CoreModule { }
