import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoinicioComponent } from './infoinicio.component';

describe('InfoinicioComponent', () => {
  let component: InfoinicioComponent;
  let fixture: ComponentFixture<InfoinicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoinicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
