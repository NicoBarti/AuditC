import { Component, Input } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import {AlmacenaConsumoService} from '../../almacena-consumo.service'

import {slideInDownAnimation} from '../../animaciones'
import {TragosService} from '../../tragos.service'

import { Router } from '@angular/router';
import { HostBinding } from '@angular/core';

import { Bebidas } from '../../bebidas'


@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css'],
  animations: [slideInDownAnimation]
})

export class P2Component {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  @Input('bebidas') bebidas : Bebidas;

  constructor(
              private almacenaConsumoService: AlmacenaConsumoService,
              private tragosService: TragosService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p2


enviar(data): void {
  // console.log(data);
  this.almacenaConsumoService.setP2(
    this.tragosService.convertir(data));

  this.router.navigate(['auditc/p3'])

}

}
