import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { P1Component }  from './p1/p1.component'
import { P2Component }  from './p2/p2.component'
import { P3Component }  from './p3/p3.component'
import { AuditcComponent } from './auditc.component';

import { AuditcRoutingModule } from './auditc-routing.module'

import { AlmacenaConsumoService} from '../almacena-consumo.service'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {LaminasModule} from '../laminas/laminas.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuditcRoutingModule,
    NgbModule,
    LaminasModule
  ],
  declarations: [
     P1Component,
     P2Component,
     P3Component,
     AuditcComponent,

  ],
  providers: [
              AlmacenaConsumoService]
})

export class AuditcModule {}
