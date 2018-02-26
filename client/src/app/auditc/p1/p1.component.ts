import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HostBinding } from '@angular/core';

import {OpcionesPreguntas} from '../opciones-preguntas'
import {SumaPuntajeService} from '../suma-puntaje.service'
import {slideInDownAnimation} from '../../animaciones'

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css'],
  animations: [slideInDownAnimation]
})

export class P1Component {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  constructor(private sumaPuntajeService: SumaPuntajeService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p1
  model: number;

  almacenaPuntaje() {
    this.sumaPuntajeService.setP1(this.model);
    this.router.navigate(['auditc/p2'])
  }

  }
