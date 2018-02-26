import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

import { Audit3RoutingModule } from './app-routing.module';
import { NuevoUsuarioFormaComponent } from './nuevo-usuario-forma/nuevo-usuario-forma.component';
import { NuevoUsuarioSesionComponent } from './nuevo-usuario-sesion/nuevo-usuario-sesion.component'

import { UsuarioService } from './usuario.service';
import { HomeComponent } from './home/home.component'

import { AuthGuard } from './auth-guard';
import { AuditcComponent } from './auditc/auditc.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoUsuarioComponent,
    NuevoUsuarioFormaComponent,
    NuevoUsuarioSesionComponent,
    HomeComponent,
    AuditcComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
     HttpClientModule,
    Audit3RoutingModule,
    FormsModule
  ],
  providers: [Angular2TokenService,
              UsuarioService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
