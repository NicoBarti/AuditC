import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service'

@Component({
  selector: 'app-nuevo-usuario-sesion',
  templateUrl: './nuevo-usuario-sesion.component.html',
  styleUrls: ['./nuevo-usuario-sesion.component.css']
})
export class NuevoUsuarioSesionComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  model = new Usuario('', '', '','');

  ngOnInit() {  }

  signIn() {
    this.usuarioService.signIn({
      email: this.model.email,
      password: this.model.password
    });
  }


}
