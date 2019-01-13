import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ExportPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-export-popover',
  templateUrl: 'export-popover.html',
})
export class ExportPopoverPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController) {
    }

    close(format: string) {
    if (this.navParams.data.hasOwnProperty('download') && format) {
      this.navParams.get('download')(format);
    }
    this.viewCtrl.dismiss();
    }

}
