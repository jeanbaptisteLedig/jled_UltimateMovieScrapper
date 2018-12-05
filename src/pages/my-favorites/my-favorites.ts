import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { MediasModel } from "../../app/models/MediasModel";
import { showToast } from "../../app/utils/toast";
import { MovieDetailsPage } from '../movie-details/movie-details';

/**
 * Generated class for the MyFavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-favorites',
  templateUrl: 'my-favorites.html',
})
export class MyFavoritesPage {

  medias: MediasModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public favorite: FavoriteProvider, public toastController: ToastController) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad NewsPage');

      this.favorite.change.subscribe((medias: MediasModel[]) => {
        this.medias = medias;
      }, console.error);
      this.favorite.load()
  }

  movieSelected(movie: MediasModel) {
      this.navCtrl.push(MovieDetailsPage,{movie:movie});
  }
  removeMedia(medias: MediasModel) {
      this.favorite.removeMedia(medias);
      showToast(this.toastController, `${medias.Title} a été supprimé !`)
  }

}
