import { Component } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import {SumaPuntajeService} from '../suma-puntaje.service'
import {slideInDownAnimation} from '../../animaciones'
import {ConvertirTragosService} from '../convertir-tragos.service'

import { Router } from '@angular/router';
import { HostBinding } from '@angular/core';



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

  constructor(private sumaPuntajeService: SumaPuntajeService,
              private convertirTragosService: ConvertirTragosService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p2
  cerveza: number = 0;
  vino: number = 0;
  destilado: number = 0;


  almacenaPuntaje() {
      // console.log(this.cerveza, this.vino, this.destilado)
//esta funcion va arriba, transitorio, en desarrollo
this.sumaPuntajeService.setP2(
      this.convertirTragosService.convertir(
        this.cerveza, this.vino, this.destilado)
);
    // this.sumaPuntajeService.setP2(this.model);
    this.router.navigate(['auditc/p3'])

  }

}
