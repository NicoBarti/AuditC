import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { P1Component }  from './p1/p1.component'
import { P2Component }  from './p2/p2.component'
import { P3Component }  from './p3/p3.component'
import { AuditcComponent } from './auditc.component';

import { AuditcRoutingModule } from './auditc-routing.module'

import { SumaPuntajeService } from './suma-puntaje.service'

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuditcRoutingModule,
  ],
  declarations: [
     P1Component,
     P2Component,
     P3Component,
     AuditcComponent],
  providers: [SumaPuntajeService]
})

export class AuditcModule {}
