import { Injectable } from '@angular/core';

@Injectable()
export class ConvertirTragosService {

  constructor() { }

tragos_estandar: number;
puntaje_p2: number;

convertir(cerveza: number, vino: number, destilado:number) {
  this.tragos_estandar = (cerveza *1) + (vino *1) + (destilado *1);

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

  console.log(this.puntaje_p2)

  return this.tragos_estandar
}

}
