import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-auditc',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./auditc.component.css'],
  providers: []
})

export class AuditcComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    this.router.navigate(['auditc/infoinicio'])
  }

}
