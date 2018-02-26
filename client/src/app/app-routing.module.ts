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
   }
   // { path: 'b', component: BajoComponent },
   // { path: 'm', component: ModeradoComponent}
   // { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
<<<<<<< HEAD
   imports: [RouterModule.forRoot(routes),
   // NgbModule,
 ],
=======
   imports: [RouterModule.forRoot(routes)],
>>>>>>> 727caa58ce8a1e5ce2e3d1ebea28cbffa991cfd0
   exports: [RouterModule],
   providers: []
 })
 export class Audit3RoutingModule { }
