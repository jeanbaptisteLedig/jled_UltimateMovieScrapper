import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TabsPage } from '../pages/tabs/tabs';
import { MoviesPage} from '../pages/movies/movies';
import { SeriesPage} from '../pages/series/series';
import { NewsPage} from '../pages/news/news';
import { OtherPage} from '../pages/other/other';
import {MovieDetailsPage} from "../pages/movie-details/movie-details";
import {SerieDetailsPage} from "../pages/serie-details/serie-details";

import { ApiHttpProvider } from '../providers/api-http/api-http';
import { StarRatingModule } from 'ionic3-star-rating';
import { FavoriteProvider } from '../providers/favorite/favorite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MoviesPage,
    SeriesPage,
    NewsPage,
    OtherPage,
    MovieDetailsPage,
    SerieDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MoviesPage,
    SeriesPage,
    NewsPage,
    OtherPage,
    MovieDetailsPage,
    SerieDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiHttpProvider,
    FavoriteProvider
  ]
})
export class AppModule {}
