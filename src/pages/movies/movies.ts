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
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MoviesPage');
    }

    getMovies(event) {
        this.apiHttp.getMovies(event.target.value,"movie",this.page)
            .then(data => {
                this.movies = data['Search'];
                console.log(this.movies);
            });
    }

    movieSelected(movie){
        console.log("click"+movie.get);
        this.navCtrl.push(MovieDetailsPage,{movie:movie});
    }

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');

        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                this.movies.push( this.movies.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }
}
