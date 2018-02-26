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

import { IbComponent } from './ib.component';

import { IbRoutingModule } from './ib-routing.module';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IbRoutingModule,
  ],
  declarations: [
     B1Component,
     B2Component,
     BajoComponent,
     B3Component,
     IbComponent,
     ModeradoComponent,
     M1Component,
     M2Component],
  providers: []
})

export class IbModule {}
