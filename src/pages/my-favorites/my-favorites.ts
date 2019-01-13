import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, PopoverController, Platform } from 'ionic-angular';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { showToast, mediasToCSVBase64, mediasToJsonBase64, download } from "../../app/utils/utils";
import { MovieDetailsPage } from '../movie-details/movie-details';
import { SerieDetailsPage } from "../serie-details/serie-details";
import { SocialSharing } from '@ionic-native/social-sharing';
import { ExportPopoverPage } from "../export-popover/export-popover";

@IonicPage()
@Component({
  selector: 'page-my-favorites',
  templateUrl: 'my-favorites.html',
})

export class MyFavoritesPage {

  medias: any[] = [];
  media: String = 'movies';

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public platform: Platform,
      public favorite: FavoriteProvider,
      public toastController: ToastController,
      public socialSharing: SocialSharing,
      public popoverCtrl: PopoverController,
      public toast: ToastController) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad FavoritesPage');

      this.favorite.change.subscribe((medias: any[]) => {
          this.medias = medias;
      }, console.error);
      this.favorite.load()
  }

  movieSelected(movie: any, type: any) {
      if(type == 'movie'){
          this.navCtrl.push(MovieDetailsPage,{movie:movie});
      }
      else if(type == 'serie'){
          this.navCtrl.push(SerieDetailsPage,{movie:movie});
      }
      else {
          console.log('Erreur');
      }
  }

    removeMedia(medias: any) {
      this.favorite.removeMedia(medias);
      showToast(this.toastController, `Votre film ${medias.Title} a été supprimé !`)
    }

    showExportPopover(myEvent) {
        let popover = this.popoverCtrl.create(ExportPopoverPage, {
            download: this.shareFavorites.bind(this)
        });
        popover.present({
            ev: myEvent
        });
    }

    shareFavorites(format) {
        if(this.platform.is('core')) {
            showToast(this.toast, 'Your favorites list has been exported.');
            if (format === 'csv') {
                download('UMS_export.csv', mediasToCSVBase64(this.medias));
            } else {
                download('UMS_export.json', mediasToJsonBase64(this.medias));
            }
        } else {
            if (format === 'csv') {
                this.socialSharing.share('Look, this is my favorites movies and series !', 'Export my favorites', mediasToCSVBase64(this.medias))
            } else {
                this.socialSharing.share('Look, this is my favorites movies and series !', 'Export my favorites', mediasToJsonBase64(this.medias))
            }
        }
    }
}
