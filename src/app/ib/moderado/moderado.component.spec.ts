import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeradoComponent } from './moderado.component';

describe('ModeradoComponent', () => {
  let component: ModeradoComponent;
  let fixture: ComponentFixture<ModeradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
