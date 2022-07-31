"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_home_home_module_ts"],{

/***/ 3994:
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _banner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.component.html?ngResource */ 5509);
/* harmony import */ var _banner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.component.scss?ngResource */ 4490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let BannerComponent = class BannerComponent {
    constructor() {
        this.slideOptions = {
            speed: 300,
            autoplay: true,
            loop: true,
        };
    }
    ngOnInit() { }
};
BannerComponent.ctorParameters = () => [];
BannerComponent.propDecorators = {
    bannerImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
BannerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-banner',
        template: _banner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_banner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BannerComponent);



/***/ }),

/***/ 4874:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9200);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 6302:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4874);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9200);
/* harmony import */ var src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/banner/banner.component */ 3994);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 5642);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent]
    })
], HomePageModule);



/***/ }),

/***/ 9200:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 2150);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 9801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);





let HomePage = class HomePage {
    constructor(api) {
        this.api = api;
        this.banners = [];
        this.restaurants = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.api.getAllRestaurants().subscribe((res) => {
            this.restaurants = res;
            this.isLoading = false;
        });
        this.banners = this.api.banners;
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 4490:
/*!********************************************************************!*\
  !*** ./src/app/components/banner/banner.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-slides {\n  height: 30vh;\n}\nion-slides div {\n  height: 30vh;\n  width: 30vh;\n  margin: auto;\n  background-position: center;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFFUiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVze1xuICAgIGhlaWdodDogMzB2aDtcbiAgICBkaXZ7XG4gICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgd2lkdGg6IDMwdmg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 9801:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-icon {\n  font-size: 1rem;\n}\n\nion-label h4 {\n  font-size: 1.2rem;\n}\n\nion-label p {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQUFSOztBQUtJO0VBQ0ksaUJBQUE7QUFGUjs7QUFJSTtFQUNJLGlCQUFBO0FBRlIiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxufVxuXG5pb24tbGFiZWx7XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 5509:
/*!********************************************************************!*\
  !*** ./src/app/components/banner/banner.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"borderBottom\" *ngIf=\"bannerImages.length > 0\">\n  <ion-slides pager=\"false\" [options]=\"slideOptions\">\n    <ion-slide *ngFor=\"let image of bannerImages\">\n      <div [ngStyle]=\"{'background-image':'url(' + image.banner + ')'}\"></div>\n    </ion-slide>\n  </ion-slides>\n</div>";

/***/ }),

/***/ 2150:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\">\n    <ion-title color=\"dark\">\n      <span>Home</span>\n      <ion-icon color=\"dark\" name='chevron-down-outline'></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"isLoading\">\n    <ion-skeleton-text animated style=\"height: 25vh\"></ion-skeleton-text>\n  </div>\n\n  <app-banner *ngIf=\"!isLoading\" [bannerImages]=\"banners\"></app-banner>\n\n  <app-loading-restaurant *ngIf=\"isLoading\"></app-loading-restaurant>\n\n  <ion-list *ngIf=\"!isLoading\">\n    <ion-list-header class=\"ion-margin-bottom\">\n      <ion-label>\n        <h4>Nearby Restaurants</h4>\n        <p>Discover unique taste</p>\n      </ion-label>\n    </ion-list-header>\n    <ion-item-group *ngIf=\"restaurants?.length > 0\">\n      <app-restaurant \n        *ngFor=\"let restaurant of restaurants\" \n        [restaurant]=\"restaurant\"\n        [routerLink]=\"['/', 'tabs', 'restaurants', restaurant._id]\"></app-restaurant>\n    </ion-item-group>\n  </ion-list>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_home_module_ts.js.map