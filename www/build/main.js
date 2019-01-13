webpackJsonp([12],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EpisodeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EpisodeDetailsPage = /** @class */ (function () {
    function EpisodeDetailsPage(navCtrl, navParams, apiHttp, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
        this.socialSharing = socialSharing;
        this.episode = {};
        this.id = 0;
        var id = this.navParams.get('episodeId');
        this.id = id;
        this.getEpisode(this.id);
    }
    EpisodeDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EpisodeDetailsPage');
    };
    EpisodeDetailsPage.prototype.getEpisode = function (id) {
        var _this = this;
        this.apiHttp.getMovie(id)
            .then(function (data) {
            _this.episode = data;
            console.log(data);
        });
    };
    EpisodeDetailsPage.prototype.shareImage = function (image) {
        this.socialSharing.share(null, null, image, null);
    };
    EpisodeDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-episode-details',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/episode-details/episode-details.html"*/'<!--\n  Generated template for the EpisodeDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{episode.Title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="movie-header">\n        <img [style.background-image]="\'url(\' + episode?.Poster + \')\'">\n    </div>\n    <div class="movie-content" padding *ngIf="episode != null">\n        <div class="movie-summary">\n            <div class="poster">\n                <div class="content">\n                    <img src="{{episode.Poster}}">\n                </div>\n            </div>\n            <div class="item-content">\n                <span class="title">{{episode.Title}}</span>\n                <!--<span class="favorites">\n                    <button ion-button small outline item-end icon-start *ngIf="!isFavorite" (click)="addToFavorites(movie)" color="secondary">\n                        <ion-icon name="heart-outline"></ion-icon>\n                        Add to favorites\n                    </button>\n                    <button ion-button small outline item-end icon-start *ngIf="isFavorite" (click)="removeFavorites(movie)" color="danger">\n                        <ion-icon name="heart"></ion-icon>\n                        Remove from favorites\n                    </button>\n                </span>-->\n                <span class="country">{{episode.Country}}</span>\n                <span class="genre ">{{episode.Genre}}</span>\n                <span class="line">\n                    <span class="date">{{episode.Released}}</span>\n                <span class="time">({{episode.Runtime}})</span>\n                </span>\n                <span>\n                    <button ion-button small outline item-end icon-start (click)="shareImage(episode.Poster)" >\n                        <ion-icon name="share"></ion-icon>\n                        Partagez l\'image !\n                    </button>\n                </span>\n                <!-- services rating -->\n                <!--<div class="ratings" *ngIf="Ratings != null">\n                    <div class="imdb" *ngIf="Ratings != null">\n                        <span *ngFor="let rating of Ratings">\n                            {{rating.Source}}\n                            <span class="nb">{{rating.Value}}</span>\n                        </span>\n                    </div>\n                </div>-->\n                <div class="ratings" *ngIf="episode.imdbRating != null">\n                    <div class="imdb" *ngIf="episode.imdbRating != null">\n                        <span> IMDB <span class="nb">{{episode.imdbRating}}/10 ({{episode.imdbVotes}} votes)</span></span>\n                    </div>\n                </div>\n                <a href="{{episode.Website}}"><span class="key">Website</span></a>\n            </div>\n        </div>\n        <div class="movie-more">\n            <span><span class="key">Director: </span>{{episode.Director}}</span>\n            <span><span class="key">Cast: </span>{{episode.Actors}}</span>\n            <span><span class="key">Awards: </span>{{episode.Awards}}</span>\n            <span class="description">{{episode.Plot}}</span>\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/episode-details/episode-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], EpisodeDetailsPage);
    return EpisodeDetailsPage;
}());

//# sourceMappingURL=episode-details.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorite_favorite__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovieDetailsPage = /** @class */ (function () {
    function MovieDetailsPage(navCtrl, navParams, apiHttp, favorite, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
        this.favorite = favorite;
        this.socialSharing = socialSharing;
        this.movie = {};
        this.isFavorite = false;
        var movie = this.navParams.get('movie');
        this.movie = movie;
        this.id = movie.imdbID;
        this.urlHDimage = this.apiHttp.getImage(this.id);
        this.getMovie(this.id);
    }
    MovieDetailsPage.prototype.ionViewDidLoad = function () {
        this.getMovie(this.id);
        if (this.favorite.isFavorite(this.id)) {
            this.isFavorite = true;
        }
        else {
            this.isFavorite = false;
        }
    };
    MovieDetailsPage.prototype.getMovie = function (id) {
        var _this = this;
        this.apiHttp.getMovie(id)
            .then(function (data) {
            _this.movie = data;
        });
    };
    MovieDetailsPage.prototype.addToFavorites = function () {
        this.favorite.addMedia(this.movie);
        this.isFavorite = true;
    };
    MovieDetailsPage.prototype.removeFavorites = function (medias) {
        this.favorite.removeMedia(medias);
        this.isFavorite = false;
    };
    MovieDetailsPage.prototype.shareImage = function (image) {
        this.socialSharing.share(null, null, image);
    };
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-details',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movie-details/movie-details.html"*/'<ion-header no-border>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen="true">\n\n    <div class="movie-header">\n        <img [style.background-image]="\'url(\' + urlHDimage + \')\'">\n    </div>\n    <div class="movie-content" padding *ngIf="movie != null">\n        <div class="movie-summary">\n            <div class="poster">\n                <div class="content">\n                    <img [src]="movie.Poster==\'N/A\' ? \'../../assets/imgs/noImageAvailable.jpg\' : urlHDimage" />\n                </div>\n            </div>\n            <div class="item-content">\n                <span class="title">{{movie.Title}}</span>\n                <span class="favorites">\n                    <button ion-button small outline item-end icon-start *ngIf="!isFavorite" (click)="addToFavorites(movie)" color="secondary">\n                        <ion-icon name="heart-outline"></ion-icon>\n                        Add to favorites\n                    </button>\n                    <button ion-button small outline item-end icon-start *ngIf="isFavorite" (click)="removeFavorites(movie)" color="danger">\n                        <ion-icon name="heart"></ion-icon>\n                        Remove from favorites\n                    </button>\n                </span>\n                <span>\n                    <button ion-button small outline item-end icon-start (click)="shareImage(urlHDimage)" >\n                        <ion-icon name="share"></ion-icon>\n                        Partagez l\'image !\n                    </button>\n                </span>\n                <span class="country">{{movie.Country}}</span>\n                <span class="genre ">{{movie.Genre}}</span>\n                <span class="line">\n                    <span class="date">{{movie.Released}}</span>\n                <span class="time">({{movie.Runtime}})</span>\n                </span>\n                <span class="country">{{movie.Rated}}</span>\n                <!-- services rating -->\n                <!--<div class="ratings" *ngIf="Ratings != null">\n                    <div class="imdb" *ngIf="Ratings != null">\n                        <span *ngFor="let rating of Ratings">\n                            {{rating.Source}}\n                            <span class="nb">{{rating.Value}}</span>\n                        </span>\n                    </div>\n                </div>-->\n                <div class="ratings" *ngIf="movie.imdbRating != null">\n                    <div class="imdb" *ngIf="movie.imdbRating != null">\n                        <span> IMDB <span class="nb">{{movie.imdbRating}}/10 ({{movie.imdbVotes}} votes)</span></span>\n                    </div>\n                </div>\n                <a href="{{movie.Website}}"><span class="key">Website</span></a>\n            </div>\n        </div>\n        <div class="movie-more">\n            <span><span class="key">Director: </span>{{movie.Director}}</span>\n            <span><span class="key">Cast: </span>{{movie.Actors}}</span>\n            <span><span class="key">Awards: </span>{{movie.Awards}}</span>\n            <span class="description">{{movie.Plot}}</span>\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-footer *ngIf="movie?.showtimes == true">\n    <ion-toolbar>\n        <button ion-button color="primary" (click)="goToBooking()">Buy Ticket</button>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movie-details/movie-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

//# sourceMappingURL=movie-details.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_episode_details_episode_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_http_api_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_favorite_favorite__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SerieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SerieDetailsPage = /** @class */ (function () {
    function SerieDetailsPage(navCtrl, navParams, apiHttp, favorite, socialSharing, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
        this.favorite = favorite;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.isFavorite = false;
        var movie = this.navParams.get('movie');
        this.movie = movie;
        this.id = this.movie.imdbID;
        this.title = this.movie.Title;
        this.urlHDimage = this.apiHttp.getImage(this.id);
    }
    SerieDetailsPage.prototype.ionViewDidLoad = function () {
        this.getMovie(this.id);
        if (this.favorite.isFavorite(this.id)) {
            this.isFavorite = true;
        }
        else {
            this.isFavorite = false;
        }
    };
    SerieDetailsPage.prototype.getMovie = function (id) {
        var _this = this;
        this.apiHttp.getMovie(id)
            .then(function (data) {
            _this.movie = data;
        });
    };
    SerieDetailsPage.prototype.addToFavorites = function () {
        this.favorite.addMedia(this.movie);
        this.isFavorite = true;
    };
    SerieDetailsPage.prototype.removeFavorites = function (medias) {
        this.favorite.removeMedia(medias);
        this.isFavorite = false;
    };
    SerieDetailsPage.prototype.episodeSelected = function (episodeId, season) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_episode_details_episode_details__["a" /* EpisodeDetailsPage */], {
            episodeId: episodeId,
            season: season
        });
        console.log(episodeId);
    };
    SerieDetailsPage.prototype.selectedSeason = function (season) {
        var _this = this;
        var item = season;
        this.apiHttp.getSeason(this.id, item)
            .then(function (data) {
            _this.episodes = data;
            console.log(data);
        });
    };
    SerieDetailsPage.prototype.shareImage = function (image) {
        this.socialSharing.share(null, null, image, null);
    };
    SerieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-serie-details',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/serie-details/serie-details.html"*/'<ion-header no-border>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen="true">\n\n    <div class="movie-header">\n        <img [style.background-image]="\'url(\' + urlHDimage + \')\'">\n    </div>\n    <div class="movie-content" padding *ngIf="movie != null">\n        <div class="movie-summary">\n            <div class="poster">\n                <div class="content">\n                    <img src="{{urlHDimage}}">\n                </div>\n            </div>\n            <div class="item-content">\n                <span class="title">{{movie.Title}}</span>\n                <span class="favorites">\n                    <button ion-button small outline item-end icon-start *ngIf="!isFavorite" (click)="addToFavorites(movie)" color="secondary">\n                        <ion-icon name="heart-outline"></ion-icon>\n                        Add to favorites\n                    </button>\n                    <button ion-button small outline item-end icon-start *ngIf="isFavorite" (click)="removeFavorites(movie)" color="danger">\n                        <ion-icon name="heart"></ion-icon>\n                        Remove from favorites\n                    </button>\n                </span>\n                <span>\n                    <button ion-button small outline item-end icon-start (click)="shareImage(urlHDimage)" >\n                        <ion-icon name="share"></ion-icon>\n                        Partagez l\'image !\n                    </button>\n                </span>\n                <span class="country">{{movie.Country}}</span>\n                <span class="genre ">{{movie.Genre}}</span>\n                <span class="line">\n                    <span class="date">{{movie.Released}}</span>\n                    <span class="time">({{movie.Runtime}})</span>\n                </span>\n                <span class="line">\n                    <span class="seasons">{{movie.totalSeasons}} Saisons</span>\n                </span>\n                <!-- services rating -->\n                <!--<div class="ratings" *ngIf="Ratings != null">\n                    <div class="imdb" *ngIf="Ratings != null">\n                        <span *ngFor="let rating of Ratings">\n                            {{rating.Source}}\n                            <span class="nb">{{rating.Value}}</span>\n                        </span>\n                    </div>\n                </div>-->\n                <div class="ratings" *ngIf="movie.imdbRating != null">\n                    <div class="imdb" *ngIf="movie.imdbRating != null">\n                        <span> IMDB <span class="nb">{{movie.imdbRating}}/10 ({{movie.imdbVotes}} votes)</span></span>\n                    </div>\n                </div>\n\n                <a href="{{movie.Website}}"><span class="key">Website</span></a>\n            </div>\n        </div>\n        <div class="movie-more">\n            <span><span class="key">Director: </span>{{movie.Director}}</span>\n            <span><span class="key">Cast: </span>{{movie.Actors}}</span>\n            <span><span class="key">Awards: </span>{{movie.Awards}}</span>\n            <span class="description">{{movie.Plot}}</span>\n\n            <ion-item>\n                <ion-label>Seasons</ion-label>\n                <ion-select [(ngModel)]="season" (ionChange)="selectedSeason(season);">\n                    <ion-option *ngFor="let season of movie.totalSeasons | toArray : 1" value="{{season}}">{{season}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-slides>\n                <ion-slide *ngFor="let episode of episodes" (click)="episodeSelected(episode.imdbID, episode.Episode)" class="seasonsSlides">\n                    <ion-card>\n                        <div class="card-title">{{episode.Title}}</div>\n                        <div class="card-subtitle">{{episode.Episode}}</div>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-footer *ngIf="movie?.showtimes == true">\n    <ion-toolbar>\n        <button ion-button color="primary" (click)="goToBooking()">Buy Ticket</button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/serie-details/serie-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_http_api_http__["a" /* ApiHttpProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], SerieDetailsPage);
    return SerieDetailsPage;
}());

