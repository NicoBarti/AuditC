import { Component, OnInit } from '@angular/core';
import { AlmacenaConsumoService } from '../../../almacena-consumo.service'

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.css']
})
export class B2Component implements OnInit {

  constructor( private almacenaConsumoService: AlmacenaConsumoService) {}

  ngOnInit() {
    console.log(this.almacenaConsumoService.getBebidas())
  }

}
