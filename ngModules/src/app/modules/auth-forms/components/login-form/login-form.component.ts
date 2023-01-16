import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm: FormGroup | undefined;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService){

  }

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
      username: '',
      email: ''
    });

  }
  submitForm = () => {
    this._authService.login();
  }
}
