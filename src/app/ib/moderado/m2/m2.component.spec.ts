import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2Component } from './m2.component';

describe('M2Component', () => {
  let component: B2Component;
  let fixture: ComponentFixture<B2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
