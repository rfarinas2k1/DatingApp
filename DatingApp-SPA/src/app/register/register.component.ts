import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertiftyService } from '../_services/alertifty.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelResister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertiftyService) {


  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {

      this.alertify.success('registration successful');
      // console.log('registration successful');

      // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertify.error(error);
      // console.log(error);
    });

    console.log(this.model);
  }

  cancel() {
    this.cancelResister.emit(false);
  }
}
