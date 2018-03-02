import { Injectable } from '@angular/core';
import { Bebidas } from './bebidas'
import { AlmacenaConsumoService} from './almacena-consumo.service'
import { TragosEquivalentes} from './tragos-equivalentes'

@Injectable()
export class TragosService {

  tragosEquivalentes = TragosEquivalentes

  constructor( private almacenaConsumoService: AlmacenaConsumoService) {}

  convertir(data: Bebidas): number {
    let tragos= 0;
      for(var bebida in data){tragos = (tragos + (data[bebida] * this.tragosEquivalentes[bebida]))}
      console.log('calculo tragos con array' + tragos)

        let puntaje: number
      // Convierte tragos a puntaje
                    if (tragos < 3)
                        {puntaje = 0}
                    else if (tragos < 5)
                        {puntaje = 1}
                    else if (tragos < 7)
                        {puntaje = 2}
                    else if (tragos < 10)
                        {puntaje = 3}
                    else
                        {puntaje = 4}

                  console.log("puntaje =" + puntaje)

        return puntaje
   }

 bebidasPreferidas(): Array<any> {

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

   return orden.sort(function(a,b) {return b.cantidad - a.cantidad})

 }

equivalentesPorBebida(): Array<any> {

  let data = this.almacenaConsumoService.getBebidas()
  let equivalentesPorBebida = [];
  for(var bebida in data) {
        equivalentesPorBebida.push({
          'bebida': bebida,
          'equivalentes': (data[bebida] * this.tragosEquivalentes[bebida])
        });
      }
  return equivalentesPorBebida
}


equivalentesPorTipoBebida() {

  let data = this.equivalentesPorBebida();
  let porTipo = []

    let cerveza = 0
    let indexCerveza = []
      indexCerveza.push(data.findIndex(function(bebida){return bebida.bebida == 'cerveza'}))
      indexCerveza.push(data.findIndex(function(bebida){return bebida.bebida == 'shop_grande'}))
      indexCerveza.push(data.findIndex(function(bebida){return bebida.bebida == 'shop_pequeno'}))
      indexCerveza.push(data.findIndex(function(bebida){return bebida.bebida == 'botella_cerveza'}))
      for(var i in indexCerveza){cerveza = (cerveza + data[indexCerveza[i]].equivalentes)}

      porTipo.push({
        'bebida': 'cerveza',
        'equivalentes': cerveza
      })

    let vino = 0
    let indexVino = []
      indexVino.push(data.findIndex(function(bebida){return bebida.bebida == 'vino'}))
      indexVino.push(data.findIndex(function(bebida){return bebida.bebida == 'vaso_vino'}))
      indexVino.push(data.findIndex(function(bebida){return bebida.bebida == 'botella_vino'}))
      indexVino.push(data.findIndex(function(bebida){return bebida.bebida == 'caja_vino'}))
      for(var i in indexVino){vino = (vino + data[indexVino[i]].equivalentes)}

      porTipo.push({
        'bebida': 'vino',
        'equivalentes': vino
      })

    let destilado = 0
    let indexDestilado = []
      indexDestilado.push(data.findIndex(function(bebida){return bebida.bebida == 'destilado'}))
      indexDestilado.push(data.findIndex(function(bebida){return bebida.bebida == 'combinado_simple'}))
      indexDestilado.push(data.findIndex(function(bebida){return bebida.bebida == 'combinado_fuerte'}))
      indexDestilado.push(data.findIndex(function(bebida){return bebida.bebida == 'botella_licor'}))
      for(var i in indexDestilado){destilado = (destilado + data[indexDestilado[i]].equivalentes)}

      porTipo.push({
        'bebida': 'destilado',
        'equivalentes': destilado
      })

      return porTipo.sort(function(a,b) {return b.equivalentes - a.equivalentes})

  };




}