//# sourceMappingURL=serie-details.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    /*
    private oauthSignIn(provider: AuthProvider) {
        if (!(<any>window).cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        } else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(() => {
                    return this.afAuth.auth.getRedirectResult().then( result => {
                        // This gives you a Google Access Token.
                        // You can use it to access the Google API.
                        let token = result.credential.accessToken;
                        // The signed-in user info.
                        let user = result.user;
                        console.log(token, user);
                    }).catch(function(error) {
                        // Handle Errors here.
                        alert(error.message);
                    });
                });
        }
    }*/
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    /*signInWithGoogle() {
        console.log('Sign in with google');
        return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    }*/
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().sendPasswordResetEmail(email);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Ultimate Moovie Scrapper\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content text-center="center">\n    <img src="../../assets/imgs/logo.png"/><br/>\n    <h4>Welcome on Ultimate Movie Scrapper, the best library movies.</h4>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExportPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExportPopoverPage = /** @class */ (function () {
    function ExportPopoverPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ExportPopoverPage.prototype.close = function (format) {
        if (this.navParams.data.hasOwnProperty('download') && format) {
            this.navParams.get('download')(format);
        }
        this.viewCtrl.dismiss();
    };
    ExportPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-export-popover',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/export-popover/export-popover.html"*/'<ion-list>\n  <ion-list-header>Format d\'export</ion-list-header>\n  <button ion-item (click)="close(\'json\')">Exporter en JSON</button>\n  <button ion-item (click)="close(\'csv\')">Exporter en CSV</button>\n</ion-list>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/export-popover/export-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ExportPopoverPage);
    return ExportPopoverPage;
}());

