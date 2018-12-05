webpackJsonp([8],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utils_toast__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_details_movie_details__ = __webpack_require__(51);
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
 * Generated class for the MyFavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyFavoritesPage = /** @class */ (function () {
    function MyFavoritesPage(navCtrl, navParams, favorite, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favorite = favorite;
        this.toastController = toastController;
        this.medias = [];
    }
    MyFavoritesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NewsPage');
        this.favorite.onChange.subscribe(function (medias) {
            _this.medias = medias;
        }, console.error);
        this.favorite.load();
    };
    MyFavoritesPage.prototype.movieSelected = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__movie_details_movie_details__["a" /* MovieDetailsPage */], { movie: movie });
    };
    MyFavoritesPage.prototype.removeMedia = function (medias) {
        this.favorite.removeMedia(medias);
        Object(__WEBPACK_IMPORTED_MODULE_3__app_utils_toast__["a" /* showToast */])(this.toastController, medias.Title + " a \u00E9t\u00E9 supprim\u00E9 !");
    };
    MyFavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-favorites',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/my-favorites/my-favorites.html"*/'<!--\n  Generated template for the MyFavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes favoris</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div padding>\n    <ion-segment [(ngModel)]="media">\n      <ion-segment-button value="movies">\n        Movies\n      </ion-segment-button>\n      <ion-segment-button value="series">\n        Series\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="media">\n    <ion-list *ngSwitchCase="\'movies\'">\n        <ion-list *ngIf="medias.length > 0">\n\n            <ion-item-sliding #item *ngFor="let media of medias; let i = index">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="{{media.Poster}}" style="width: auto;" alt="film">\n                    </ion-thumbnail>\n                    <h2>{{media.Title}}</h2>\n                    <p>Apparu en {{media.Year}}</p>\n                    <button ion-button clear item-end (click)="movieSelected(media)">Voir</button>\n                </ion-item>\n                <ion-item-options side="left">\n                    <button ion-button color="danger" (click)="removeMedia(media)">\n                        <ion-icon name="trash"></ion-icon>\n                        Supprimer\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'series\'">\n        ...\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/my-favorites/my-favorites.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _d || Object])
    ], MyFavoritesPage);
    return MyFavoritesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=my-favorites.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__ = __webpack_require__(51);
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
    }
    MoviesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoviesPage');
    };
    MoviesPage.prototype.getMovies = function (event) {
        var _this = this;
        this.searchInput = event.target.value;
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
        this.apiHttp.getMovies(this.searchInput, "movie", this.page).subscribe(function (data) {
            _this.movies = _this.movies.concat(data);
            _this.page++;
            infiniteScroll.complete();
        }, function () {
            infiniteScroll.enable(false);
        });
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movies/movies.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Search a movie</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n    <ion-searchbar animated="true" [(ngModel)]="selectedTitle" (ionInput)="getMovies($event);" [showCancelButton]="shouldShowCancel" ></ion-searchbar>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor="let movie of movies" col-12 col-md-4 col-xl-3>\n                <ion-card (click)="movieSelected(movie)">\n                    <img src="{{movie.Poster}}" id="poster"/>\n                    <div class="card-title">{{movie.Title}}</div>\n                    <div class="card-subtitle">{{movie.Year}}</div>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movies/movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    function OtherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherPage');
    };
    OtherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-other',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/other/other.html"*/'<!--\n  Generated template for the OtherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>other</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/other/other.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(41);
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
    function SerieDetailsPage(navCtrl, navParams, apiHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
        var movie = this.navParams.get('movie');
        this.movie = movie;
        this.id = movie.imdbID;
        this.getMovie(this.id);
    }
    SerieDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SerieDetailsPage');
    };
    SerieDetailsPage.prototype.getMovie = function (id) {
        var _this = this;
        this.apiHttp.getMovie(id)
            .then(function (data) {
            _this.movie = data;
            console.log(_this.movie);
        });
    };
    SerieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-serie-details',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/serie-details/serie-details.html"*/'<!--\n  Generated template for the MovieDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{movie.Title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1>{{movie.Title}}</h1>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <img src="{{movie.Poster}}">\n      </ion-col>\n\n      <ion-col col-9>\n        <div><h4>Date de sortie : </h4><p>{{movie.Released}} ({{movie.Runtime}}) </p></div>\n        <h4>De : </h4><p>{{movie.Director}}</p>\n        <h4>Avec : </h4><p>{{movie.Actors}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <h4>Overview</h4>\n        <p>{{movie.Plot}}</p>\n      </ion-col>\n      <h4>Nombre de saisons : </h4><p>{{movie.totalSeasons}}</p>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/serie-details/serie-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], SerieDetailsPage);
    return SerieDetailsPage;
}());

