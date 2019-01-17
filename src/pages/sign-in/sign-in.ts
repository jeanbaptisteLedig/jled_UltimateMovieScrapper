import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage, NavController, NavParams, ToastController, PopoverController, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';
import firebase from 'firebase';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { MyAccountPage } from '../my-account/my-account';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  user_status: String = 'signin';
  signinForm: FormGroup;
  loginError: string;
  signupError: string;
  isOnline: Boolean = false;
  userEmail: String = '';
  userName: String = '';
  userPicture: any;
  user: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthService,
              private fb: FormBuilder,
              public platform: Platform,
              public popoverCtrl: PopoverController,
              public toast: ToastController) {
    this.signinForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required,
        Validators.minLength(6)])]
    });
    this.UserIsOnline();
  }

  login() {
    let data = this.signinForm.value;
    if (!data.email) {
      return;
    }
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
        .then(
            () => this.navCtrl.setRoot(MyAccountPage),
            error => this.loginError = error.message
        );
  }

  logout() {
    this.auth.signOut()
        .then(
            () => this.navCtrl.setRoot(HomePage),
            error => console.log(error.message)
        );
  }

  UserIsOnline() {
    if (firebase.auth().currentUser != null) {
      this.isOnline = true;
      this.user = firebase.auth().currentUser;
      this.userName = this.user.displayName;
      this.userEmail = this.user.email;
      this.userPicture = this.user.photoURL;
    } else {
      this.isOnline = false
    }
  }

  goToResetPassword(): void {
    this.navCtrl.push(ResetPasswordPage);
  }
}