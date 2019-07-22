import { InjectionToken } from '@angular/core';

export function generate(n: number): string{
  return "1"
}

export const GeneratorFactoryService = new InjectionToken('GeneratorFactoryService')