/************************************************************************
 * Ionic-3 Firebase-3 Angular-4 Authentication Boilerplate
 * K.Brennan IDEwerks @6/2017
 * idewerks@gmail.com
 * @idewerks_kevin
 * http://blog.idewerks.com
 *
 ***********************************************************************/

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule }  from 'angularfire2/database';
import { AuthProvider} from '../providers/auth/auth-provider';
import { UserProvider} from '../providers/user/user-provider'
import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SignupPage} from '../pages/signup/signup';
import {LoginPage} from '../pages/login/login';
import {ResetPasswordPage} from '../pages/reset-password/reset-password';
import {ChatPage} from '../pages/chat/chat'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfileDataProvider } from '../providers/profile/profile-provider';
import { MessageProvider } from '../providers/message/message-provider';
import { MessageComponent } from '../components/message/message';
import {Keyboard } from '@ionic-native/keyboard';
export const firebaseConfig = {
  apiKey: "AIzaSyDKTk6VjHbMofnmH_oUOaAbU1hQxoxQSA0",
  authDomain: "jabberdawg.firebaseapp.com",
  databaseURL: "https://jabberdawg.firebaseio.com",
  storageBucket: "jabberdawg.appspot.com",
  messagingSenderId: "919173773458"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SignupPage,
    ChatPage,
    LoginPage,
    ResetPasswordPage,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SignupPage,
    ChatPage,
    LoginPage,
    ResetPasswordPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    ProfileDataProvider,
    MessageProvider,
    MessageComponent,
    Keyboard


  ]
})
export class AppModule {}
