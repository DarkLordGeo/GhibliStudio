import { TestBed } from '@angular/core/testing';

import { GhibliService } from './ghibli.service';

describe('GhibliService', () => {
  let service: GhibliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhibliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
