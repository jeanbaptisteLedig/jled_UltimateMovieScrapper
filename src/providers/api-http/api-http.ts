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

  constructor(public http: HttpClient) {
    console.log('Hello ApiHttpProvider Provider');
  }

  getMovies(event, type) {
    console.log(event);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&type='+type+'&s='+event).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMovie(id) {
    console.log(id);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&i='+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
