import { TestBed } from '@angular/core/testing';

import { TradingService } from './trading.service';

describe('TradingService', () => {
  let service: TradingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
