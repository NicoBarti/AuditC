import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminaRiesgoModerado4TragosOcasionComponent } from './lamina-riesgo-moderado4-tragos-ocasion.component';

describe('LaminaRiesgoModerado4TragosOcasionComponent', () => {
  let component: LaminaRiesgoModerado4TragosOcasionComponent;
  let fixture: ComponentFixture<LaminaRiesgoModerado4TragosOcasionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaminaRiesgoModerado4TragosOcasionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminaRiesgoModerado4TragosOcasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
