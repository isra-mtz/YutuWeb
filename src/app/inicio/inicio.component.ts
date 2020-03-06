import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  isLogged: boolean;
  isSignIn: boolean;

  constructor(
    private auth_: AuthService,
  ) {
    this.isLogged = this.auth_.isLogged();
    this.isSignIn = this.auth_.isSignIn;
  }

  ngOnInit() {
    this.isLogged = this.auth_.isLogged();
    this.isSignIn = this.auth_.isSignIn;
    console.log('LOGGED DESDE INICIO: ' + this.isLogged);
    console.log('SIGNIN DESDE INICIO: ' + this.isSignIn);
  }

}
