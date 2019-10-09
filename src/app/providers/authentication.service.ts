import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) { }

  onLoginUser(data, successCallback, errorCallback) {
    this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password)
      .then(value => {
        successCallback()
      })
      .catch(err => {
        errorCallback(err)
      });
  }
  
}

