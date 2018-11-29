import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiHttpProvider } from '../../providers/api-http/api-http';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  movies:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

  getMovies(event) {
    this.apiHttp.getMovies(event.target.value,"movie")
        .then(data => {
          this.movies = data['Search'];
          console.log(this.movies);
        });
  }
}