//# sourceMappingURL=serie-details.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies_movies__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__series_series__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_favorites_my_favorites__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_other__ = __webpack_require__(105);
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
            selector: 'page-tabs',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="2">\n    <ion-tab [root]="moviesRoot" tabTitle="Movies" tabIcon="film"></ion-tab>\n    <ion-tab [root]="seriesRoot" tabTitle="Series" tabIcon="desktop"></ion-tab>\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="favoritesRoot" tabTitle="My Favorites" tabIcon="star"></ion-tab>\n    <ion-tab [root]="otherRoot" tabTitle="Other" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serie_details_serie_details__ = __webpack_require__(106);
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
    }
    SeriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeriesPage');
    };
    SeriesPage.prototype.getMovies = function (event) {
        var _this = this;
        this.apiHttp.getMovies(event.target.value, "series", this.page)
            .then(function (data) {
            _this.movies = data;
            console.log(_this.movies);
        });
    };
    SeriesPage.prototype.movieSelected = function (movie) {
        console.log("click" + movie.get);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__serie_details_serie_details__["a" /* SerieDetailsPage */], { movie: movie });
    };
    SeriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-series',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/series/series.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Search a movie</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-searchbar animated="true" [(ngModel)]="selectedTitle" (ionInput)="getMovies($event);" [showCancelButton]="shouldShowCancel" ></ion-searchbar>\n  <ion-card *ngFor="let movie of movies" (click)="movieSelected(movie)">\n    <img src="{{movie.Poster}}" id="poster"/>\n    <div class="card-title">{{movie.Title}}</div>\n    <div class="card-subtitle">{{movie.Year}}</div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/series/series.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], SeriesPage);
    return SeriesPage;
}());

//# sourceMappingURL=series.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/movie-details/movie-details.module": [
		290,
		7
	],
	"../pages/movies/movies.module": [
		289,
		6
	],
	"../pages/my-favorites/my-favorites.module": [
		288,
		5
	],
	"../pages/news/news.module": [
		291,
		4
	],
	"../pages/other/other.module": [
		292,
		3
	],
	"../pages/serie-details/serie-details.module": [
		293,
		2
	],
	"../pages/series/series.module": [
		295,
		1
	],
	"../pages/tabs/tabs.module": [
		294,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-home',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ultimate Moovie Scrapper\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Welcome on Ultimate Movie Scrapper, the best library movies.\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_movies_movies__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_series_series__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_news__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_other_other__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_movie_details_movie_details__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_serie_details_serie_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_favorites_my_favorites__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_api_http_api_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_favorite_favorite__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_serie_details_serie_details__["a" /* SerieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_favorites_my_favorites__["a" /* MyFavoritesPage */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/my-favorites/my-favorites.module#MyFavoritesPageModule', name: 'MyFavoritesPage', segment: 'my-favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movies/movies.module#MoviesPageModule', name: 'MoviesPage', segment: 'movies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/serie-details/serie-details.module#SerieDetailsPageModule', name: 'SerieDetailsPage', segment: 'serie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/series/series.module#SeriesPageModule', name: 'SeriesPage', segment: 'series', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_serie_details_serie_details__["a" /* SerieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_favorites_my_favorites__["a" /* MyFavoritesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_api_http_api_http__["a" /* ApiHttpProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_favorite_favorite__["a" /* FavoriteProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showToast; });
/**
 * Created by jeanbaptiste.ledig on 04/12/2018.
 */
var showToast = function (toastCtrl, message) {
    var toast = toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
    });
    toast.present();
};
//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(107);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
            _this.http.get(_this.apiUrl + '&i=' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiHttpProvider.prototype.getImage = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrlImg + '&h=600&i=' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiHttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ApiHttpProvider);
    return ApiHttpProvider;
    var _a;
}());

