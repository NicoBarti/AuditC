import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '__AUTH0_CLIENT_ID__',
    domain: '__AUTH0_NAMESPACE__',
    responseType: 'token id_token',
    audience: 'https://__AUTH0_NAMESPACE__/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}
