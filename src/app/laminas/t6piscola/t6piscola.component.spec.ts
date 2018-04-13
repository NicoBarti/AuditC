import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T6piscolaComponent } from './t6piscola.component';

describe('T6piscolaComponent', () => {
  let component: T6piscolaComponent;
  let fixture: ComponentFixture<T6piscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T6piscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T6piscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
