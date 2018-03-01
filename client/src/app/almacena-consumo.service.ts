import { Injectable, Input } from '@angular/core';
import { Bebidas } from './bebidas'
import { PerfilConsumo } from './perfil-consumo'

@Injectable()
export class AlmacenaConsumoService {

  perfilConsumo : PerfilConsumo = {
    bebidas: {
      cerveza: null,
      vino: null,
      destilado: null,
      shop_grande: null,
      vaso_vino: null,
      combinado_simple: null,
      combinado_fuerte: null,
      shop_pequeno: null,
      botella_cerveza: null,
      botella_vino: null,
      caja_vino: null,
      botella_licor: null
    },
    p1:null,
    p2:null,
    p3:null
  }


  constructor() { }

  setP1(data: number): void {
    this.perfilConsumo.p1 = data
  };

  getP1(): number{
    return this.perfilConsumo.p1
  };

  setP2(data: number): void {
    this.perfilConsumo.p2 = data
  };

  getP2(): number{
    return this.perfilConsumo.p2
  };

  setP3(data: number): void {
    this.perfilConsumo.p3 = data
  };

  getP3(): number{
    return this.perfilConsumo.p3
  };

  setBebidas(data: Bebidas):void{
    this.perfilConsumo.bebidas = data
  };

  getAuditc(): number{
    let data = this.perfilConsumo.p1 + this.perfilConsumo.p2 + this.perfilConsumo.p3
    return data
  }

  getBebidas(): Bebidas{
    return this.perfilConsumo.bebidas
  };

  getPerfilConsumo(): PerfilConsumo {
    return this.perfilConsumo
  }

}
