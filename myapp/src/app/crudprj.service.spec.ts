import { TestBed } from '@angular/core/testing';

import { CRUDprjService } from './crudprj.service';

describe('CRUDprjService', () => {
  let service: CRUDprjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDprjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
