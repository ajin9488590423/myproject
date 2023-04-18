import { TestBed } from '@angular/core/testing';

import { ELibServiceService } from './e-lib-service.service';

describe('ELibServiceService', () => {
  let service: ELibServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ELibServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
