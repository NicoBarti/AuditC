import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-infoinicio',
  templateUrl: './infoinicio.component.html',
  styleUrls: ['./infoinicio.component.css']
})
export class InfoinicioComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

login() {
  this.authService.login()
}

}
