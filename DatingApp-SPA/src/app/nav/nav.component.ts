import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertiftyService } from '../_services/alertifty.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any  = {};

  constructor( public  authService: AuthService, private alertify: AlertiftyService ) { }

  ngOnInit() {
  }

  login()  {
    this.authService.login(this.model).subscribe(next => {
      // console.log('logged in Successfully');
      this.alertify.success('logged in Successfully')
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      // console.log(error);
      this.alertify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
    // const token = localStorage.getItem('token');
    // return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    // console.log('logged out');
  }
}
