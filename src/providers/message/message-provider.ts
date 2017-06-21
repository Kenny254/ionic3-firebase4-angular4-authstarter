
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth-provider';
import {UserProvider} from '../../providers/user/user-provider';
/*
  Generated class for the MessageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public afDatabase: AngularFireDatabase, public authProvider: AuthProvider, public userProvider: UserProvider, public afAuth: AngularFireAuth) {
    console.log('Hello MessageProvider Provider');
  }

}
