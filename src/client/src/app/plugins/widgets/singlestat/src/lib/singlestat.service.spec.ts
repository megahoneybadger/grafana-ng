import { TestBed } from '@angular/core/testing';

import { SinglestatService } from './singlestat.service';

describe('SinglestatService', () => {
  let service: SinglestatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglestatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
