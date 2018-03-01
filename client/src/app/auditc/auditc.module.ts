import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { P1Component }  from './p1/p1.component'
import { P2Component }  from './p2/p2.component'
import { P3Component }  from './p3/p3.component'
import { AuditcComponent } from './auditc.component';
import { T5cervezaComponent } from '../laminas/t5cerveza/t5cerveza.component';
import { T5vasoVinoComponent } from '../laminas/t5vaso-vino/t5vaso-vino.component';
import { T6piscolaComponent } from '../laminas/t6piscola/t6piscola.component';



import { AuditcRoutingModule } from './auditc-routing.module'

import { AlmacenaConsumoService} from '../almacena-consumo.service'

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuditcRoutingModule
  ],
  declarations: [
     P1Component,
     P2Component,
     P3Component,
     AuditcComponent,
   T5cervezaComponent,
    T5vasoVinoComponent,
  T6piscolaComponent,
  ],
  providers: [
              AlmacenaConsumoService]
})

export class AuditcModule {}
