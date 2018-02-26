import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BajoComponent } from './bajo/bajo.component'
import { B1Component }  from './bajo/b1/b1.component';
import { B2Component} from './bajo/b2/b2.component'
import { B3Component} from './bajo/b3/b3.component'

import { ModeradoComponent } from './moderado/moderado.component'
import { M1Component} from './moderado/m1/m1.component'
import { M2Component} from './moderado/m2/m2.component'


import { IbComponent }  from './ib.component'

import { AuthGuard } from '../auth-guard';


const auditcRoutes: Routes = [
  {path: 'ib',
  // canActivateChild: [AuthGuard],
  component: IbComponent,
  children: [
    {path: 'b',
    component: BajoComponent,
      children: [
        {path: 'b1', component: B1Component},
        {path: 'b2', component: B2Component},
        {path: 'b3', component: B3Component}
      ]},
    {path: 'm',
    component: ModeradoComponent,
    children: [
      {path: 'm1', component: M1Component},
      {path: 'm2', component: M2Component}

    ]}
  ]}
  ]

@NgModule({
  imports: [
     RouterModule.forChild(auditcRoutes)],
  exports: [
    RouterModule
  ]
})

export class IbRoutingModule {}
