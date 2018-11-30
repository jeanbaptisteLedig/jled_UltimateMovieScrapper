import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiHttpProvider } from '../../providers/api-http/api-http';
import { SerieDetailsPage } from "../serie-details/serie-details";
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

    page = 1;
    movies:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SeriesPage');
    }

    getMovies(event) {
        this.apiHttp.getMovies(event.target.value,"series",this.page)
            .then(data => {
              this.movies = data;
              console.log(this.movies);
            });
    }

    movieSelected(movie){
        console.log("click"+movie.get);
        this.navCtrl.push(SerieDetailsPage,{movie:movie});
    }
}
