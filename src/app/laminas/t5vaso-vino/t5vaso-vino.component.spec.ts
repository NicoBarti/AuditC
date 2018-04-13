import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T5vasoVinoComponent } from './t5vaso-vino.component';

describe('T5vasoVinoComponent', () => {
  let component: T5vasoVinoComponent;
  let fixture: ComponentFixture<T5vasoVinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T5vasoVinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T5vasoVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
