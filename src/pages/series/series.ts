import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiHttpProvider } from '../../providers/api-http/api-http';
/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  movies:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesPage');
  }

  getMovies(event) {
    this.apiHttp.getMovies(event.target.value,"series")
        .then(data => {
          this.movies = data['Search'];
          console.log(this.movies);
        });
  }
}
