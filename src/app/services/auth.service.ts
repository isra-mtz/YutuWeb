import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyB3aEtl3YqspkiTP1AWbrjckP-efFx9JMk';

  userToken: string;
  isSignIn = false;

  // Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // Iniciar sesión
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.leerToken();
  }

  logout() {
    this.isSignIn = false;
    localStorage.removeItem('token');
    console.log('SESION TERMINADA...');
    this.router.navigateByUrl('/login');
  }

  login( usuario: UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        console.log('Entró en el mapa del RXJS')
        this.guardarToken( resp['idToken']);
        this.isSignIn = true;
        return resp;
      }),
    );
  }

  nuevoUsuario( usuario: UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }signUp?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        console.log('Entró en el mapa del RXJS')
        this.guardarToken( resp['idToken']);
        return resp;
      }),
    );
  }

  private guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    this.isSignIn = true;
  }

  leerToken() {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
      this.isSignIn = true;
    } else {
      this.userToken = '';
      this.isSignIn = false;
    }
    return this.userToken;
  }

  isLogged(): boolean {
    // if ( this.userToken.length > 2 ) {
    //   this.isSignIn = true;
    // } else {
    //   this.isSignIn = false;
    // }
    // console.log('VALOR DE LOGGEO: ' + this.isSignIn);
    // return this.isSignIn;
    return this.userToken.length > 2;
  }

}
