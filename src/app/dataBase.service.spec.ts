import { TestBed } from '@angular/core/testing';

import { DataBaseService } from './dataBase.service';

describe('DatenbankService', () => {
  let service: DataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
