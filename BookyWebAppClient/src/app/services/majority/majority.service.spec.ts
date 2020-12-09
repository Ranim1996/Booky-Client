import { TestBed } from '@angular/core/testing';

import { MajorityService } from './majority.service';

describe('MajorityService', () => {
  let service: MajorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MajorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
