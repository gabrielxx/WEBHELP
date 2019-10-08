import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../providers/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  // providers: [usersService]
})
export class LoginComponent {
  public formLoginUser = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })
  constructor(public _AuthService: AuthenticationService, private router: Router
    // , private toastr: ToastrService
    ) { }

  onLogin() {

    let data = this.formLoginUser.value;
    // this._AuthService.onLoginUser(data,
    //   () => {
    //     this.router.navigate(['/admin']);
    //   },
    //   (err) => {
    //     this.toastr.error(err.message, 'Error');
    //   }
    // )

  }
}