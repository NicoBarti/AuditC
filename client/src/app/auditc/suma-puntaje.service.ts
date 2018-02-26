import { Injectable } from '@angular/core';
import { Puntajes } from '../puntajes';
import { Router } from '@angular/router';

@Injectable()
export class SumaPuntajeService {

  private p1: number;
  private p2: number;
  private p3: number;
  private auditC_puntaje: number;

  constructor( private router: Router ) { }

  setP1(p:number) {
    this.p1 = Number(p)
  }

  setP2(p:number) {
    this.p2 = Number(p)
  }

  setP3(p:number) {
    this.p3 = Number(p);
    this.set_auditC_puntaje()
  }

  set_auditC_puntaje() {
    if(this.p1===undefined || this.p2===undefined || this.p3===undefined)
    {this.router.navigate(['auditc/p1'])}
    else { this.auditC_puntaje = Number(this.p1 + this.p2 + this.p3)};
    console.log(this.auditC_puntaje);
    this.navegaRiesgo()
  }

  navegaRiesgo() {
    if(this.auditC_puntaje > 4)
      {
        this.router.navigate(['ib/m'])}
    else
      {
        this.router.navigate(['ib/b'])
    }
  }


}
