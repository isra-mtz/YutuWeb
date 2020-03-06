import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    isLogged: boolean;
    isSignIn: boolean;

    constructor( 
        private renderer: Renderer,
        private router: Router, @Inject(DOCUMENT,)
        private document: any,
        private element: ElementRef,
        public location: Location,
        private auth_: AuthService
    ) {
        this.isLogged = this.auth_.isLogged();
        this.isSignIn = this.auth_.isSignIn;
        console.log('IS LOGGED ?: ' + this.isLogged);
        console.log('IS SIGNIN ?: ' + this.isSignIn);
    }

    ngOnInit() {
        this.isSignIn = this.auth_.isSignIn;
    }
}
