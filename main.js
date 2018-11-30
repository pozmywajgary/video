(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{display:block;}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxjQUFjLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e2Rpc3BsYXk6YmxvY2s7fVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"styles\">\r\n<h1>{{ title }}</h1>\r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Piotr B';
        this.color = 'red';
    }
    Object.defineProperty(AppComponent.prototype, "styles", {
        get: function () {
            return {
                'background': this.color,
                'color': 'black'
            };
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _videos_videos_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videos/videos.module */ "./src/app/videos/videos.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _videos_videos_module__WEBPACK_IMPORTED_MODULE_4__["VideosModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/latest-video.service.ts":
/*!*****************************************!*\
  !*** ./src/app/latest-video.service.ts ***!
  \*****************************************/
/*! exports provided: LatestVideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestVideoService", function() { return LatestVideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LatestVideoService = /** @class */ (function () {
    function LatestVideoService() {
    }
    LatestVideoService.prototype.fetchMovies = function () {
        return window.fetch('/assets/db.json')
            .then(function (response) { return response.json(); });
    };
    LatestVideoService.prototype.fetchMovieById = function (movieId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, movies;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.fetch('/assets/db.json')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        movies = _a.sent();
                        return [2 /*return*/, movies.find(function (movie) {
                                return movie.id === movieId;
                            })];
                }
            });
        });
    };
    LatestVideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LatestVideoService);
    return LatestVideoService;
}());



/***/ }),

/***/ "./src/app/page-latest-video-list/page-latest-video-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/page-latest-video-list/page-latest-video-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtbGF0ZXN0LXZpZGVvLWxpc3QvcGFnZS1sYXRlc3QtdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-latest-video-list/page-latest-video-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/page-latest-video-list/page-latest-video-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ostatnie</h2>\n<app-video-list></app-video-list>\n"

/***/ }),

/***/ "./src/app/page-latest-video-list/page-latest-video-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/page-latest-video-list/page-latest-video-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageLatestVideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLatestVideoListComponent", function() { return PageLatestVideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageLatestVideoListComponent = /** @class */ (function () {
    function PageLatestVideoListComponent() {
    }
    PageLatestVideoListComponent.prototype.ngOnInit = function () {
    };
    PageLatestVideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-latest-video-list',
            template: __webpack_require__(/*! ./page-latest-video-list.component.html */ "./src/app/page-latest-video-list/page-latest-video-list.component.html"),
            styles: [__webpack_require__(/*! ./page-latest-video-list.component.css */ "./src/app/page-latest-video-list/page-latest-video-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageLatestVideoListComponent);
    return PageLatestVideoListComponent;
}());



/***/ }),

/***/ "./src/app/page-video-not-found/page-video-not-found.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/page-video-not-found/page-video-not-found.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtdmlkZW8tbm90LWZvdW5kL3BhZ2UtdmlkZW8tbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-video-not-found/page-video-not-found.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/page-video-not-found/page-video-not-found.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>nie ma</h2>"

/***/ }),

/***/ "./src/app/page-video-not-found/page-video-not-found.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/page-video-not-found/page-video-not-found.component.ts ***!
  \************************************************************************/
/*! exports provided: PageVideoNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoNotFoundComponent", function() { return PageVideoNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageVideoNotFoundComponent = /** @class */ (function () {
    function PageVideoNotFoundComponent() {
    }
    PageVideoNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageVideoNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-video-not-found',
            template: __webpack_require__(/*! ./page-video-not-found.component.html */ "./src/app/page-video-not-found/page-video-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-video-not-found.component.css */ "./src/app/page-video-not-found/page-video-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageVideoNotFoundComponent);
    return PageVideoNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/page-video/page-video.component.css":
/*!*****************************************************!*\
  !*** ./src/app/page-video/page-video.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtdmlkZW8vcGFnZS12aWRlby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-video/page-video.component.html":
/*!******************************************************!*\
  !*** ./src/app/page-video/page-video.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>wybrany film</h2>\n<app-video-detail [video]=\"movie\"></app-video-detail>\n"

/***/ }),

/***/ "./src/app/page-video/page-video.component.ts":
/*!****************************************************!*\
  !*** ./src/app/page-video/page-video.component.ts ***!
  \****************************************************/
/*! exports provided: PageVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoComponent", function() { return PageVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _latest_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../latest-video.service */ "./src/app/latest-video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageVideoComponent = /** @class */ (function () {
    function PageVideoComponent(activatedRoute, latestVideoService) {
        this.activatedRoute = activatedRoute;
        this.latestVideoService = latestVideoService;
        this.movie = null;
    }
    PageVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var movieId = params['id'];
            _this.latestVideoService.fetchMovieById(movieId)
                .then(function (movie) {
                _this.movie = movie;
            });
        });
    };
    PageVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-video',
            template: __webpack_require__(/*! ./page-video.component.html */ "./src/app/page-video/page-video.component.html"),
            providers: [
                _latest_video_service__WEBPACK_IMPORTED_MODULE_2__["LatestVideoService"]
            ],
            styles: [__webpack_require__(/*! ./page-video.component.css */ "./src/app/page-video/page-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _latest_video_service__WEBPACK_IMPORTED_MODULE_2__["LatestVideoService"]])
    ], PageVideoComponent);
    return PageVideoComponent;
}());



