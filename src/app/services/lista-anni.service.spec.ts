import { TestBed } from '@angular/core/testing';

import { ListaAnniService } from './lista-anni.service';

describe('ListaAnniService', () => {
  let service: ListaAnniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAnniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
