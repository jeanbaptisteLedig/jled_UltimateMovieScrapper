import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiHttpProvider } from '../../providers/api-http/api-http';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { SocialSharing } from '@ionic-native/social-sharing';

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

    movie:any = {};
    id:any;
    image:any;
    urlHDimage:any;
    isFavorite: Boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider, public favorite: FavoriteProvider, public socialSharing: SocialSharing) {
        let movie = this.navParams.get('movie');
        this.movie = movie;
        this.id = movie.imdbID;
        this.urlHDimage = this.apiHttp.getImage(this.id);
        this.getMovie(this.id);
    }

    ionViewDidLoad() {
        this.getMovie(this.id);
        if(this.favorite.isFavorite(this.id)) {
            this.isFavorite = true;
        }
        else {
            this.isFavorite = false;
        }
    }

    getMovie(id) {
        this.apiHttp.getMovie(id)
            .then(data => {
                this.movie = data;
            });
    }

    addToFavorites(){
        this.favorite.addMedia(this.movie);
        this.isFavorite = true;
    }

    removeFavorites(medias: any) {
        this.favorite.removeMedia(medias);
        this.isFavorite = false;
    }

    shareImage(image){
        this.socialSharing.share(null, null, image);
    }
}
