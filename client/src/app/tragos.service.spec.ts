import { TestBed, inject } from '@angular/core/testing';

import { ConvertirTragosService } from './convertir-tragos.service';

describe('ConvertirTragosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertirTragosService]
    });
  });

  it('should be created', inject([ConvertirTragosService], (service: ConvertirTragosService) => {
    expect(service).toBeTruthy();
  }));
});
