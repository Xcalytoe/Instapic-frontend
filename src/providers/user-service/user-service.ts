import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firebase } from '@firebase/app';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
public data: any;
public fireAuth: any;
public userProfile: any;
  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('user')
  }
  loginUser(email : string ,password: string ): any{
  return this.fireAuth.signInWithEmailAndPassword(email, password)
  // .catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
    // });
  }
}
