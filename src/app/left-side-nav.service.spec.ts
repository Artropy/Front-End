import { TestBed, inject } from '@angular/core/testing';

import { LeftSideNavService } from './left-side-nav.service';

describe('LeftSideNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftSideNavService]
    });
  });

  it('should be created', inject([LeftSideNavService], (service: LeftSideNavService) => {
    expect(service).toBeTruthy();
  }));
});
