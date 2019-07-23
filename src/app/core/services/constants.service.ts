import { InjectionToken } from '@angular/core';

export interface AppConsts {
  App: string;
  Ver: string;
}

export const ConstantsService: AppConsts = { App: 'TaskManager', Ver: '1.0' };

export const ConstantsServiceInjector = new InjectionToken<AppConsts>('AppConsts');