//# sourceMappingURL=export-popover.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoviesPage = /** @class */ (function () {
    function MoviesPage(navCtrl, navParams, apiHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
        this.page = 1;
        this.isSearchBarOpened = false;
    }
    MoviesPage.prototype.ionViewDidLoad = function () {
    };
    MoviesPage.prototype.getMovies = function (event) {
        var _this = this;
        this.searchInput = event.target.value;
        this.page = 1;
        this.apiHttp.getMovies(event.target.value, "movie", this.page)
            .then(function (data) {
            _this.movies = data;
        });
    };
    MoviesPage.prototype.movieSelected = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__["a" /* MovieDetailsPage */], { movie: movie });
    };
    MoviesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.apiHttp.getMovies(this.searchInput, "movie", this.page)
            .then(function (data) {
            if (data) {
                _this.movies = _this.movies.concat(data);
                infiniteScroll.complete();
            }
            else {
                infiniteScroll.enable(false);
            }
        }, function () {
            infiniteScroll.enable(false);
        });
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movies/movies.html"*/'<ion-header>\n    <ion-navbar>\n    <ion-title *ngIf="!isSearchBarOpened">\n        Search a movie\n    </ion-title>\n    <ion-searchbar\n        *ngIf="isSearchBarOpened"\n        animated="true"\n        [(ngModel)]="selectedTitle"\n        (ionInput)="getMovies($event);"\n        [showCancelButton]="true "\n        (ionCancel)="isSearchBarOpened=false">\n    </ion-searchbar>\n    <ion-buttons end>\n        <button ion-button icon-only *ngIf="!isSearchBarOpened" (click)="isSearchBarOpened=true" >\n            <ion-icon name="search"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor="let movie of movies" col-6 col-md-4 col-lg-3>\n                <ion-card (click)="movieSelected(movie)">\n                    <img alt="poster" [src]="movie.Poster==\'N/A\' ? \'../../assets/imgs/noImageAvailable.jpg\' : movie.Poster" />\n                    <div class="card-title">{{movie.Title}}</div>\n                    <div class="card-subtitle">{{movie.Year}}</div>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content\n            loadingSpinner="crescent">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movies/movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utils_utils__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_details_movie_details__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__serie_details_serie_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__export_popover_export_popover__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyFavoritesPage = /** @class */ (function () {
    function MyFavoritesPage(navCtrl, navParams, platform, favorite, toastController, socialSharing, popoverCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.favorite = favorite;
        this.toastController = toastController;
        this.socialSharing = socialSharing;
        this.popoverCtrl = popoverCtrl;
        this.toast = toast;
        this.medias = [];
        this.media = 'movies';
    }
    MyFavoritesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FavoritesPage');
        this.favorite.change.subscribe(function (medias) {
            _this.medias = medias;
        }, console.error);
        this.favorite.load();
    };
    MyFavoritesPage.prototype.movieSelected = function (movie, type) {
        if (type == 'movie') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__movie_details_movie_details__["a" /* MovieDetailsPage */], { movie: movie });
        }
        else if (type == 'serie') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__serie_details_serie_details__["a" /* SerieDetailsPage */], { movie: movie });
        }
        else {
            console.log('Erreur');
        }
    };
    MyFavoritesPage.prototype.removeMedia = function (medias) {
        this.favorite.removeMedia(medias);
        Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_utils__["d" /* showToast */])(this.toastController, "Votre film " + medias.Title + " a \u00E9t\u00E9 supprim\u00E9 !");
    };
    MyFavoritesPage.prototype.showExportPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__export_popover_export_popover__["a" /* ExportPopoverPage */], {
            download: this.shareFavorites.bind(this)
        });
        popover.present({
            ev: myEvent
        });
    };
    MyFavoritesPage.prototype.shareFavorites = function (format) {
        if (this.platform.is('core')) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_utils__["d" /* showToast */])(this.toast, 'Your favorites list has been exported.');
            if (format === 'csv') {
                Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_utils__["a" /* download */])('UMS_export.csv', Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_utils__["b" /* mediasToCSVBase64 */])(this.medias));
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_utils__["a" /* download */])('UMS_export.json', Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_utils__["c" /* mediasToJsonBase64 */])(this.medias));
            }
        }
        else {
            if (format === 'csv') {
                this.socialSharing.share('Look, this is my favorites movies and series !', 'Export my favorites', Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_utils__["b" /* mediasToCSVBase64 */])(this.medias));
            }
            else {
                this.socialSharing.share('Look, this is my favorites movies and series !', 'Export my favorites', Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_utils__["c" /* mediasToJsonBase64 */])(this.medias));
            }
        }
    };
    MyFavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-favorites',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/my-favorites/my-favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes favoris</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-segment [(ngModel)]="media" color="primary">\n        <ion-segment-button value="movies">\n            Movies\n        </ion-segment-button>\n        <ion-segment-button value="series">\n            Series\n        </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]="media">\n        <ion-list *ngSwitchCase="\'movies\'">\n            <ion-list *ngIf="medias.length > 0">\n\n                <ion-item-sliding #item *ngFor="let media of medias">\n                        <ion-item *ngIf="media?.Type == \'movie\'">\n                            <ion-thumbnail item-start>\n                                <img src="{{media.Poster}}" style="width: auto;" alt="film">\n                            </ion-thumbnail>\n                            <h2>{{media.Title}}</h2>\n                            <p>Apparu en {{media.Year}}</p>\n                            <button ion-button clear item-end (click)="movieSelected(media,\'movie\')">Voir</button>\n                        </ion-item>\n                        <ion-item-options side="right">\n                            <button ion-button color="danger" (click)="removeMedia(media)">\n                                <ion-icon name="trash"></ion-icon>\n                                Supprimer\n                            </button>\n                        </ion-item-options>\n                </ion-item-sliding>\n\n            </ion-list>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'series\'">\n            <ion-list *ngIf="medias.length > 0">\n\n                <ion-item-sliding #item *ngFor="let media of medias">\n                        <ion-item *ngIf="media?.Type == \'series\'">\n                            <ion-thumbnail item-start>\n                                <img src="{{media.Poster}}" style="width: auto;" alt="film">\n                            </ion-thumbnail>\n                            <h2>{{media.Title}}</h2>\n                            <p>Apparu en {{media.Year}}</p>\n                            <button ion-button clear item-end (click)="movieSelected(media,\'serie\')">Voir</button>\n                        </ion-item>\n                        <ion-item-options side="right">\n                            <button ion-button color="danger" (click)="removeMedia(media)">\n                                <ion-icon name="trash"></ion-icon>\n                                Supprimer\n                            </button>\n                        </ion-item-options>\n                </ion-item-sliding>\n\n            </ion-list>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <p>Share your favorites</p>\n        <ion-buttons end>\n            <button ion-button icon-end color="royal" (click)="showExportPopover()">\n                Share\n                <ion-icon name="share"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/my-favorites/my-favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], MyFavoritesPage);
    return MyFavoritesPage;
}());

