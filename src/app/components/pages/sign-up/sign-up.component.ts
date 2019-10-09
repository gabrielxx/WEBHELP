import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../providers/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent {

  public formRegisterUser = new FormGroup({
    displayName: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })
  constructor(public _AuthService: AuthenticationService, private router: Router, private toastr: ToastrService) { }

  onRegisterUser() {

    let data = this.formRegisterUser.value;
    this._AuthService.onSaveUser(data,
      () => {
        this.toastr.success('Usuario registrado exitosamente.', 'Registro de Usuario');
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.message, 'Error');
      }
    )
    }
}
