import { Component, OnInit } from '@angular/core';
import { TragosService} from '../../tragos.service'
import { RutaImagenes} from '../ruta-imagenes'

@Component({
  selector: 'app-lamina-bajo-riesgo2-tragos-ocasion',
  templateUrl: './lamina-bajo-riesgo2-tragos-ocasion.component.html',
  styleUrls: ['./lamina-bajo-riesgo2-tragos-ocasion.component.css']
})
export class LaminaBajoRiesgo2TragosOcasionComponent implements OnInit {

  bebida1: string;
  bebida2: string;
  rutaImagenes = RutaImagenes;
  imagen1: string;

  constructor( private tragosService: TragosService) { }

  ngOnInit() {

    let ordenBebidas = this.tragosService.bebidasPreferidas()

    if(ordenBebidas[0].cantidad > 0) {  this.bebida1 = ordenBebidas[0].bebida }
    else { this.bebida1 = 'cerveza'}

    if(ordenBebidas[1].cantidad > 0) {  this.bebida2 = ordenBebidas[1].bebida }
    else if(ordenBebidas[1].cantidad == 0 && this.bebida1 == 'combinado_fuerte') {  this.bebida2 = 'vino'}
    else {  this.bebida2 = 'combinado_fuerte'}

    this.imagen1 = this.rutaImagenes[this.bebida1]
    
  }

}