//# sourceMappingURL=my-favorites.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reset_password_reset_password__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtherPage = /** @class */ (function () {
    function OtherPage(navCtrl, navParams, auth, fb, platform, popoverCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.fb = fb;
        this.platform = platform;
        this.popoverCtrl = popoverCtrl;
        this.toast = toast;
        this.user_status = 'signin';
        this.isOnline = false;
        this.userEmail = '';
        this.userName = '';
        this.signinForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6)])]
        });
        this.signupForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6)])]
        });
        this.UserIsOnline();
    }
    OtherPage_1 = OtherPage;
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherPage');
    };
    OtherPage.prototype.login = function () {
        var _this = this;
        var data = this.signinForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    OtherPage.prototype.logout = function () {
        var _this = this;
        this.auth.signOut()
            .then(function () { return _this.navCtrl.setRoot(OtherPage_1); }, function (error) { return console.log(error.message); });
    };
    /*loginWithGoogle() {
        this.auth.signInWithGoogle()
            .then(
                () => this.navCtrl.setRoot(HomePage),
                error => console.log(error.message)
            );
    }*/
    OtherPage.prototype.signup = function () {
        var _this = this;
        var data = this.signupForm.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(OtherPage_1); }, function (error) { return _this.signupError = error.message; });
    };
    OtherPage.prototype.UserIsOnline = function () {
        if (__WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser != null) {
            this.isOnline = true;
            this.user = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser;
            this.userName = this.user.displayName;
            this.userEmail = this.user.email;
            this.userPicture = this.user.photoURL;
        }
        else {
            this.isOnline = false;
        }
    };
    OtherPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    OtherPage = OtherPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-other',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/other/other.html"*/'<!--\n  Generated template for the OtherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Paramètres</ion-title>\n    <ion-buttons end [hidden]="!isOnline">\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="log-out"></ion-icon> Logout\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content [hidden]="isOnline">\n  <ion-segment [(ngModel)]="user_status" color="primary">\n    <ion-segment-button value="signin">\n      Se connecter\n    </ion-segment-button>\n    <ion-segment-button value="signup">\n      S\'inscrire\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="user_status">\n    <ion-list *ngSwitchCase="\'signin\'">\n      <form (ngSubmit)="login()" [formGroup]="signinForm">\n        <ion-list inset>\n          <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\',\'dirty\']) }">\n            <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n          </ion-item>\n          <div ngxErrors="email" #emailErrors="ngxErrors">\n            <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should\n              be a valid email</div>\n          </div>\n          <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n            <ion-input type="password" placeholder="Password"\n                       formControlName="password"></ion-input>\n          </ion-item>\n          <div ngxErrors="password" #passwordErrors="ngxErrors">\n            <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be\n              at least 5 characters</div>\n          </div>\n        </ion-list>\n        <div padding-horizontal>\n          <div class="form-error">{{loginError}}</div>\n          <button ion-button full type="submit" [disabled]="!signinForm.valid">Log\n            in</button>\n          <div class="login-footer">\n            <p>\n              Si vous êtes un nouvel utilisateur, veuillez-vous inscrire dans l\'onglet "S\'inscrire"\n            </p>\n          </div>\n        </div>\n      </form>\n      <ion-buttons>\n        <button ion-button icon-end color="royal" (click)="goToResetPassword()">\n          Mot de passe oublié ?\n        </button>\n      </ion-buttons>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'signup\'">\n      <form (ngSubmit)="signup()" [formGroup]="signupForm">\n        <ion-list inset>\n          <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n            <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n          </ion-item>\n          <div ngxErrors="email" #emailErrors="ngxErrors">\n            <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a\n              valid email</div>\n          </div>\n          <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n            <ion-input type="password" placeholder="Password"\n                       formControlName="password"></ion-input>\n          </ion-item>\n          <div ngxErrors="password" #passwordErrors="ngxErrors">\n            <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be\n              at least 6 characters</div>\n          </div>\n        </ion-list>\n        <div padding-horizontal>\n          <div class="form-error">{{signupError}}</div>\n          <button ion-button full type="submit" [disabled]="!signupForm.valid">Sign up</button>\n        </div>\n      </form>\n      <ion-list>\n        <button ion-button icon-left block clear (click)="loginWithGoogle()">\n          <ion-icon name="logo-google"></ion-icon>\n          Log in with Google\n        </button>\n      </ion-list>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-content [hidden]="!isOnline">\n  <div class="content" padding >\n      <div class="poster">\n        <div class="content">\n          <img [src]="userPicture" />\n        </div>\n      </div>\n      <div class="item-content">\n        <span class="title">{{userName}}</span>\n        <span><span class="key">Email: </span>{{userEmail}}</span>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/other/other.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], OtherPage);
    return OtherPage;
    var OtherPage_1;
}());

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, auth, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
        });
    }
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.auth.resetPassword(this.resetPasswordForm.value.email)
                .then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "We sent you a reset link to your email",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () { _this.navCtrl.pop(); }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [{ text: "Ok", role: 'cancel' }]
                });
                errorAlert.present();
            });
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/reset-password/reset-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Mot de Passe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n                 [class.invalid]="!resetPasswordForm.controls.email.valid && blur">\n      </ion-input>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!resetPasswordForm.valid">\n      Reset your Password\n    </button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serie_details_serie_details__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeriesPage = /** @class */ (function () {
    function SeriesPage(navCtrl, navParams, apiHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
        this.page = 1;
        this.isSearchBarOpened = false;
    }
    SeriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeriesPage');
    };
    SeriesPage.prototype.getMovies = function (event) {
        var _this = this;
        this.searchInput = event.target.value;
        this.page = 1;
        this.apiHttp.getMovies(event.target.value, "series", this.page)
            .then(function (data) {
            _this.movies = data;
        });
    };
    SeriesPage.prototype.movieSelected = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__serie_details_serie_details__["a" /* SerieDetailsPage */], { movie: movie });
    };
    SeriesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.apiHttp.getMovies(this.searchInput, "movie", this.page).then(function (data) {
            _this.movies = _this.movies.concat(data);
            infiniteScroll.complete();
        }, function () {
            infiniteScroll.enable(false);
        });
    };
    SeriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-series',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/series/series.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="!isSearchBarOpened">\n      Search a serie\n    </ion-title>\n    <ion-searchbar\n            *ngIf="isSearchBarOpened"\n            animated="true"\n            [(ngModel)]="selectedTitle"\n            (ionInput)="getMovies($event);"\n            [showCancelButton]="true "\n            (ionCancel)="isSearchBarOpened=false">\n    </ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="!isSearchBarOpened" (click)="isSearchBarOpened=true" >\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let movie of movies" col-6 col-md-4 col-lg-3>\n        <ion-card (click)="movieSelected(movie)">\n          <img alt="poster" [src]="movie.Poster==\'N/A\' ? \'../../assets/imgs/noImageAvailable.jpg\' : movie.Poster" />\n          <div class="card-title">{{movie.Title}}</div>\n          <div class="card-subtitle">{{movie.Year}}</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content\n            loadingSpinner="crescent">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/series/series.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], SeriesPage);
    return SeriesPage;
}());

