import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelResister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) {


  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {

      console.log('registration successful');

      // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      console.log(error);
    });

    console.log(this.model);
  }

  cancel() {
    this.cancelResister.emit(false);
    console.log('cancelled');
  }
}
