import { TestBed } from '@angular/core/testing';

import { FireServiceService } from './fire-service.service';

describe('FireServiceService', () => {
  let service: FireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
