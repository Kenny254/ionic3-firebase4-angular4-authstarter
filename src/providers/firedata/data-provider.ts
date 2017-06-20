/************************************************************************
 * Ionic-3 Firebase-3 Angular-4 Authentication Boilerplate
 * K.Brennan IDEwerks @6/2017
 * idewerks@gmail.com
 * @idewerks_kevin
 * http://blog.idewerks.com
 *
 ***********************************************************************/

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth-provider';
import {UserProvider} from '../../providers/user/user-provider';

@Injectable()
export class FiredataProvider {
  public user: any;

  constructor(public afDatabase: AngularFireDatabase, public authProvider: AuthProvider, public userProvider: UserProvider, public afAuth: AngularFireAuth) {
    console.log('Hello FiredataProvider Provider')
  }

  writeUserToDatabase(): any {
    //need a ref to the formatted user object here

    this.user = this.userProvider.getUserObject();//get an observable for the user object
    this.user.subscribe((user) => {
      if (user) {
        //valid formatted user object here
        /*todo Add a more elegant way to write the user object  */
        this.afDatabase.object(`userProfile/${user.uid}`).update({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          avatar: user.avatar,
          providerId: user.providerId,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          refreshToken: user.refreshToken
        });
      } else {
      }
    });
  };
}
