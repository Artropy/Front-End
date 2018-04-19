import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


 private checkLoginState() {
    FB.getLoginStatus(function(response) {
      console.log(response);
      if (response.status === 'connected') {
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token 
        // and signed request each expire
        let uid = response.authResponse.userID;
        let accessToken = response.authResponse.accessToken;
      } else if (response.status === 'not_authorized') {
        // the user must go through the login flow
        // to authorize your app or renew authorization
        this.facebookLogin();
      } else {
        // the user isn't logged in to Facebook.
      }
    });
  };


  function facebookLogin() {
    FB.login(function(response) {
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
         console.log('Good to see you, ' + response.name + '.');
       });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
  };



}
