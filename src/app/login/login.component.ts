import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  usuario: UsuarioModel;
  isLogged = false;
  isSignIn = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.isLogged = this.auth.isLogged();
    this.isSignIn = this.auth.isSignIn;
    if (this.isSignIn) {
      this.router.navigateByUrl('/inicio');
    }
  }

  ngOnInit() {
    this.usuario = new UsuarioModel;
    this.isLogged = this.auth.isLogged();
  }

  login( form: NgForm ) {
    if ( form.invalid ) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...',
    });
    Swal.showLoading();
    // console.log('Imprimir si el formulario es válido');
    // console.log(form);
    // console.log(this.usuario);
    this.auth.login( this.usuario )
        .subscribe( resp => {
          console.log(resp);
          Swal.close();
          this.router.navigateByUrl('/inicio');
        }, (err) => {
          console.log(err.error.error.message);
          Swal.fire({
            allowOutsideClick: true,
            title: 'Error al autenticar',
            icon: 'error',
            text: err.error.error.message,
          });
        });
  }

}
