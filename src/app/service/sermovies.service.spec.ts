import { TestBed } from '@angular/core/testing';

import { SermoviesService } from './sermovies.service';

describe('SermoviesService', () => {
  let service: SermoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SermoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
