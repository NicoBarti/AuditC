import { Component, Input } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import {SumaPuntajeService} from '../suma-puntaje.service'
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

  constructor(private sumaPuntajeService: SumaPuntajeService,
              private tragosService: TragosService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p2


almacenaPuntaje(data): void {
  // console.log(data);
  this.sumaPuntajeService.setP2(
    this.tragosService.convertir(data)
  this.router.navigate(['auditc/p3'])
  )
}

}

// ngOnInit() {
//   let cerveza = this.bebidas.cerveza
//   let vino = this.bebidas.vino
//   let destilado = this.bebidas.destilado
//   let shop_grande = this.bebidas.shop_grande
//   let vaso_vino = this.bebidas.vaso_vino
//   let combinado_simple = this.bebidas.combinado_simple
//   let combinado_fuerte = this.bebidas.combinado_fuerte
//   let shop_pequeno = this.bebidas.shop_pequeno
//   let botella_cerveza = this.bebidas.botella_cerveza
//   let botella_vino = this.bebidas.botella_vino
//   let caja_vino = this.bebidas.caja_vino
//   let botella_licor = this.bebidas.botella_licor
//
// }

// cerveza: number = 0;
// vino: number = 0;
// destilado: number = 0;
// shop_grande: number = 0;
// vaso_vino: number = 0;
// combinado_simple: number = 0;
// combinado_fuerte: number =0;
// shop_pequeno: number=0;
// botella_cerveza: number=0;
// botella_vino: number=0;
// caja_vino: number=0;
// botella_licor: number=0;


//   almacenaPuntaje() {
// this.sumaPuntajeService.setP2(
//       this.tragosService.convertir(
//         this.cerveza, this.vino, this.destilado,
//         this.shop_grande, this.vaso_vino, this.combinado_simple,
//         this.combinado_fuerte, this.shop_pequeno, this.botella_cerveza,
//         this.botella_vino, this.caja_vino, this.botella_licor));
//     this.router.navigate()
//
//   }
