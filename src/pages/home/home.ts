import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myUser: any;
  user: any;
  //email: any;
  //password: any;
  //providerId: any;
  //photoURL: string;
  //uid: any;

  constructor(
    public authProvider: AuthProvider,
    private nav: NavController,
    //public navParams: NavParams
    )
  {
    //this.userInfo = this.navParams.data;  //this comes fromm app.component
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
    console.log('ionViewDidLoad - Home Page');
    // this is the magic code :D
    this.myUser = this.authProvider.getCurrentUser();
    this.myUser.subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

  ionViewWillEnter(){
  // this is an Ionic method that will fire each time BEFORE the page is loaded

  }

  ionViewWillLeave(){
    // this is an Ionic method that will fire each time BEFORE the user leaves the page
    console.log('ionViewWillLeave - Home Page');
    this.myUser.unsubscribe;
  }

  ionViewDidUnload(){
    // this is an Ionic method that will fire each time AFTER the user leaves the page
  }



}
