import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { NuevoUsuarioSesionComponent } from './nuevo-usuario-sesion/nuevo-usuario-sesion.component';
import { NuComponent } from './nuevo-usuario-sesion/nu/nu.component';

// import { HomeComponent } from './home/home.component';
import { AuditcComponent } from './auditc/auditc.component';
import { BajoComponent } from './ib/bajo/bajo.component';
import { ModeradoComponent } from './ib/moderado/moderado.component'

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: 'sign-up', component: NuevoUsuarioComponent },
  { path: 'sign-in',
    component: NuevoUsuarioSesionComponent,
    children: [
      { path: 'nu',
        component: NuComponent}
    ]},
  {
     path: '',
     component: AuditcComponent,
     canActivate: [AuthGuard]
   },
   // { path: 'b', component: BajoComponent },
   // { path: 'm', component: ModeradoComponent}
   { path: '**', redirectTo: '' }
 ];

@NgModule({
   imports: [RouterModule.forRoot(routes),
   // NgbModule,
 ],
   exports: [RouterModule],
   providers: []
 })
 export class Audit3RoutingModule { }
