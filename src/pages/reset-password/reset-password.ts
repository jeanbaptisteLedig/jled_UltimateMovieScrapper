import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@IonicPage({
  name: 'reset-password'
})
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public resetPasswordForm: FormGroup;

  constructor(
      public navCtrl: NavController,
      public auth: AuthService,
      public formBuilder: FormBuilder,
      public alertCtrl: AlertController
  ) {
    this.resetPasswordForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

    resetPassword(){
        if (!this.resetPasswordForm.valid){
            console.log(this.resetPasswordForm.value);
        } else {
            this.auth.resetPassword(this.resetPasswordForm.value.email)
                .then((user) => {
                    let alert = this.alertCtrl.create({
                        message: "We sent you a reset link to your email",
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel',
                                handler: () => { this.navCtrl.pop(); }
                            }
                        ]
                    });
                    alert.present();

                }, (error) => {
                    var errorMessage: string = error.message;
                    let errorAlert = this.alertCtrl.create({
                        message: errorMessage,
                        buttons: [{ text: "Ok", role: 'cancel' }]
                    });
                    errorAlert.present();
                });
        }
    }
}