import { TestBed } from '@angular/core/testing';

import { RicercaDocumentiService } from './ricerca-documenti.service';

describe('RicercaDocumentiService', () => {
  let service: RicercaDocumentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicercaDocumentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