//# sourceMappingURL=api-http.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorite_favorite__ = __webpack_require__(80);
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
    function MovieDetailsPage(navCtrl, navParams, apiHttp, favorite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
        this.favorite = favorite;
        var movie = this.navParams.get('movie');
        this.movie = movie;
        this.id = movie.imdbID;
        this.getMovie(this.id);
    }
    MovieDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovieDetailsPage');
    };
    MovieDetailsPage.prototype.getMovie = function (id) {
        var _this = this;
        this.apiHttp.getMovie(id)
            .then(function (data) {
            _this.movie = data;
        });
    };
    MovieDetailsPage.prototype.getImage = function (id) {
        var _this = this;
        this.apiHttp.getImage(id)
            .then(function (image) {
            console.log(_this.image);
        });
    };
    MovieDetailsPage.prototype.addToFavorites = function () {
        this.favorite.addMedia(this.movie);
    };
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-details',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movie-details/movie-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{movie.Title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1 id="title">{{movie.Title}}</h1>\n    <hr>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-auto>\n                <img src="{{movie.Poster}}">\n            </ion-col>\n            <ion-col>\n                <div class="headline">\n                    <h1>Sortie le </h1><p>{{movie.Released}} ({{movie.Runtime}}) </p>\n                </div>\n                <div class="headline">\n                    <!--<ionic3-star-rating\n                            activeIcon = "ios-star"\n                            defaultIcon = "ios-star-outline"\n                            activeColor = "#000"\n                            defaultColor = "black"\n                            readonly="true"\n                            [rating]="movie.imdbRating/2">\n                    </ionic3-star-rating>-->\n                    <div class="badge badge-success">{{movie.imdbRating}}/10</div><p> pour {{movie.imdbVotes}} votes</p>\n                </div>\n                <div class="headline">\n                    <h1>Réalisé par </h1><p>{{movie.Director}}</p>\n                </div>\n                <div class="headline">\n                    <h1>Genre : </h1><p>{{movie.Genre}}</p>\n                </div>\n                <div class="headline">\n                    <h1>Avec </h1><p>{{movie.Actors}}</p>\n                </div>\n                <div>\n                    <h1>Synopsis</h1><p>{{movie.Plot}}</p>\n                </div>\n            </ion-col>\n            <button (click)="addToFavorites(movie)">\n                Add to favorites\n            </button>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <h4>Fiche Technique</h4>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movie-details/movie-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_favorite_favorite__["a" /* FavoriteProvider */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

//# sourceMappingURL=movie-details.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(162);
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
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello StorageProvider Provider');
        this.init();
    }
    FavoriteProvider.prototype.addMedia = function (media) {
        this.medias.set(media.imdbID, media);
        this.storage.set('users_medias', this.medias);
        this.onChange.emit(Array.from(this.medias.values()));
    };
    FavoriteProvider.prototype.removeMedia = function (media) {
        this.medias.delete(media.imdbID);
        this.storage.set('users_medias', this.medias);
        this.onChange.emit(Array.from(this.medias.values()));
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
                            this.onChange.emit(Array.from(this.medias.values()));
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
        this.onChange.emit(Array.from(this.medias.values()));
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object])
    ], FavoriteProvider);
    return FavoriteProvider;
    var _a;
}());

//# sourceMappingURL=favorite.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map