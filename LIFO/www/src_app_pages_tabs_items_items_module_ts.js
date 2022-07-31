"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_items_items_module_ts"],{

/***/ 9348:
/*!***************************************************!*\
  !*** ./src/app/components/item/item.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemComponent": () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.component.html?ngResource */ 4541);
/* harmony import */ var _item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.component.scss?ngResource */ 5062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let ItemComponent = class ItemComponent {
    constructor() {
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.minus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    quantityPlus() {
        this.add.emit(this.index);
    }
    quantityMinus() {
        this.minus.emit(this.index);
    }
};
ItemComponent.ctorParameters = () => [];
ItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    add: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    minus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-item',
        template: _item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemComponent);



/***/ }),

/***/ 7248:
/*!*****************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantDetailComponent": () => (/* binding */ RestaurantDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _restaurant_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-detail.component.html?ngResource */ 133);
/* harmony import */ var _restaurant_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-detail.component.scss?ngResource */ 6385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let RestaurantDetailComponent = class RestaurantDetailComponent {
    constructor() { }
    ngOnInit() { }
};
RestaurantDetailComponent.ctorParameters = () => [];
RestaurantDetailComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RestaurantDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-restaurant-detail',
        template: _restaurant_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_restaurant_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RestaurantDetailComponent);



/***/ }),

/***/ 2945:
/*!**********************************************************!*\
  !*** ./src/app/pages/tabs/items/items-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageRoutingModule": () => (/* binding */ ItemsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.page */ 1468);




const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_0__.ItemsPage
    },
    {
        path: 'cart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_tabs_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../cart/cart.module */ 465)).then(m => m.CartPageModule)
    },
];
let ItemsPageRoutingModule = class ItemsPageRoutingModule {
};
ItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemsPageRoutingModule);



/***/ }),

/***/ 963:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/items/items.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageModule": () => (/* binding */ ItemsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-routing.module */ 2945);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page */ 1468);
/* harmony import */ var src_app_components_item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/item/item.component */ 9348);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_components_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/restaurant-detail/restaurant-detail.component */ 7248);










let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _items_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        ],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_1__.ItemsPage, src_app_components_item_item_component__WEBPACK_IMPORTED_MODULE_2__.ItemComponent, src_app_components_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_4__.RestaurantDetailComponent]
    })
], ItemsPageModule);



/***/ }),

/***/ 1468:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/items/items.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPage": () => (/* binding */ ItemsPage)
/* harmony export */ });
/* harmony import */ var _home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page.html?ngResource */ 7815);
/* harmony import */ var _items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.page.scss?ngResource */ 6072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);










let ItemsPage = class ItemsPage {
  constructor(navCtrl, route, router, api) {
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.api = api;
    this.data = {};
    this.items = [];
    this.cartData = {};
    this.storedData = {};
    this.model = {
      icon: 'fast-food-outline',
      title: 'No Menu Available'
    };
    this.allItems = [];
    this.categories = [];
    this.veg = false;
    this.restaurants = [];
  }

  ngOnInit() {
    this.getRest();
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);

      if (!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }

      this.id = paramMap.get('restaurantId');
      console.log('new', this.id);
      this.getDish();
      this.getItems();
    });
  }

  getRest() {
    this.api.getAllRestaurants().subscribe(res => {
      this.restaurants = res;
      console.log('ye restront', res);
    });
  }

  getDish() {
    let user = this.id;
    console.log(this.id);
    this.param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams().append('id', this.id);
    this.api.getDishes(this.param).subscribe(res => {
      this.allItems = res;
      console.log('ye menu', res);
    });
  }

  getCart() {
    return _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({
      key: 'cart'
    });
  }

  getItems() {
    var _this = this;

    this.isLoading = true;
    this.data = {};
    this.cartData = {};
    this.storedData = {};
    setTimeout( /*#__PURE__*/(0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = _this.restaurants.filter(x => x._id === _this.id);

      _this.data = data[0];
      _this.items = _this.allItems.filter(x => x.restaurant === _this.data?._id);
      console.log('restaurant: ', _this.data);
      let cart = yield _this.getCart();

      if (cart?.value) {
        _this.storedData = JSON.parse(cart.value);
        console.log('stored data:', _this.storedData);

        if (_this.id == _this.storedData.restaurant._id && _this.allItems.length > 0) {
          _this.allItems.forEach(element => {
            _this.storedData.items.forEach(ele => {
              if (element._id != ele._id) return;
              element.quantity = ele.quantity;
            });
          });
        }

        _this.cartData.totalItem = _this.storedData.totalItem;
        _this.cartData.totalPrice = _this.storedData.totalPrice;
      }

      _this.isLoading = false;
    }), 3000);
  }

  vegOnly(event) {
    this.items = [];

    if (event.detail.checked == true) {
      this.items = this.allItems.filter(x => x.restaurant === this.data?._id && x.veg === true);
    } else this.items = this.allItems.filter(x => x.restaurant === this.data?._id);

    console.log(event.detail.checked);
  }

  quantityPlus(index) {
    try {
      if (this.items[index].quantity == undefined || this.items[index].quantity === 0) {
        this.items[index].quantity = 1;
      } else {
        this.items[index].quantity += 1;
      }

      this.calculate();
    } catch (e) {
      console.log(e);
    }
  }

  quantityMinus(index) {
    try {
      console.log(this.items[index]);

      if (this.items[index].quantity !== 0) {
        this.items[index].quantity -= 1;
      } else {
        this.items[index].quantity = 0;
      }

      this.calculate();
    } catch (e) {
      console.log(e);
    }
  }

  calculate() {
    var _this2 = this;

    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.items);
      _this2.cartData.items = [];

      let item = _this2.items.filter(x => x.quantity > 0); // console.log('added item', item);


      _this2.cartData.items = item;
      _this2.cartData.totalPrice = 0;
      _this2.cartData.totalItem = 0;
      item.forEach(element => {
        _this2.cartData.totalItem += element.quantity;
        _this2.cartData.totalPrice += parseFloat(element.quantity) * parseFloat(element.price);
      });
      _this2.cartData.totalPrice = parseFloat(_this2.cartData.totalPrice).toFixed(2);

      if (_this2.cartData.totalItem == 0) {
        _this2.cartData.totalItem = 0;
        _this2.cartData.totalPrice = 0;
      } // console.log('cart:', this.cartData);


      yield _this2.saveToCart();
    })();
  }

  saveToCart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      console.log(this.cartData);
      _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      });
    } catch (e) {
      console.log(e);
    }
  }

  viewCart() {
    var _this3 = this;

    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.cartData.items && _this3.cartData.items.length > 0) {
        yield _this3.saveToCart();
      }

      _this3.router.navigate([_this3.router.url + '/cart']);
    })();
  }

};

ItemsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}];

ItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-items',
  template: _items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ItemsPage);


/***/ }),

/***/ 5062:
/*!****************************************************************!*\
  !*** ./src/app/components/item/item.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-row {\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 2px;\n  padding: 0.3rem;\n}\nion-item ion-thumbnail {\n  height: 12vh;\n  width: 24vw;\n  padding: 5px;\n}\nion-item ion-thumbnail img {\n  border-radius: 5px;\n  height: 100%;\n}\nion-item ion-list-header {\n  font-size: 1rem;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\nion-item ion-text {\n  font-size: 0.8rem;\n}\nion-item ion-text p {\n  margin-top: 0.2rem;\n}\nion-item .quantity {\n  width: 2rem;\n}\nion-item .add {\n  padding: 0 1.21rem;\n}\nion-item h1 {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\nion-item p {\n  font-weight: lighter;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGUjtBQUdRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRFo7QUFLSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSFI7QUFNSTtFQUNJLGlCQUFBO0FBSlI7QUFLUTtFQUNJLGtCQUFBO0FBSFo7QUFPSTtFQUNJLFdBQUE7QUFMUjtBQU9JO0VBQ0ksa0JBQUE7QUFMUjtBQU9JO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUxSO0FBT0k7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FBTFIiLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuXG4gICAgaW9uLXJvd3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcGFkZGluZzogMC4zcmVtO1xuICAgIH1cbiAgICBcbiAgICBpb24tdGh1bWJuYWlse1xuICAgICAgICBoZWlnaHQ6IDEydmg7XG4gICAgICAgIHdpZHRoOiAyNHZ3O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG5cbiAgICBpb24tdGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIHB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucXVhbnRpdHl7XG4gICAgICAgIHdpZHRoOiAycmVtOyAgICAgIFxuICAgIH1cbiAgICAuYWRke1xuICAgICAgICBwYWRkaW5nOiAwIDEuMjFyZW07XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 6385:
/*!******************************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0YXVyYW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6072:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs/items/items.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\np {\n  font-weight: lighter;\n  font-size: 0.9rem;\n}\n\n.dashedBorderBottom {\n  border-bottom: 1px solid var(--ion-color-medium);\n  padding-bottom: 1vh;\n  margin-bottom: 1vh;\n}\n\n.veg {\n  align-items: center;\n}\n\nion-footer h4, ion-footer p {\n  margin-left: 3%;\n}\n\nion-footer p {\n  font-size: 0.6rem !important;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7QUFJSjs7QUFBSTtFQUNJLGVBQUE7QUFHUjs7QUFESTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7QUFHUiIsImZpbGUiOiJpdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cbnB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uZGFzaGVkQm9yZGVyQm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbn1cbi52ZWd7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWZvb3RlcntcbiAgICBoNCwgcHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlOyBcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 4541:
/*!****************************************************************!*\
  !*** ./src/app/components/item/item.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <img [src]=\"item?.img ? item.img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1Or-t6kJ7zfcoPdwu2iXTXdfdKD93t9aDA&usqp=CAU'\" />\n  </ion-thumbnail>\n  <ion-label>\n    <h4>\n      {{item?.name}}\n    </h4>\n    <ion-text><p>Rs.{{item?.price}}</p></ion-text>\n  </ion-label>\n  <ion-row *ngIf=\"!item?.quantity || !item?.quantity === 0\" (click)=\"quantityPlus()\">\n    <ion-text class=\"add\" color=\"success\">Add</ion-text>\n  </ion-row>\n  <ion-row *ngIf=\"item?.quantity > 0\">\n    <ion-icon color=\"success\" name=\"remove-outline\" (click)=\"quantityMinus()\"></ion-icon>\n    <ion-text class=\"ion-text-center quantity\" color=\"success\">{{item?.quantity}}</ion-text>\n    <ion-icon color=\"success\" name=\"add-outline\" (click)=\"quantityPlus()\"></ion-icon>\n  </ion-row>\n</ion-item>";

/***/ }),

