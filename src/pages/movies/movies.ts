import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiHttpProvider } from '../../providers/api-http/api-http';
import { MovieDetailsPage } from '../movie-details/movie-details';

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

    page = 1;
    movies:any;
    searchInput: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MoviesPage');
    }

    getMovies(event) {
        this.searchInput = event.target.value;
        this.apiHttp.getMovies(event.target.value,"movie",this.page)
            .then(data => {
                this.movies = data;
            });
    }

    movieSelected(movie){
        this.navCtrl.push(MovieDetailsPage,{movie:movie});
    }

    doInfinite(infiniteScroll) {
        this.page++;
        this.apiHttp.getMovies(this.searchInput,"movie",this.page)
            .then(data => {
                this.movies = [...this.movies, ...data];
                infiniteScroll.complete();
            }).catch(err => {
                console.log(err);
                infiniteScroll.enable(false);
            });
    }
}
