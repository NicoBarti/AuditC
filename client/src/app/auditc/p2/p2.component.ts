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
  shop_grande: number = 0;
  vaso_vino: number = 0;
  combinado_simple: number = 0;
  combinado_fuerte: number =0;
  shop_pequeno: number=0;
  botella_cerveza: number=0;
  botella_vino: number=0;
  caja_vino: number=0;
  botella_licor: number=0;


  almacenaPuntaje() {
this.sumaPuntajeService.setP2(
      this.convertirTragosService.convertir(
        this.cerveza, this.vino, this.destilado,
        this.shop_grande, this.vaso_vino, this.combinado_simple,
        this.combinado_fuerte, this.shop_pequeno, this.botella_cerveza,
        this.botella_vino, this.caja_vino, this.botella_licor));
    this.router.navigate(['auditc/p3'])

  }

}
