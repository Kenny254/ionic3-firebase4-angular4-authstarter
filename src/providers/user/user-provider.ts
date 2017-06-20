/************************************************************************
 * Ionic-3 Firebase-3 Angular-4 Authentication Boilerplate
 * K.Brennan IDEwerks @6/2017
 * idewerks@gmail.com
 * @idewerks_kevin
 * http://blog.idewerks.com
 *
 ***********************************************************************/

import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class UserProvider {
  constructor(
    public afAuth: AngularFireAuth
  ){
  }
  getCurrentUser() {
    console.log('getting current user');
    return this.afAuth.authState
  };

  getUserObject() {
    //return an observable of formatted user state
    // This will be used as a homogenous user object that can be then used for
    // passing around components or writing to firebase db/storage.
    //we will need to provide an observable here for that

    let authMap = this.afAuth.authState.map((response)=> {
      if(response){ // If there is a user logged in
        let userObject, providerData;

        if(response.providerData){ providerData = response.providerData[0]; }
        let email = providerData.email || response.email;

        //Lets cherry pick the user information, and create a new user object with that info.
        userObject = {
          'email': providerData.email || response.email,
          'displayName': providerData.displayName || response.displayName,
          'uid': response.uid || providerData.uid,
          'avatar': providerData.photoURL || response.photoURL || this.getAvatar(email),
          'providerId': providerData.providerId || response.providerId,
          'emailVerified': response.emailVerified,
          'isAnonymous': response.isAnonymous,
          'refreshToken': response.refreshToken
        };
        return userObject;
      } else { // if there is no logged in user, return null.
        return null;
      }
    });
    return authMap;
  };

  getAvatar(email){
    // put get gravatar logic in here
    let photoURL = "https://www.gravatar.com/avatar/" + Md5.hashStr(email);
    return photoURL;
  }
}
