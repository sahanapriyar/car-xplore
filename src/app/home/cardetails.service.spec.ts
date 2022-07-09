import { TestBed } from '@angular/core/testing';

import { CardetailsService } from './cardetails.service';

describe('CardetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardetailsService = TestBed.get(CardetailsService);
    expect(service).toBeTruthy();
  });
});
