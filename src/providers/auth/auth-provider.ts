import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor(
    public afAuth: AngularFireAuth
  ){
    console.log('AuthProvider Constructor hit');
  }
  /*todo It should be possible to use a single observable in the login function, rather than a separately invoked observable for each method.
  */
  login(method: string, email?: string, password?: string) {

    if (method === 'facebook') {
      return Observable.create(observer => {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((authData) => {
          observer.next(authData);
        }).catch((error) => {
          observer.error(error);
        });
      });


    } else if (method === 'google') {
      return Observable.create(observer => {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((authData) => {
          observer.next(authData);
        }).catch((error) => {
          observer.error(error);
        });
      });


    } else if (method === 'twitter') {
      return Observable.create(observer => {
        this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then((authData) => {
          observer.next(authData);
        }).catch((error) => {
          observer.error(error);
        });
      });


    } else if (method === 'email') {
      return Observable.create(observer => {
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then((authData) => {
          observer.next(authData);
        }).catch((error) => {
          observer.error(error);
        });
      });

    } else if (method === 'anonymous'){
      return Observable.create(observer => {
        this.afAuth.auth.signInAnonymously()
          .then((authData) => {
            observer.next(authData);
          }).catch((error) => {
          observer.error(error);
        });
      });
    }
  };

  //email auth nor new user
  registerUser(email:string, password:string) {
    return Observable.create(observer => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,password).then ((authData) => {
        observer.next(authData);
      }, function(error){
        observer.error(error);
      });
    });
  };

  resetPassword(emailAddress:string) {
    return Observable.create(observer => {
      this.afAuth.auth.sendPasswordResetEmail(emailAddress).then (function(success) {
        observer.next(success);
      }, function(error){
        observer.error(error);
      });
    });
  };

  logout() {
    return this.afAuth.auth.signOut();
  };
}