//# sourceMappingURL=series.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies_movies__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__series_series__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_favorites_my_favorites__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_other__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.moviesRoot = __WEBPACK_IMPORTED_MODULE_3__movies_movies__["a" /* MoviesPage */];
        this.seriesRoot = __WEBPACK_IMPORTED_MODULE_4__series_series__["a" /* SeriesPage */];
        this.favoritesRoot = __WEBPACK_IMPORTED_MODULE_5__my_favorites_my_favorites__["a" /* MyFavoritesPage */];
        this.otherRoot = __WEBPACK_IMPORTED_MODULE_6__other_other__["a" /* OtherPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="2">\n    <ion-tab [root]="moviesRoot" tabTitle="Movies" tabIcon="film"></ion-tab>\n    <ion-tab [root]="seriesRoot" tabTitle="Series" tabIcon="desktop"></ion-tab>\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="favoritesRoot" tabTitle="Mes Favoris" tabIcon="star"></ion-tab>\n    <ion-tab [root]="otherRoot" tabTitle="Paramètres" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/episode-details/episode-details.module": [
		817,
		11
	],
	"../pages/export-popover/export-popover.module": [
		818,
		10
	],
	"../pages/movie-details/movie-details.module": [
		819,
		9
	],
	"../pages/movies/movies.module": [
		820,
		8
	],
	"../pages/my-favorites/my-favorites.module": [
		821,
		7
	],
	"../pages/news/news.module": [
		822,
		6
	],
	"../pages/other/other.module": [
		823,
		5
	],
	"../pages/reset-password/reset-password.module": [
		824,
		4
	],
	"../pages/season-details/season-details.module": [
		825,
		3
	],
	"../pages/serie-details/serie-details.module": [
		826,
		2
	],
	"../pages/series/series.module": [
		827,
		1
	],
	"../pages/tabs/tabs.module": [
		828,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 267;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\nHello World !\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_episode_details_episode_details__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SeasonDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeasonDetailsPage = /** @class */ (function () {
    function SeasonDetailsPage(navCtrl, navParams, apiHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
        this.numberSeason = 0;
        this.title = '';
        this.numberSeason = this.navParams.get('season');
        var id = this.navParams.get('id');
        this.title = this.navParams.get('title');
        this.getSeason(id, this.numberSeason);
    }
    SeasonDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeasonDetailsPage');
    };
    SeasonDetailsPage.prototype.getSeason = function (id, numberSeason) {
        var _this = this;
        this.apiHttp.getSeason(id, numberSeason)
            .then(function (data) {
            _this.episodes = data;
        });
    };
    SeasonDetailsPage.prototype.episodeSelected = function (episode, season) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_episode_details_episode_details__["a" /* EpisodeDetailsPage */], {
            episode: episode,
            season: season
        });
        console.log(episode);
    };
    SeasonDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-season-details',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/season-details/season-details.html"*/'<!--\n  Generated template for the SeasonDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{title}} - Saison {{numberSeason}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let episode of episodes" (click)="episodeSelected(episode, numberSeason)">\n            <ion-label>\n                {{episode.Title}}\n            </ion-label>\n            <div item-content *ngIf="episode?.Released != \'N/A\'">\n                {{episode.Released | date}}\n            </div>\n            <div item-content *ngIf="episode?.Released == \'N/A\'">\n                À venir\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/season-details/season-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], SeasonDetailsPage);
    return SeasonDetailsPage;
}());

