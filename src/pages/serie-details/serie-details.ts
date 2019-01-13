import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { EpisodeDetailsPage } from '../../pages/episode-details/episode-details'

import { ApiHttpProvider } from '../../providers/api-http/api-http';
import { FavoriteProvider } from '../../providers/favorite/favorite';

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
    episodes:any;
    id:any;
    image:any;
    urlHDimage:any;
    title:any;
    isFavorite: Boolean = false;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public apiHttp: ApiHttpProvider,
        public favorite: FavoriteProvider,
        public socialSharing: SocialSharing,
        public platform: Platform)
        {
            let movie = this.navParams.get('movie');
            this.movie = movie;
            this.id = this.movie.imdbID;
            this.title = this.movie.Title;
            this.urlHDimage = this.apiHttp.getImage(this.id);
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

    episodeSelected(episodeId,season){
        this.navCtrl.push(EpisodeDetailsPage,{
            episodeId:episodeId,
            season:season
        });
        console.log(episodeId);
    }

    selectedSeason(season) {
        let item = season;
        this.apiHttp.getSeason(this.id, item)
            .then(data => {
                this.episodes = data;
                console.log(data);
            });
    }

    shareImage(image){
        this.socialSharing.share(null, null, image, null);
    }
}
