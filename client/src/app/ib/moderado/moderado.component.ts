import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moderado',
  templateUrl: './moderado.component.html',
  styleUrls: ['./moderado.component.css']
})
export class ModeradoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['ib/m/m1'])
  }

}
