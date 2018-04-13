import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // template: '<router-outlet></router-outlet>'
  selector: 'app-bajo',
  templateUrl: './bajo.component.html',
  styleUrls: ['./bajo.component.css']
})
export class BajoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['ib/b/b1'])
  }

}
