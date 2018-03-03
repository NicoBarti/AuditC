import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TragosEquivalentesComponent } from './tragos-equivalentes.component';

describe('TragosEquivalentesComponent', () => {
  let component: TragosEquivalentesComponent;
  let fixture: ComponentFixture<TragosEquivalentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TragosEquivalentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TragosEquivalentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
