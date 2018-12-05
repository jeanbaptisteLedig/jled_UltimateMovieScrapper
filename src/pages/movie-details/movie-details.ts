import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiHttpProvider } from '../../providers/api-http/api-http';
import { FavoriteProvider } from '../../providers/favorite/favorite';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  movie:any;
  id:any;
  image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider, public favorite: FavoriteProvider) {
      let movie = this.navParams.get('movie');
      this.movie = movie;
      this.id = movie.imdbID;
      this.getMovie(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

  getMovie(id) {
    this.apiHttp.getMovie(id)
        .then(data => {
          this.movie = data;
        });
  }

  getImage(id) {
      this.apiHttp.getImage(id)
          .then(image => {
              console.log(this.image);
          });
  }

  addToFavorites(){
      this.favorite.addMedia(this.movie);
  }
}
