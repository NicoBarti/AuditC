import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {MatSelectModule, MatFormFieldModule} from '@angular/material'

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
    LaminasModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
     P1Component,
     P2Component,
     P3Component,
     AuditcComponent,

  ],
  exports: [
  ],
  providers: [
              AlmacenaConsumoService]
})

export class AuditcModule {}
