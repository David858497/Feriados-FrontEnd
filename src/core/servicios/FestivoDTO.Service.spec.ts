import { TestBed } from '@angular/core/testing';

import { FestivoDTOService } from './FestivoDTO.service';

describe('FestivoDTOService', () => {
  let service: FestivoDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivoDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
