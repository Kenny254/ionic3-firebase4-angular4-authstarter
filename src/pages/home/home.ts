import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth-provider';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myUser: any;
  public user: any;


  constructor(
    public authProvider: AuthProvider,
    private nav: NavController,
    //public navParams: NavParams
    )
  {



  }

  logoutFromHome(): void {

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

  }

  ionViewWillEnter(){
  // this is an Ionic method that will fire each time BEFORE the page is loaded

    console.log('ionViewDidLoad - Home Page');
    // this is the magic code :D

    //myUser is an observable
    this.myUser = this.authProvider.getCurrentUser(); //null if not logged in

    //this.myUser.subscribe(user => {
     // console.log(user);
      this.user = this.myUser;
    //});

  }

  ionViewWillLeave(){
    // this is an Ionic method that will fire each time BEFORE the user leaves the page
    console.log('ionViewWillLeave - Home Page');
    //this.myUser.unsubscribe();
  }

  ionViewDidUnload(){
    // this is an Ionic method that will fire each time AFTER the user leaves the page
  }



}
