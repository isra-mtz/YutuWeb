import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    focus2;
    focus3;
    focus4;
    focus5;

    isLogged: boolean;
    isSignIn: boolean;
    usuario: UsuarioModel;

    constructor(
        private auth: AuthService,
        private router: Router
    ) {
        this.isLogged = this.auth.isLogged();
        this.isSignIn = this.auth.isSignIn;
    }

    ngOnInit() {
        this.usuario = new UsuarioModel();
        // this.usuario.email = 'isramtz@yahoo.coms';
        this.isLogged = this.auth.isLogged();
        this.isSignIn = this.auth.isSignIn;
    }

    onSubmit( form: NgForm ) {
        if ( form.invalid ) {
            return;
        }
        Swal.fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Espere por favor...',
        });
        Swal.showLoading();
        // console.log('Formulario enviado...');
        // console.log(this.usuario);
        // console.log(form);
        this.auth.nuevoUsuario( this.usuario )
            .subscribe( resp => {
                console.log(resp);
                Swal.close();
                this.router.navigateByUrl('/login');
            }, (err) => {
                console.log(err.error.error.message);
                Swal.fire({
                    allowOutsideClick: true,
                    title: 'Error al crear nueva cuenta de usuario',
                    icon: 'error',
                    text: err.error.error.message,
                });
            });
    }

}
