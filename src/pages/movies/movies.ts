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
    public isSearchBarOpened = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider) {
    }

    ionViewDidLoad() {

    }

    getMovies(event) {
        this.searchInput = event.target.value;
        this.page=1;
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
        .then((data:any) => {
            if(data){
                this.movies = [...this.movies, ...data];
                infiniteScroll.complete();
            }
            else {
                infiniteScroll.enable(false);
            }
        }, () => {
            infiniteScroll.enable(false);
        });
    }
}
