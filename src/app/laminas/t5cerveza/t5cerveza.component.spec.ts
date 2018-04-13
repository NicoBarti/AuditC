import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T5cervezaComponent } from './t5cerveza.component';

describe('T5cervezaComponent', () => {
  let component: T5cervezaComponent;
  let fixture: ComponentFixture<T5cervezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T5cervezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T5cervezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
