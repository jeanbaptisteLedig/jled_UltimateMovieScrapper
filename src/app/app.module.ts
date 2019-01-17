import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TabsPage } from '../pages/tabs/tabs';
import { MoviesPage} from '../pages/movies/movies';
import { SeriesPage} from '../pages/series/series';
import { NewsPage} from '../pages/news/news';
import { OtherPage} from '../pages/other/other';
import { MovieDetailsPage } from "../pages/movie-details/movie-details";
import { SerieDetailsPage } from "../pages/serie-details/serie-details";
import { MyFavoritesPage } from "../pages/my-favorites/my-favorites";
import { SeasonDetailsPage } from "../pages/season-details/season-details";
import { EpisodeDetailsPage } from "../pages/episode-details/episode-details";
import { ExportPopoverPage } from "../pages/export-popover/export-popover";
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignInPage } from '../pages/sign-in/sign-in';
import { MyAccountPage } from '../pages/my-account/my-account';

import { ApiHttpProvider } from '../providers/api-http/api-http';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AngularFireAuth } from 'angularfire2/auth';

import { ToArrayPipe } from '../pipes/to-array/to-array';

export const firebaseConfig = {
  apiKey: "AIzaSyBM95SDGtLKpXhfkG59sDkTTzFDEgToCqw",
  authDomain: "ultimate-movie-scrapper-74d7b.firebaseapp.com",
  databaseURL: "https://ultimate-movie-scrapper-74d7b.firebaseio.com",
  projectId: "ultimate-movie-scrapper-74d7b",
  storageBucket: "ultimate-movie-scrapper-74d7b.appspot.com",
  messagingSenderId: "151679188943"
};

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
    SerieDetailsPage,
    SeasonDetailsPage,
    EpisodeDetailsPage,
    MyFavoritesPage,
    ExportPopoverPage,
    ResetPasswordPage,
    SignInPage,
    MyAccountPage,
    ToArrayPipe
  ],
  bootstrap: [IonicApp],
  imports: [
    NgxErrorsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MoviesPage,
    SeriesPage,
    NewsPage,
    OtherPage,
    MovieDetailsPage,
    SerieDetailsPage,
    SeasonDetailsPage,
    EpisodeDetailsPage,
    MyFavoritesPage,
    ResetPasswordPage,
    SignInPage,
    MyAccountPage,
    ExportPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiHttpProvider,
    FavoriteProvider,
    ToArrayPipe,
    SocialSharing,
    ExportPopoverPage,
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
