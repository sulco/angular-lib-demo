import { TestBed, inject } from '@angular/core/testing';

import { TvmazeService } from './tvmaze.service';

describe('TvmazeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvmazeService]
    });
  });

  it('should be created', inject([TvmazeService], (service: TvmazeService) => {
    expect(service).toBeTruthy();
  }));
});
