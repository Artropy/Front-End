import { TestBed, inject } from '@angular/core/testing';

import { SearchResultsService } from './search-results.service';

describe('SearchResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchResultsService]
    });
  });

  it('should be created', inject([SearchResultsService], (service: SearchResultsService) => {
    expect(service).toBeTruthy();
  }));
});
