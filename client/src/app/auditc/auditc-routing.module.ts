import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { P1Component }  from './p1/p1.component'
import { P2Component }  from './p2/p2.component'
import { P3Component }  from './p3/p3.component'
import { AuditcComponent } from './auditc.component'
import { InfoinicioComponent } from './infoinicio/infoinicio.component'
import { AuthGuard } from '../auth-guard';


const auditcRoutes: Routes = [
  {path: 'auditc',
  canActivateChild: [AuthGuard],
  component: AuditcComponent,
  children: [
    {path: 'p1', component: P1Component},
    {path: 'p2', component: P2Component},
    {path: 'p3', component: P3Component},
    {path: 'infoinicio', component: InfoinicioComponent}
  ]}
  ]

@NgModule({
  imports: [
     RouterModule.forChild(auditcRoutes)],
  exports: [
    RouterModule
  ]
})

export class AuditcRoutingModule {}