/***/ 133:
/*!******************************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid *ngIf=\"isLoading\" class=\"borderBottom\">\n  <ion-row class=\"ion-padding-horizontal dashedBorderBottom\">\n    <ion-label>\n      <h1><ion-skeleton-text animated style=\"width: 80vw; height: 2vh;\"></ion-skeleton-text></h1>\n      <p><ion-skeleton-text animated style=\"width: 80vw; height: 2vh;\"></ion-skeleton-text></p>\n      <h4><ion-skeleton-text animated style=\"width: 80vw; height: 2vh;\"></ion-skeleton-text></h4>\n    </ion-label>\n  </ion-row>\n  <ion-row class=\"ion-padding-horizontal\">\n    <ion-col size=\"6\">\n      <ion-label class=\"ion-text-center\">\n        <p><ion-skeleton-text animated style=\"width: 15vw;\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 15vw;\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label class=\"ion-text-center\">\n        <p><ion-skeleton-text animated style=\"width: 15vw;\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 15vw;\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>";

/***/ }),

/***/ 7815:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs/items/items.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"md\">\n    <!-- <ion-title>items</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-restaurant-detail [data]=\"data\" [isLoading]=\"isLoading\"></app-restaurant-detail>\n  \n  <ion-grid *ngIf=\"data?.name && !isLoading\" class=\"borderBottom\">\n    <ion-row class=\"ion-padding-horizontal dashedBorderBottom\">\n      <ion-label>\n        <h1>{{data?.name}}</h1>\n        <ion-text><p>Address: {{data?.address}}</p></ion-text>\n        <ion-text><h4>Phone: {{data?.phone}}</h4></ion-text>\n      </ion-label>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\">\n      <ion-col size=\"6\">\n        <ion-label class=\"ion-text-center\">\n          <ion-text>\n            <p>\n              <ion-icon name=\"star\"></ion-icon>{{data?.rating}}\n            </p>\n          </ion-text>\n          <p>Ratings</p>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label class=\"ion-text-center\">\n          <ion-text>\n            <p>\n              {{data?.open_time}}-{{data?.close_time}}\n            </p>\n          </ion-text>\n          <p>Working hours</p>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-empty-screen [model]=\"model\" *ngIf=\"!isLoading && !data?.name\"></app-empty-screen>\n\n  <ion-row class=\"ion-padding veg borderBottomSmall\" *ngIf=\"!!data?.name\">\n    <ion-label>\n      <h4>VEG only</h4>\n    </ion-label>\n    <ion-toggle mode=\"md\" color=\"success\" (ionChange)=\"vegOnly($event)\" [(ngModel)]=\"veg\"></ion-toggle>\n  </ion-row>\n\n  <app-loading-restaurant *ngIf=\"isLoading\"></app-loading-restaurant>\n  <ion-list lines=\"none\" *ngIf=\"!isLoading\">\n    <!-- <ion-list-header>\n      {{category?.name}}\n    </ion-list-header> -->\n    <ng-container *ngFor=\"let item of items; let i = index\">\n      <app-item [item]=\"item\" [index]=\"i\" (add)=\"quantityPlus($event)\" (minus)=\"quantityMinus($event)\"></app-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n\n<ion-footer *ngIf=\"cartData?.totalItem > 0\">\n  <ion-toolbar color=\"success\">\n    <ion-label>\n      <h4>{{cartData?.totalItem}} Item<span *ngIf=\"cartData?.totalItem > 1\">s</span> | Rs.{{cartData?.totalPrice}}</h4>\n      <ion-text color=\"light\">\n        <p>Extra charges may apply</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" fill=\"clear\" color=\"light\" (click)=\"viewCart()\">\n      <ion-icon slot=\"end\" name=\"basket-outline\"></ion-icon>\n      View Cart\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_items_items_module_ts.js.map