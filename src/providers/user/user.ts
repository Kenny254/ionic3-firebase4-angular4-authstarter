
import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {


  constructor(
    public afAuth: AngularFireAuth
  ){
    console.log('AuthProvider Constructor hit');
  }

  getCurrentUser() {

    console.log('getting current user');
    //return this.afAuth.auth.currentUser
    return this.afAuth.authState

  };


  getUserObject() {



    //get an auth instance and map the userObject
    // This will be used as a homogenous user object that can be then used for
    // passing around components or writing to firebase db/storage.
    //we will need to provide an observable here for that



    console.log('getting current user object');

    let authMap = this.afAuth.authState.map((response)=> {
      //console.log('response', response);

      if(response){ // If there is a user logged in
        //console.log(response);
        let userObject, providerData;

        if(response.providerData){ providerData = response.providerData[0]; }

        let email = providerData.email || response.email;

        let photoUrl = providerData.photoURL || response.photoURL;

        if(!photoUrl){
          photoUrl = this.getAvatar(email);

        }

        userObject = {
          'email': providerData.email || response.email,
          'displayName': providerData.displayName || response.displayName,
          'uid': response.uid || providerData.uid,
          'avatar': providerData.photoURL || response.photoURL,
          'providerId': providerData.providerId || response.providerId,
          'emailVerified': response.emailVerified,
          'isAnonymous': response.isAnonymous,
          'refreshToken': response.refreshToken
        };

        //console.log('photoUrl:',userObject.photoURL);
        return userObject;
      } else { // if there is no logged in user, return null.
        return null;
      }
    });

    return authMap;
    //   return this.afAuth.authState;

  };

  getAvatar(email){
    // put get gravatar logic in here
    let photoURL = "https://www.gravatar.com/avatar/" + Md5.hashStr(email);

    return photoURL;
  }



}
