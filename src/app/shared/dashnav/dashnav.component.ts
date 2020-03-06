import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashnav',
  templateUrl: './dashnav.component.html',
  styleUrls: ['./dashnav.component.css']
})
export class DashnavComponent implements OnInit {

  constructor(
    private auth_: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salir() {
    this.auth_.logout();
    this.router.navigateByUrl('/login');
  }

}
