import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiHttpProvider } from '../../providers/api-http/api-http';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the EpisodeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-episode-details',
  templateUrl: 'episode-details.html',
})
export class EpisodeDetailsPage {

    public episode:any = {};
    public id:number = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiHttp: ApiHttpProvider, public socialSharing: SocialSharing) {
        let id = this.navParams.get('episodeId');
        this.id = id;
        this.getEpisode(this.id);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EpisodeDetailsPage');
    }

    getEpisode(id){
        this.apiHttp.getMovie(id)
            .then(data => {
                this.episode = data;
                console.log(data);
            });
    }

    shareImage(image){
        this.socialSharing.share(null, null, image, null);
    }
}
