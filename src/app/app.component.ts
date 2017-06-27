/************************************************************************
 * Ionic-3 Firebase-3 Angular-4 Authentication Boilerplate
 * K.Brennan IDEwerks @6/2017
 * idewerks@gmail.com
 * @idewerks_kevin
 * http://blog.idewerks.com
 *
 ***********************************************************************/

import { Component, ViewChild } from '@angular/core';
import {Platform, Nav, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth} from "angularfire2/auth";
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage} from '../pages/chat/chat'
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { MessageComponent } from '../components/message/message';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  user: Observable<firebase.User>;

  constructor(
    public platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    public afAuth: AngularFireAuth


    ) {
    this.user = afAuth.authState;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //Check if user is authenticated
    /* authState is a property that returns an observable.
     We'll subscribe to it so we are notified whenever the authState has changed.
     */
//this.user = afAuth.authState;
     this.user.subscribe((user) => {
      if (user) {
        console.log('Logged in user from app.component:', user);

        this.nav.setRoot(TabsPage); //pass authState to homepage & nav there
        //authObserver.unsubscribe();
      } else {

        this.nav.setRoot(LoginPage);
        //authObserver.unsubscribe();
      }
    });

  }
}
