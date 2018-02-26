import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: '<router-outlet></router-outlet>'
  // selector: 'app-ib',
  // templateUrl: './ib.component.html',
  // styleUrls: ['./ib.component.css']
})
export class IbComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

}
