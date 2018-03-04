import { Component, OnInit } from '@angular/core';
import { RutaImagenes} from '../ruta-imagenes'

@Component({
  selector: 'app-tragos-equivalentes',
  templateUrl: './tragos-equivalentes.component.html',
  styleUrls: ['./tragos-equivalentes.component.css']
})
export class TragosEquivalentesComponent implements OnInit {

  rutaImagenes = RutaImagenes;

  constructor() { }

  ngOnInit() {
  }

}
