import { TestBed, inject } from '@angular/core/testing';

import { SumaPuntajeService } from './suma-puntaje.service';

describe('SumaPuntajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SumaPuntajeService]
    });
  });

  it('should be created', inject([SumaPuntajeService], (service: SumaPuntajeService) => {
    expect(service).toBeTruthy();
  }));
});