/***/ }),

/***/ "./src/app/video-detail/video-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/video-detail/video-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWRldGFpbC92aWRlby1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/video-detail/video-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/video-detail/video-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<fieldset *ngIf=\"video\">\n  <legend>Film</legend>\n  <h2 [routerLink]=\"['/video/' + video.id]\">\n    {{ video.title }}\n    <small>\n      ( {{ video.year }} )\n    </small>\n  </h2>\n  <p>\n    Czas trwania: {{ video.duration }}\n  </p>\n  <p>{{ video.description }}</p>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/video-detail/video-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-detail/video-detail.component.ts ***!
  \********************************************************/
/*! exports provided: VideoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailComponent", function() { return VideoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoDetailComponent = /** @class */ (function () {
    function VideoDetailComponent() {
        this.video = null;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoDetailComponent.prototype, "video", void 0);
    VideoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-detail',
            template: __webpack_require__(/*! ./video-detail.component.html */ "./src/app/video-detail/video-detail.component.html"),
            styles: [__webpack_require__(/*! ./video-detail.component.css */ "./src/app/video-detail/video-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());



/***/ }),

/***/ "./src/app/video-list/video-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/video-list/video-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-list/video-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-list/video-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"movies.length === 0\">nie ma danych</p>\n<ul>\n  <li *ngFor=\"let movie of movies\">\n<app-video-detail [video]=\"movie\"></app-video-detail>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/video-list/video-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-list/video-list.component.ts ***!
  \****************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _latest_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../latest-video.service */ "./src/app/latest-video.service.ts");



var VideoListComponent = /** @class */ (function () {
    function VideoListComponent(latestVideoService) {
        this.latestVideoService = latestVideoService;
        this.movies = [];
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.latestVideoService.fetchMovies()
            .then(function (movies) {
            _this.movies = movies;
        });
    };
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/video-list/video-list.component.html"),
            providers: [
                _latest_video_service__WEBPACK_IMPORTED_MODULE_2__["LatestVideoService"]
            ],
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/video-list/video-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_latest_video_service__WEBPACK_IMPORTED_MODULE_2__["LatestVideoService"]])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/videos/videos-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VideosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosRoutingModule", function() { return VideosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_latest_video_list_page_latest_video_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-latest-video-list/page-latest-video-list.component */ "./src/app/page-latest-video-list/page-latest-video-list.component.ts");
/* harmony import */ var _page_video_page_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page-video/page-video.component */ "./src/app/page-video/page-video.component.ts");
/* harmony import */ var _page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page-video-not-found/page-video-not-found.component */ "./src/app/page-video-not-found/page-video-not-found.component.ts");






var routes = [
    {
        path: '',
        component: _page_latest_video_list_page_latest_video_list_component__WEBPACK_IMPORTED_MODULE_3__["PageLatestVideoListComponent"]
    },
    {
        path: 'video/:id',
        component: _page_video_page_video_component__WEBPACK_IMPORTED_MODULE_4__["PageVideoComponent"]
    },
    {
        path: 'video-not-found',
        component: _page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageVideoNotFoundComponent"]
    }
];
var VideosRoutingModule = /** @class */ (function () {
    function VideosRoutingModule() {
    }
    VideosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VideosRoutingModule);
    return VideosRoutingModule;
}());



/***/ }),

/***/ "./src/app/videos/videos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/videos/videos.module.ts ***!
  \*****************************************/
/*! exports provided: VideosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosModule", function() { return VideosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _videos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos-routing.module */ "./src/app/videos/videos-routing.module.ts");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");
/* harmony import */ var _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../video-detail/video-detail.component */ "./src/app/video-detail/video-detail.component.ts");
/* harmony import */ var _page_latest_video_list_page_latest_video_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page-latest-video-list/page-latest-video-list.component */ "./src/app/page-latest-video-list/page-latest-video-list.component.ts");
/* harmony import */ var _page_video_page_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../page-video/page-video.component */ "./src/app/page-video/page-video.component.ts");
/* harmony import */ var _page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../page-video-not-found/page-video-not-found.component */ "./src/app/page-video-not-found/page-video-not-found.component.ts");









var VideosModule = /** @class */ (function () {
    function VideosModule() {
    }
    VideosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_4__["VideoListComponent"], _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_5__["VideoDetailComponent"], _page_latest_video_list_page_latest_video_list_component__WEBPACK_IMPORTED_MODULE_6__["PageLatestVideoListComponent"], _page_video_page_video_component__WEBPACK_IMPORTED_MODULE_7__["PageVideoComponent"], _page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageVideoNotFoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _videos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideosRoutingModule"]
            ],
            exports: [
                _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_4__["VideoListComponent"]
            ]
        })
    ], VideosModule);
    return VideosModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\video\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map