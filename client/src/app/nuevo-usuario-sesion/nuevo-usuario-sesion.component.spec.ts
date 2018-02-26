import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUsuarioSesionComponent } from './nuevo-usuario-sesion.component';

describe('NuevoUsuarioSesionComponent', () => {
  let component: NuevoUsuarioSesionComponent;
  let fixture: ComponentFixture<NuevoUsuarioSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoUsuarioSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUsuarioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
