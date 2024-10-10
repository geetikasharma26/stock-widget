import { TestBed } from '@angular/core/testing';

import { StocksInformationService } from './stocks-information.service';

describe('StocksInformationService', () => {
  let service: StocksInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
