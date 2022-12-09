import { TestBed } from '@angular/core/testing';

import { WebphoneService } from './webphone.service';

describe('WebphoneService', () => {
  let service: WebphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
