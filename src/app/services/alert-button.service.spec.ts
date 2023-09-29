import { TestBed } from '@angular/core/testing';

import { AlertButtonService } from './alert-button.service';

describe('AlertButtonService', () => {
  let service: AlertButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
