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


  login(method): void {

    this.authProvider.login(method, this.email.value, this.password.value).subscribe(data =>{
      //Successfully logged in user
      console.log(data);
      this.loading.dismiss();
      console.log('User is logged in.');
    }, error => {

      //error has occurred with login
      console.log(error);
      this.loading.dismiss();
      {alert(error.message)}
      this.error = error;
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      content: 'Logging in user',
      showBackdrop: false
    });
    this.loading.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}