//# sourceMappingURL=season-details.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(434);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_movies_movies__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_series_series__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_news_news__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_other_other__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_movie_details_movie_details__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_serie_details_serie_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_favorites_my_favorites__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_season_details_season_details__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_episode_details_episode_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_export_popover_export_popover__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_reset_password_reset_password__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_api_http_api_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_favorite_favorite__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_auth_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ultimate_ngxerrors__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_to_array_to_array__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var firebaseConfig = {
    apiKey: "AIzaSyBM95SDGtLKpXhfkG59sDkTTzFDEgToCqw",
    authDomain: "ultimate-movie-scrapper-74d7b.firebaseapp.com",
    databaseURL: "https://ultimate-movie-scrapper-74d7b.firebaseio.com",
    projectId: "ultimate-movie-scrapper-74d7b",
    storageBucket: "ultimate-movie-scrapper-74d7b.appspot.com",
    messagingSenderId: "151679188943"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_serie_details_serie_details__["a" /* SerieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_season_details_season_details__["a" /* SeasonDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_episode_details_episode_details__["a" /* EpisodeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_favorites_my_favorites__["a" /* MyFavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_export_popover_export_popover__["a" /* ExportPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_to_array_to_array__["a" /* ToArrayPipe */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_28__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/episode-details/episode-details.module#EpisodeDetailsPageModule', name: 'EpisodeDetailsPage', segment: 'episode-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/export-popover/export-popover.module#ExportPopoverPageModule', name: 'ExportPopoverPage', segment: 'export-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movies/movies.module#MoviesPageModule', name: 'MoviesPage', segment: 'movies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-favorites/my-favorites.module#MyFavoritesPageModule', name: 'MyFavoritesPage', segment: 'my-favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'reset-password', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/season-details/season-details.module#SeasonDetailsPageModule', name: 'SeasonDetailsPage', segment: 'season-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/serie-details/serie-details.module#SerieDetailsPageModule', name: 'SerieDetailsPage', segment: 'serie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/series/series.module#SeriesPageModule', name: 'SeriesPage', segment: 'series', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_serie_details_serie_details__["a" /* SerieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_season_details_season_details__["a" /* SeasonDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_episode_details_episode_details__["a" /* EpisodeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_favorites_my_favorites__["a" /* MyFavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_export_popover_export_popover__["a" /* ExportPopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_api_http_api_http__["a" /* ApiHttpProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_favorite_favorite__["a" /* FavoriteProvider */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_to_array_to_array__["a" /* ToArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_23__pages_export_popover_export_popover__["a" /* ExportPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_27__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuth"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showToast; });
/* harmony export (immutable) */ __webpack_exports__["a"] = download;
/* harmony export (immutable) */ __webpack_exports__["c"] = mediasToJsonBase64;
/* harmony export (immutable) */ __webpack_exports__["b"] = mediasToCSVBase64;
/* unused harmony export b64toBlob */
var showToast = function (toastCtrl, message) {
    var toast = toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'bottom'
    });
    toast.present();
};
function download(fileName, baseData) {
    var data = baseData.split(";");
    var type = data[0].split(":")[1];
    var realData = data[1].split(",")[1];
    var blob = b64toBlob(realData, type);
    var objectUrl = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.setAttribute('href', objectUrl);
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(objectUrl);
}
function mediasToJsonBase64(medias) {
    return "data:text/json;charset=utf8," + btoa(JSON.stringify(medias.map(function (media) { return media.imdbID; })));
}
function mediasToCSVBase64(medias) {
    return "data:text/csv;charset=utf8," + btoa(medias.map(function (media) { return media.imdbID; }).join("\r\n"));
}
function b64toBlob(b64Data, contentType, sliceSize) {
    if (contentType === void 0) { contentType = ''; }
    if (sliceSize === void 0) { sliceSize = 512; }
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiHttpProvider = /** @class */ (function () {
    function ApiHttpProvider(http) {
        this.http = http;
        this.apiUrl = 'http://www.omdbapi.com/?apikey=75522b56';
        this.apiUrlImg = 'http://img.omdbapi.com/?apikey=75522b56';
        console.log('Hello ApiHttpProvider Provider');
    }
    ApiHttpProvider.prototype.getMovies = function (searchText, type, page) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '&type=' + type + '&s=' + searchText + '&page=' + page)
                .subscribe(function (data) {
                resolve(data['Search']);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiHttpProvider.prototype.getMovie = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '&i=' + id + '&plot=full')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiHttpProvider.prototype.getSeason = function (id, season) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '&i=' + id + '&plot=full&season=' + season)
                .subscribe(function (data) {
                resolve(data['Episodes']);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiHttpProvider.prototype.getEpisode = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '&i=' + id + '&plot=full')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiHttpProvider.prototype.getImage = function (id) {
        return this.apiUrlImg + '&i=' + id + '&h=600';
    };
    ApiHttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiHttpProvider);
    return ApiHttpProvider;
}());

