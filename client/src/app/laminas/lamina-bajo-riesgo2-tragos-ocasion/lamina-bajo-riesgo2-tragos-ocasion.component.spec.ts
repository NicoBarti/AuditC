import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminaBajoRiesgo2TragosOcasionComponent } from './lamina-bajo-riesgo2-tragos-ocasion.component';

describe('LaminaBajoRiesgo2TragosOcasionComponent', () => {
  let component: LaminaBajoRiesgo2TragosOcasionComponent;
  let fixture: ComponentFixture<LaminaBajoRiesgo2TragosOcasionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaminaBajoRiesgo2TragosOcasionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminaBajoRiesgo2TragosOcasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
