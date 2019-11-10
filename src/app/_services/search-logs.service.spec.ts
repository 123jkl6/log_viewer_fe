import { TestBed } from '@angular/core/testing';

import { SearchLogsService } from './search-logs.service';

describe('SearchLogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchLogsService = TestBed.get(SearchLogsService);
    expect(service).toBeTruthy();
  });
});
