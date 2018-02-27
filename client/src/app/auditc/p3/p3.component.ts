import { Component, OnInit } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import {SumaPuntajeService} from '../suma-puntaje.service'
import { Router } from '@angular/router';
import {slideInDownAnimation} from '../../animaciones'

import { HostBinding } from '@angular/core';

// import { T5cervezaComponent } from './../laminas/t5cerveza/t5cerveza.component';


@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css'],
  animations: [slideInDownAnimation]
})

export class P3Component implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  constructor(private sumaPuntajeService: SumaPuntajeService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p3
  model: number;

  ngOnInit() {
  }

  almacenaPuntaje() {
    this.sumaPuntajeService.setP3(this.model);
  }


}
