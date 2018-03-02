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
    let bebidas = this.almacenaConsumoService.getBebidas()
    let orden = []

    for(var bebida in bebidas) {
      if (bebidas.hasOwnProperty(bebida)) {
        orden.push({
          'bebida': bebida,
          'cantidad': bebidas[bebida]
        });
      }
    }

    console.log(orden.sort(function(a,b) {return b.cantidad - a.cantidad}))

  }

}
