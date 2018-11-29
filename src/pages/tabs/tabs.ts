import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage} from '../home/home';
import { MoviesPage} from '../movies/movies';
import { SeriesPage} from '../series/series';
import { NewsPage} from '../news/news';
import { OtherPage} from '../other/other';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  moviesRoot = MoviesPage
  seriesRoot = SeriesPage
  homeRoot = HomePage
  newsRoot = NewsPage
  otherRoot = OtherPage


  constructor(public navCtrl: NavController) {}

}
