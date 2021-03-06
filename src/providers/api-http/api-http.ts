import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiHttpProvider {

    apiUrl = 'http://www.omdbapi.com/?apikey=75522b56';
    apiUrlImg = 'http://img.omdbapi.com/?apikey=75522b56';

    constructor(public http: HttpClient) {
        console.log('Hello ApiHttpProvider Provider');
    }

    getMovies(searchText, type, page) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'&type='+type+'&s='+searchText+'&page='+page)
                .subscribe(data => {
                    resolve(data['Search']);
                }, err => {
                    console.log(err);
                });
        });
    }

    getMovie(id) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'&i='+id+'&plot=full')
            .subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getSeason(id, season){
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'&i='+id+'&plot=full&season='+season)
                .subscribe(data => {
                    resolve(data['Episodes']);
                }, err => {
                    console.log(err);
                });
        });
    }

    getEpisode(id){
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'&i='+id+'&plot=full')
                .subscribe(data => {
                    resolve(data);
                }, err => {
                    console.log(err);
                });
        });
    }

    getImage(id) {
        return this.apiUrlImg+'&i='+id+'&h=600';
    }
}
