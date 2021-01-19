import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data : Date = new Date();
  focus;
  focus1;

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor( private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    document.getElementsByTagName('nav')[0].style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    // navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    document.getElementsByTagName('nav')[0].style.display = 'block';
    document.getElementById('footer').style.display = 'block';
    // var navbar = document.getElementsByTagName('nav')[0];
    // navbar.classList.remove('navbar-transparent');
  }

  gotoLogin() {
    this.router.navigateByUrl("login")
  }

  gotoHome() {
    this.router.navigateByUrl("/")
  }
  
  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/');
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
