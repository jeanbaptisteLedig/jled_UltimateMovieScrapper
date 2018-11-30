webpackJsonp([7],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovieDetailsPage = /** @class */ (function () {
    function MovieDetailsPage(navCtrl, navParams, apiHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiHttp = apiHttp;
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
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-details',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movie-details/movie-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{movie.Title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1 id="title">{{movie.Title}}</h1>\n    <hr>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-auto>\n                <img src="{{movie.Poster}}">\n            </ion-col>\n            <ion-col>\n                <div class="headline">\n                    <h1>Sortie le </h1><p>{{movie.Released}} ({{movie.Runtime}}) </p>\n                </div>\n                <div class="headline">\n                    <!--<ionic3-star-rating\n                            activeIcon = "ios-star"\n                            defaultIcon = "ios-star-outline"\n                            activeColor = "#000"\n                            defaultColor = "black"\n                            readonly="true"\n                            [rating]="movie.imdbRating/2">\n                    </ionic3-star-rating>-->\n                    <div class="badge badge-success">{{movie.imdbRating}}/10</div><p> pour {{movie.imdbVotes}} votes</p>\n                </div>\n                <div class="headline">\n                    <h1>Réalisé par </h1><p>{{movie.Director}}</p>\n                </div>\n                <div class="headline">\n                    <h1>Genre : </h1><p>{{movie.Genre}}</p>\n                </div>\n                <div class="headline">\n                    <h1>Avec </h1><p>{{movie.Actors}}</p>\n                </div>\n                <div>\n                    <h1>Synopsis</h1><p>{{movie.Plot}}</p>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <h4>Fiche Technique</h4>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movie-details/movie-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]) === "function" && _c || Object])
    ], MovieDetailsPage);
    return MovieDetailsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=movie-details.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__ = __webpack_require__(101);
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
        this.page++;
        this.apiHttp.getMovies(this.searchInput, "movie", this.page)
            .then(function (data) {
            _this.movies = _this.movies.concat(data);
            infiniteScroll.complete();
        }).catch(function (err) {
            console.log(err);
            infiniteScroll.enable(false);
        });
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movies/movies.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Search a movie</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n    <ion-searchbar animated="true" [(ngModel)]="selectedTitle" (ionInput)="getMovies($event);" [showCancelButton]="shouldShowCancel" ></ion-searchbar>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor="let movie of movies" col-12 col-md-4 col-xl-3>\n                <ion-card (click)="movieSelected(movie)">\n                    <img src="{{movie.Poster}}" id="poster"/>\n                    <div class="card-title">{{movie.Title}}</div>\n                    <div class="card-subtitle">{{movie.Year}}</div>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/movies/movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>news</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], SerieDetailsPage);
    return SerieDetailsPage;
}());

//# sourceMappingURL=serie-details.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serie_details_serie_details__ = __webpack_require__(105);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_http_api_http__["a" /* ApiHttpProvider */]])
    ], SeriesPage);
    return SeriesPage;
}());

//# sourceMappingURL=series.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies_movies__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__series_series__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_other__ = __webpack_require__(104);
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
        this.moviesRoot = __WEBPACK_IMPORTED_MODULE_3__movies_movies__["a" /* MoviesPage */];
        this.seriesRoot = __WEBPACK_IMPORTED_MODULE_4__series_series__["a" /* SeriesPage */];
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.newsRoot = __WEBPACK_IMPORTED_MODULE_5__news_news__["a" /* NewsPage */];
        this.otherRoot = __WEBPACK_IMPORTED_MODULE_6__other_other__["a" /* OtherPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="moviesRoot" tabTitle="Movies" tabIcon="film"></ion-tab>\n    <ion-tab [root]="seriesRoot" tabTitle="Series" tabIcon="desktop"></ion-tab>\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="newsRoot" tabTitle="News" tabIcon="megaphone"></ion-tab>\n    <ion-tab [root]="otherRoot" tabTitle="Other" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/movie-details/movie-details.module": [
		288,
		6
	],
	"../pages/movies/movies.module": [
		289,
		5
	],
	"../pages/news/news.module": [
		290,
		4
	],
	"../pages/other/other.module": [
		291,
		3
	],
	"../pages/serie-details/serie-details.module": [
		292,
		2
	],
	"../pages/series/series.module": [
		293,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-home',template:/*ion-inline-start:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/jled_UltimateMovieScrapper/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_movies_movies__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_series_series__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_news_news__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_other_other__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_movie_details_movie_details__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_serie_details_serie_details__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_api_http_api_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic3_star_rating__ = __webpack_require__(286);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_serie_details_serie_details__["a" /* SerieDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movies/movies.module#MoviesPageModule', name: 'MoviesPage', segment: 'movies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/serie-details/serie-details.module#SerieDetailsPageModule', name: 'SerieDetailsPage', segment: 'serie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/series/series.module#SeriesPageModule', name: 'SeriesPage', segment: 'series', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16_ionic3_star_rating__["a" /* StarRatingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_serie_details_serie_details__["a" /* SerieDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_api_http_api_http__["a" /* ApiHttpProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(161);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiHttpProvider);
    return ApiHttpProvider;
}());

//# sourceMappingURL=api-http.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map