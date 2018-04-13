import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service'

@Component({
  selector: 'app-nuevo-usuario-forma',
  templateUrl: './nuevo-usuario-forma.component.html',
  styleUrls: ['./nuevo-usuario-forma.component.css']
})
export class NuevoUsuarioFormaComponent implements OnInit {

  model = new Usuario('', '', '','',undefined,'');
  nuevoUsuarioForm: FormGroup;

  constructor(private usuarioService: UsuarioService,
              private fb: FormBuilder) {
              this.createForm()    }

  createForm() {
    this.nuevoUsuarioForm = this.fb.group({
      name:       ['', Validators.required],
      email:      ['', [Validators.email, Validators.required]],
      password:   ['', [Validators.required, Validators.minLength(8)]],
      password_c: ['', [Validators.required, Validators.minLength(8), checkpassword1()]]
    });

  }

  ngOnInit() {

  }

  register() {

     this.usuarioService.registerAccount({
       email:                this.nuevoUsuarioForm.value.email,
       name:                 this.nuevoUsuarioForm.value.name,
       password:             this.nuevoUsuarioForm.value.password,
       passwordConfirmation: this.nuevoUsuarioForm.value.password_c
    });

  }


}

export function checkpassword1(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let ok = undefined;
    // if(control.value == 'hola'){ok = true} else {ok = false};
    if(control.value == control.root.value.password){ok = false} else {ok = true};
    return ok ? {'checkPassword': {value: control.value}} : null;
  };
}
