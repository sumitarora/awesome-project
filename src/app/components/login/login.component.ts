import { Router } from '@angular/router';
import { LoginService } from '../../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginError: Boolean = false;

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit() { }

  login(email: string, password: string): void {
    this.loginError = false;
    this._loginService
      .login(email, password)
      .then((response) => {
        this._router.navigateByUrl('/appointements');
      }).catch((error) => {
        this.loginError = true;
      });
  }

}
