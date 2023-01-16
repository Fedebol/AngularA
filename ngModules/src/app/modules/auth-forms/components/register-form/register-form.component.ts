import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit{

  registerForm: FormGroup | undefined;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService){}

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      name: '',
      surname: '',
      email: '',
      password: ''
    });
  }

  submitForm = () => {
    this._authService.register();
  }

}
