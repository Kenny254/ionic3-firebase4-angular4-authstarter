import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth-provider';
//import {Observable} from "rxjs/Observable";
import {UserProvider} from '../../providers/user/user-provider';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public myUser: any;
  public user: any;
  constructor(public authProvider: AuthProvider,
              public userProvider: UserProvider,
              public nav: NavController) {

    //myUser is an observable
    this.myUser = this.userProvider.getUserObject(); //null if not logged in
    console.log('just got getCurrentUser');
    this.myUser.subscribe(user => {
      // console.log(user);
      this.user = user;
    });

  }

  logoutFromAbout(): void {
    this.authProvider.logout();
    console.log('logged out!');
  }

  ngOnInit(){
    // this is an Angular method which will fire when Angular is ready
    //console.log('ngOnInit - Home Page');
  }

  ngOnDestroy(){
    // this is an Angular met   hod which will fire when you navigate away from this page
  }

  ionViewDidLoad(){
    // this is an Ionic method that will fire ONCE after the page is loaded the first time
    // No guarantee this will fire, if its cached it will use that.
    console.log('ionViewDidLoad - Home Page');
    // this is the magic code :D
  }

  ionViewWillEnter(){
    // this is an Ionic method that will fire each time BEFORE the page is loaded

  }

  ionViewWillLeave(){
    // this is an Ionic method that will fire each time BEFORE the user leaves the page
    //console.log('ionViewWillLeave - Home Page');
    //this.myUser.unsubscribe();
  }

  ionViewDidUnload(){
    // this is an Ionic method that will fire each time AFTER the user leaves the page
  }
}