//# sourceMappingURL=api-http.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ToArrayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ToArrayPipe = /** @class */ (function () {
    function ToArrayPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ToArrayPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var res = [], start = args.length > 0 ? args[0] : 0;
        value = parseInt(value) + start;
        for (var i = start; i < value; i++) {
            res.push(i);
        }
        return res;
    };
    ToArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'toArray',
        })
    ], ToArrayPipe);
    return ToArrayPipe;
}());

//# sourceMappingURL=to-array.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavoriteProvider = /** @class */ (function () {
    function FavoriteProvider(storage) {
        this.storage = storage;
        this.medias = new Map();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello StorageProvider Provider');
        this.init();
    }
    FavoriteProvider.prototype.addMedia = function (media) {
        this.medias.set(media.imdbID, media);
        this.storage.set('user_medias', this.medias);
        this.change.emit(Array.from(this.medias.values()));
    };
    FavoriteProvider.prototype.removeMedia = function (media) {
        this.medias.delete(media.imdbID);
        this.storage.set('user_medias', this.medias);
        this.change.emit(Array.from(this.medias.values()));
    };
    FavoriteProvider.prototype.isFavorite = function (id) {
        return this.medias.has(id);
    };
    FavoriteProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var medias, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.storage.get('user_medias')];
                    case 1:
                        medias = _a.sent();
                        if (medias !== null && medias instanceof Map) {
                            this.medias = new Map(medias);
                            this.change.emit(Array.from(this.medias.values()));
                        }
                        else {
                            this.medias = new Map();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FavoriteProvider.prototype.load = function () {
        this.change.emit(Array.from(this.medias.values()));
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], FavoriteProvider);
    return FavoriteProvider;
}());

//# sourceMappingURL=favorite.js.map

/***/ })

},[429]);
//# sourceMappingURL=main.js.map