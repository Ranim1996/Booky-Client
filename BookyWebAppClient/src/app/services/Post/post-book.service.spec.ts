import { TestBed } from '@angular/core/testing';

import { PostBookService } from './post-book.service';

describe('PostBookService', () => {
  let service: PostBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
