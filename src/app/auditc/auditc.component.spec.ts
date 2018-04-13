import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditcComponent } from './auditc.component';

describe('AuditcComponent', () => {
  let component: AuditcComponent;
  let fixture: ComponentFixture<AuditcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
