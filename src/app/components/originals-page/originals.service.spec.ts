import { TestBed, inject } from '@angular/core/testing';

import { OriginalsService } from './originals.service';

describe('OriginalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OriginalsService]
    });
  });

  it('should be created', inject([OriginalsService], (service: OriginalsService) => {
    expect(service).toBeTruthy();
  }));
});
