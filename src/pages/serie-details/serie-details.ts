import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiHttpProvider } from '../../providers/api-http/api-http';

/**
 * Generated class for the SerieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serie-details',
  templateUrl: 'serie-details.html',
})
export class SerieDetailsPage {

  movie:any;
  id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider) {
    let movie = this.navParams.get('movie');
    this.movie = movie;
    this.id = movie.imdbID;
    this.getMovie(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SerieDetailsPage');
  }

  getMovie(id) {
    this.apiHttp.getMovie(id)
        .then(data => {
          this.movie = data;
          console.log(this.movie);
        });
  }
}
