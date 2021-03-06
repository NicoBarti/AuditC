import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostBinding } from '@angular/core';

import {OpcionesPreguntas} from '../opciones-preguntas'
// import {SumaPuntajeService} from '../suma-puntaje.service'
import {slideInDownAnimation} from '../../animaciones'
import {AlmacenaConsumoService} from '../../almacena-consumo.service'
// import {MatSelectModule, MatFormFieldModule} from '@angular/material'

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css'],
  animations: [slideInDownAnimation]
})

export class P1Component implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  constructor(
              private almacenaConsumoService: AlmacenaConsumoService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p1
  model: number;

ngOnInit() {
  // this.model = 'HOLA!'
}

  enviar() {
    this.almacenaConsumoService.setP1(this.model)
    // this.sumaPuntajeService.setP1(this.model);
    this.router.navigate(['auditc/p2'])
  }

  }
