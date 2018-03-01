import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

import { Audit3RoutingModule } from './app-routing.module';
import { NuevoUsuarioFormaComponent } from './nuevo-usuario-forma/nuevo-usuario-forma.component';
import { NuevoUsuarioSesionComponent } from './nuevo-usuario-sesion/nuevo-usuario-sesion.component'

import { UsuarioService } from './usuario.service';
import { TragosService } from './tragos.service'
import { AlmacenaConsumoService} from './almacena-consumo.service'
// import { HomeComponent } from './home/home.component'

import { AuthGuard } from './auth-guard';

import { AuditcModule } from './auditc/auditc.module';
import { IbModule } from './ib/ib.module';
import { NuComponent } from './nuevo-usuario-sesion/nu/nu.component';
import { InfoinicioComponent } from './auditc/infoinicio/infoinicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoUsuarioComponent,
    NuevoUsuarioFormaComponent,
    NuevoUsuarioSesionComponent,
    NuComponent,
    InfoinicioComponent,

  ],
  imports: [
    HttpModule,
    BrowserModule,
    // NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuditcModule,
    IbModule,
    Audit3RoutingModule,
    BrowserAnimationsModule

  ],
  providers: [Angular2TokenService,
              UsuarioService,
              TragosService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
