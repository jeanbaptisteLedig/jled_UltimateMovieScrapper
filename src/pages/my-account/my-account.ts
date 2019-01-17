import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  isOnline: Boolean = false;
  userEmail: String = '';
  userName: String = '';
  userPicture: any;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.UserIsOnline();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
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

}
