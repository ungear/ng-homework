import { TestBed } from '@angular/core/testing';

import { AsyncCartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncCartService = TestBed.get(AsyncCartService);
    expect(service).toBeTruthy();
  });
});
