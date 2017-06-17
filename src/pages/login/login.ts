/************************************************************************
 * Ionic-3 Firebase-3 Angular-4 Authentication Boilerplate
 * K.Brennan IDEwerks @6/2017
 * idewerks@gmail.com
 * @idewerks_kevin
 * http://blog.idewerks.com
 *
 ***********************************************************************/

import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth-provider';
import { ResetPasswordPage } from '../reset-password/reset-password';
import {SignupPage} from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  error: any;
  signupPage = SignupPage;
  resetPasswordPage = ResetPasswordPage; //Added reset password page
  public loading:Loading;

  constructor(
    public nav: NavController,
    public authProvider: AuthProvider,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController
  ){
    this.loginForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  };

  login(method){
    //subscribe to the observable produced by the login mmethod, and capture the result
    //that is emitted
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      content: 'Logging into Data Service...',
      showBackdrop: false

    });
    this.loading.present();
    this.authProvider.login(method, this.email.value, this.password.value).subscribe(data =>{
      //this fires once observable completes
      console.log('login observer fired on data:');
      console.log(data);
      this.loading.dismiss();
    }, error=>{
      console.log(error);
      if (error.code == 'auth/user-not-found') {
        alert('User not found');
        this.loading.dismiss();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}


