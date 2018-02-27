import { Injectable } from '@angular/core';

@Injectable()
export class ConvertirTragosService {

  constructor() { }

tragos_estandar: number;
puntaje_p2: number;

convertir(cerveza: number, vino: number, destilado:number,
          shop_grande: number, vaso_vino: number, combinado_simple: number,
          combinado_fuerte: number, shop_pequeno: number, botella_cerveza:number,
          botella_vino: number, caja_vino: number, botella_licor: number) {

            //1.-Calcula tragos a puntaje
  this.tragos_estandar = (cerveza *1) + (vino *1) + (destilado *1)
                          + (shop_grande *3) + (vaso_vino *2) + (combinado_simple *1)
                          + (combinado_fuerte *2) + (shop_pequeno * 1.5) + (botella_cerveza * 3)
                          + (botella_vino * 6) + (caja_vino * 8) + (botella_licor * 17);

// 2.- Clasifica puntaje riesgo
  if (this.tragos_estandar < 3)
      {this.puntaje_p2 = 0}
  else if (this.tragos_estandar < 5)
      {this.puntaje_p2 = 1}
  else if (this.tragos_estandar < 7)
      {this.puntaje_p2 = 2}
  else if (this.tragos_estandar < 10)
      {this.puntaje_p2 = 3}
  else
      {this.puntaje_p2 = 4}

  return this.puntaje_p2
}

}
