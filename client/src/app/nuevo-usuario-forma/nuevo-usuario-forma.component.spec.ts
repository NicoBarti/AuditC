import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUsuarioFormaComponent } from './nuevo-usuario-forma.component';

describe('NuevoUsuarioFormaComponent', () => {
  let component: NuevoUsuarioFormaComponent;
  let fixture: ComponentFixture<NuevoUsuarioFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoUsuarioFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUsuarioFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
