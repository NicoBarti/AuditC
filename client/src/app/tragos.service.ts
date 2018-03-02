import { Injectable } from '@angular/core';
import { Bebidas } from './bebidas'
import { AlmacenaConsumoService} from './almacena-consumo.service'

@Injectable()
export class TragosService {

  constructor( private almacenaConsumoService: AlmacenaConsumoService) {}

  convertir(data: Bebidas): number {
        let tragos_estandar:number = (data.cerveza *1) + (data.vino *1) + (data.destilado *1)
                  + (data.shop_grande *3) + (data.vaso_vino * 2) + (data.combinado_simple *1)
                  + (data.combinado_fuerte *2) + (data.shop_pequeno * 1.5) + (data.botella_cerveza * 3)
                  + (data.botella_vino * 6) + (data.caja_vino * 8) + (data.botella_licor * 17);

                  console.log("=" + tragos_estandar + "tragos")

        let puntaje: number
      // Convierte tragos a puntaje
                    if (tragos_estandar < 3)
                        {puntaje = 0}
                    else if (tragos_estandar < 5)
                        {puntaje = 1}
                    else if (tragos_estandar < 7)
                        {puntaje = 2}
                    else if (tragos_estandar < 10)
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



}
