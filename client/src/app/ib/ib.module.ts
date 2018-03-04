import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { BajoComponent } from './bajo/bajo.component';
import { B1Component }  from './bajo/b1/b1.component';
import { B2Component} from './bajo/b2/b2.component';
import { B3Component } from './bajo/b3/b3.component';

import { ModeradoComponent } from './moderado/moderado.component';
import { M1Component } from './moderado/m1/m1.component';
import { M2Component } from './moderado/m2/m2.component';
import { M3Component } from './moderado/m3/m3.component';

import { IbComponent } from './ib.component';

import { IbRoutingModule } from './ib-routing.module';
import { AlmacenaConsumoService} from '../almacena-consumo.service'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {LaminasModule} from '../laminas/laminas.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IbRoutingModule,
    NgbModule,
    LaminasModule
  ],
  declarations: [
     B1Component,
     B2Component,
     BajoComponent,
     B3Component,
     IbComponent,
     ModeradoComponent,
     M1Component,
     M2Component,
     M3Component],
  providers: [AlmacenaConsumoService]
})

export class IbModule {}
