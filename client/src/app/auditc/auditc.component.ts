import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Puntajes } from '../puntajes';
import { UsuarioService} from '../usuario.service';
import {Userinfo} from '../userinfo';

@Component({
  selector: 'app-auditc',
  templateUrl: './auditc.component.html',
  styleUrls: ['./auditc.component.css']
})

export class AuditcComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  // model = new Puntajes(undefined,undefined,undefined,undefined)
  model = new Puntajes(undefined,undefined,undefined,undefined)

  // userInfo = new Userinfo('','')

  ngOnInit() {
  this.usuarioService.get_userInfo().subscribe(res => {this.model.user_id = res.json().data.id})
  }

  enviar() {
    this.usuarioService.graba_audit(this.model)
  }

}
