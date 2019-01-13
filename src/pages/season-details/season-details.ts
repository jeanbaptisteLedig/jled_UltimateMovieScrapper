import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiHttpProvider } from '../../providers/api-http/api-http';
import { EpisodeDetailsPage } from '../../pages/episode-details/episode-details'

/**
 * Generated class for the SeasonDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-season-details',
    templateUrl: 'season-details.html',
})
export class SeasonDetailsPage {

    episodes:any;
    public numberSeason:number = 0;
    public title:string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider) {
        this.numberSeason = this.navParams.get('season');
        let id = this.navParams.get('id');
        this.title = this.navParams.get('title');
        this.getSeason(id, this.numberSeason);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SeasonDetailsPage');
    }

    getSeason(id, numberSeason) {
        this.apiHttp.getSeason(id, numberSeason)
            .then(data => {
                this.episodes = data;
            });
    }

    episodeSelected(episode,season) {
        this.navCtrl.push(EpisodeDetailsPage,{
            episode:episode,
            season:season
        });
        console.log(episode);
    }

}
