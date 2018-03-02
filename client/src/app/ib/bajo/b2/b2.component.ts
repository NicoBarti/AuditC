import { Component, OnInit } from '@angular/core';
import { AlmacenaConsumoService } from '../../../almacena-consumo.service'
import { LaminaBajoRiesgo2TragosOcasionComponent } from '../../../laminas/lamina-bajo-riesgo2-tragos-ocasion/lamina-bajo-riesgo2-tragos-ocasion.component';


@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.css']
})
export class B2Component implements OnInit {

  constructor( private almacenaConsumoService: AlmacenaConsumoService) {}

  ngOnInit() {
  }

}
