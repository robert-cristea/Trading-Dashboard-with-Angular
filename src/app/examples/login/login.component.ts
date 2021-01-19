import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

    data: Date = new Date();
    focus;
    focus1;

    public form = {
        email: null,
        password: null
    };

    public error = null;

    constructor(private router: Router, private Jarwis: JarwisService,
        private Token: TokenService,
        private Auth: AuthService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        document.getElementsByTagName('nav')[0].style.display = 'none';
        document.getElementById('footer').style.display = 'none';
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        document.getElementsByTagName('nav')[0].style.display = 'block';
        document.getElementById('footer').style.display = 'block';
    }

    gotoRegister() {
        this.router.navigateByUrl("register")
    }

    gotoHome() {
        this.router.navigateByUrl("/")
    }

    onSubmit() {
        this.Jarwis.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.Token.handle(data.access_token);
        this.Auth.changeAuthStatus(true);
        this.router.navigateByUrl('/');
    }

    handleError(error) {
        this.error = error.error.error;
    }
}
