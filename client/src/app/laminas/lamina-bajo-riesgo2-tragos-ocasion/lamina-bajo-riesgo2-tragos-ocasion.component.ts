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
  imagen2: string;

  constructor( private tragosService: TragosService) { }

  ngOnInit() {

    let ordenBebidas = this.tragosService.equivalentesPorTipoBebida()
    this.bebida1 = ordenBebidas[0].bebida
    this.bebida2 = ordenBebidas[1].bebida
    
    this.imagen1 = this.rutaImagenes[this.bebida1]
    this.imagen2 = this.rutaImagenes[this.bebida2]

  }

}
