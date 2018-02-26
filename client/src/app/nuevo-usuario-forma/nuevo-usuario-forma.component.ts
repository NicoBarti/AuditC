import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service'

@Component({
  selector: 'app-nuevo-usuario-forma',
  templateUrl: './nuevo-usuario-forma.component.html',
  styleUrls: ['./nuevo-usuario-forma.component.css']
})
export class NuevoUsuarioFormaComponent implements OnInit {

  model = new Usuario('', '', '','');

  constructor(private usuarioService: UsuarioService) {      }

  ngOnInit() {
  }

  register() {
     this.usuarioService.registerAccount({
       email:                this.model.email,
       name:                 this.model.name,
       password:             this.model.password,
       passwordConfirmation: this.model.password
    });
  }

}
