import { TestBed, inject } from '@angular/core/testing';

import { AlmacenaConsumoService } from './almacena-consumo.service';

describe('AlmacenaConsumoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlmacenaConsumoService]
    });
  });

  it('should be created', inject([AlmacenaConsumoService], (service: AlmacenaConsumoService) => {
    expect(service).toBeTruthy();
  }));
});
