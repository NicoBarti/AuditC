import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlmacenaConsumoService } from '../almacena-consumo.service'

@Component({
  template: '<router-outlet></router-outlet>'
  // selector: 'app-ib',
  // templateUrl: './ib.component.html',
  // styleUrls: ['./ib.component.css']
})
export class IbComponent implements OnInit {

  constructor( private router: Router,
              private almacenaConsumoService: AlmacenaConsumoService) { }

  ngOnInit() {

    // if (this.almacenaConsumoService.getP1() === null){this.router.navigate(['auditc/p1']);}

    let AuditC = this.almacenaConsumoService.getAuditc();

    if( AuditC > 4){this.router.navigate(['ib/m']);}
    else { this.router.navigate(['ib/b']); }

  }

}
