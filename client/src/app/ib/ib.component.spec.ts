import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbComponent } from './ib.component';

describe('IbComponent', () => {
  let component: IbComponent;
  let fixture: ComponentFixture<IbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
