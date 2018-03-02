import { Component, OnInit } from '@angular/core';
import { TragosService} from '../../tragos.service'
import { RutaImagenes} from '../ruta-imagenes'

@Component({
  selector: 'app-lamina-riesgo-moderado4-tragos-ocasion',
  templateUrl: './lamina-riesgo-moderado4-tragos-ocasion.component.html',
  styleUrls: ['./lamina-riesgo-moderado4-tragos-ocasion.component.css']
})
export class LaminaRiesgoModerado4TragosOcasionComponent implements OnInit {

  bebida1: string;
  // bebida2: string;
  rutaImagenes = RutaImagenes;
  imagen1: Array<string>;
  // imagen2: string;
  // tragosEquivalentes = TragosEquivalentes;

  constructor(private tragosService: TragosService) { }

  ngOnInit() {

    let ordenBebidas = this.tragosService.equivalentesPorTipoBebida()
    this.bebida1 = ordenBebidas[0].bebida
    this.imagen1 = []

    // console.log(this.bebida1)
    // console.log(this.tragosEquivalentes)
    // console.log(this.tragosEquivalentes[this.bebida1])

    // this.bebida2 = ordenBebidas[1].bebida

    this.imagen1.push(this.rutaImagenes[this.bebida1])
    this.imagen1.push(this.rutaImagenes[this.bebida1])
    this.imagen1.push(this.rutaImagenes[this.bebida1])
    this.imagen1.push(this.rutaImagenes[this.bebida1])

    // this.imagen1 = this.rutaImagenes[this.bebida1]
    // this.imagen2 = this.rutaImagenes[this.bebida2]


  }

}
