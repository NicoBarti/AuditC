import { Component, OnInit } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import { Router } from '@angular/router';
import {slideInDownAnimation} from '../../animaciones'

import { HostBinding } from '@angular/core';
import {AlmacenaConsumoService} from '../../almacena-consumo.service'

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

  constructor(private almacenaConsumoService: AlmacenaConsumoService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p3
  model: number;

  ngOnInit() {
  }

  enviar() {
    this.almacenaConsumoService.setP3(this.model);
    this.router.navigate(['ib'])

    }

  }
