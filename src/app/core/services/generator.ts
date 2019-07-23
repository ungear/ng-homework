import { InjectionToken } from '@angular/core';

const symbols = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

export function generate(n: number): string {
  return Array(n)
    .fill(null)
    .map((x, ind) => {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      return symbols[randomIndex];
    })
    .join('');
}

export const GeneratorFactoryService = new InjectionToken('GeneratorFactoryService');
