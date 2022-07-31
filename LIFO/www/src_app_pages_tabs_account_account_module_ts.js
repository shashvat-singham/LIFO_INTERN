"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_account_account_module_ts"],{

/***/ 1514:
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _orders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.component.html?ngResource */ 473);
/* harmony import */ var _orders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.component.scss?ngResource */ 9880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let OrdersComponent = class OrdersComponent {
    constructor() {
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.help = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    reorderItem() {
        this.reorder.emit(this.order);
    }
    getHelp() {
        this.help.emit(this.order);
    }
};
OrdersComponent.ctorParameters = () => [];
OrdersComponent.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    help: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
OrdersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-orders',
        template: _orders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_orders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrdersComponent);



/***/ }),

/***/ 3899:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/account/account-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 9887);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 4123:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/account/account.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 3899);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 9887);
/* harmony import */ var src_app_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/orders/orders.component */ 1514);








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage, src_app_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_2__.OrdersComponent]
    })
], AccountPageModule);



/***/ }),

/***/ 9887:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var _home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.html?ngResource */ 6786);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 8284);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global/global.service */ 4031);
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/order/order.service */ 4081);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 6578);











let AccountPage = class AccountPage {
  constructor(api, orderService, storage, router, global) {
    this.api = api;
    this.orderService = orderService;
    this.storage = storage;
    this.router = router;
    this.global = global;
    this.param = {};
  }

  ngOnInit() {
    var _this = this;

    this.isLoading = true;
    setTimeout( /*#__PURE__*/(0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getData();
    }), 3000);
  }

  getData() {
    var _this2 = this;

    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let user = yield _this2.storage.getStorage('user'); // this.user = JSON.parse(this.user.value);

      if (user?.value) _this2.user = yield JSON.parse(user.value);
      _this2.param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams().append('id', _this2.user._id);

      _this2.api.getOrders(_this2.param).subscribe(order => {
        _this2.orderList = order;

        for (let i = 0; i < _this2.orderList.length; i++) {
          _this2.orderList[i].orders = JSON.parse(_this2.orderList[i].orders);
        }

        console.log('order data: ', order);
      });

      console.log('dat:', _this2.user);
      _this2.isLoading = false;
    })();
  }

  logout() {
    this.storage.removeStorage('user');
    this.router.navigateByUrl('/login');
  }

  reorder(order) {
    console.log(order);
  }

  getHelp(order) {
    console.log(order);
  }

  ngOnDestroy() {
    if (this.orderSub) this.orderSub.unsubscribe();
  }

};

AccountPage.ctorParameters = () => [{
  type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__.OrderService
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}];

AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-account',
  template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AccountPage);


/***/ }),

/***/ 4031:
/*!***************************************************!*\
  !*** ./src/app/services/global/global.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var _home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let GlobalService = class GlobalService {
  constructor(alertCtrl, toastCtrl, loadingCtrl, modalCtrl) {
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.modalCtrl = modalCtrl;
    this.isLoading = false;
  }

  showAlert(message, header, buttonArray) {
    this.alertCtrl.create({
      header: header ? header : 'Authentication Failed',
      message: message,
      buttons: buttonArray ? buttonArray : ['Okay']
    }).then(alertEl => alertEl.present());
  }

  showToast(msg, color, position, duration = 3000) {
    var _this = this;

    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create({
        message: msg,
        duration: duration,
        color: color,
        position: position
      });
      toast.present();
    })();
  }

  errorToast(msg, duration = 4000) {
    this.showToast(msg ? msg : 'No Internet Connection', 'danger', 'bottom', duration);
  }

  successToast(msg) {
    this.showToast(msg, 'success', 'bottom');
  }

  showLoader(msg, spinner) {
    var _this2 = this;

    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = true;
      return yield _this2.loadingCtrl.create({
        message: msg,
        spinner: spinner ? spinner : 'bubbles'
      }).then(res => {
        res.present().then(() => {
          if (!_this2.isLoading) {
            res.dismiss().then(() => {
              console.log('Aborting');
            });
          }
        });
      }).catch(e => {
        console.log('show loading error: ', e);
      });
    })();
  }

  hideLoader() {
    var _this3 = this;

    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = false;
      return yield _this3.loadingCtrl.dismiss();
    })();
  }

  createModal(options) {
    var _this4 = this;

    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create(options);
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log(data);
      if (data) return data;
    })();
  }

  modalDismiss(val) {
    let data = val ? val : null;
    console.log('modal dismiss: ', data);
    this.modalCtrl.dismiss(data);
  }

  getIcon(title) {
    const name = title.toLowerCase();

    switch (name) {
      case 'home':
        return 'home-outline';

      case 'work':
        return 'breifcase-outline';

      default:
        return 'location-outline';
    }
  }

};

GlobalService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController
}];

GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], GlobalService);


/***/ }),

/***/ 4081:
/*!*************************************************!*\
  !*** ./src/app/services/order/order.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ 5146);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ 6578);






let OrderService = class OrderService {
  constructor(api, storage) {
    this.api = api;
    this.storage = storage;
    this._orders = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
  }

  get orders() {
    return this._orders.asObservable();
  }

  getOrders() {
    try {
      const orders = this.api.orders; // console.log(orders);

      this._orders.next(orders);
    } catch (e) {
      throw e;
    }
  }

  placeOrder(param) {
    var _this = this;

    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        param.orders = JSON.parse(param.orders);
        param.id = '62a57ef83a259afeb8419jhj';
        console.log(); // console.log('order:',param);

        let user = yield _this.storage.getStorage('user');
        user = JSON.parse(user.value); // console.log('placed:',user);

        let orderList = [];
        if (user.orders.length > 0) orderList = [...user.orders];
        orderList.push(param);
        user.orders = orderList;

        _this._orders.next(param);

        _this.storage.setStorage('user', JSON.stringify(user));
      } catch (e) {
        throw e;
      }
    })();
  }

};

OrderService.ctorParameters = () => [{
  type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService
}, {
  type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}];

OrderService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], OrderService);


/***/ }),

/***/ 6578:
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 460);




let StorageService = class StorageService {
  constructor() {}

  setStorage(key, value) {
    _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
      key: key,
      value: value
    });
  }

  getStorage(key) {
    return _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
      key: key
    });
  }

  removeStorage(key) {
    return (0,_home_anhad_LIFO_DIR_LIFO_LIFO_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: key
      });
    })();
  }

  clearStorage() {
    _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.clear();
  }

};

StorageService.ctorParameters = () => [];

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 9880:
/*!********************************************************************!*\
  !*** ./src/app/components/orders/orders.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-items {\n  margin-left: 2vw;\n}\nion-items ion-label {\n  font-size: 0.95rem;\n}\np {\n  font-weight: lighter;\n  font-size: 0.7rem;\n}\nion-note {\n  font-size: 0.87rem;\n}\nion-note ion-icon {\n  float: right;\n  margin-top: 0.1rem;\n  padding-left: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFDQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7QUFHSjtBQUZJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFJUiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXN7XG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICB9XG59XG5we1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuaW9uLW5vdGV7XG4gICAgZm9udC1zaXplOiAwLjg3cmVtO1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMC4xcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 8284:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-items {\n  margin-left: 2vw;\n}\nion-items ion-label {\n  font-size: 0.95rem;\n}\np {\n  font-weight: lighter;\n  font-size: 0.7rem;\n}\nion-note {\n  font-size: 0.87rem;\n}\nion-note ion-icon {\n  float: right;\n  margin-top: 0.1rem;\n  padding-left: 0.2rem;\n}\n.alignSpinner {\n  transform: translateY(40vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUNBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtBQUdKO0FBRkk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUlSO0FBREE7RUFDSSwyQkFBQTtBQUlKIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW1ze1xuICAgIG1hcmdpbi1sZWZ0OiAydnc7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgfVxufVxucHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbn1cbmlvbi1ub3Rle1xuICAgIGZvbnQtc2l6ZTogMC44N3JlbTtcbiAgICBpb24taWNvbntcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG4gICAgfVxufVxuLmFsaWduU3Bpbm5lcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDB2aCk7XG59Il19 */";

/***/ }),

/***/ 473:
/*!********************************************************************!*\
  !*** ./src/app/components/orders/orders.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-item-group >\n  <ion-item>\n    <ion-label>\n      <h3>{{order?.restaurant?.name}}</h3>\n      <p>{{order?.restaurant?.address}} | {{order?.restaurant?.phone}}</p>\n      <ion-text><p>Rs.{{order?.grandTotal}}<ion-icon name=\"chevron-forward-outline\"></ion-icon></p></ion-text>\n    </ion-label>\n    <ion-note slot=\"end\" color=\"dark\">\n      {{order?.status}}\n      <ion-icon *ngIf=\"order?.status == 'Picked Up'\" name=\"checkmark-circle-outline\" color=\"success\"></ion-icon>\n      <ion-icon *ngIf=\"order?.status != 'Picked Up'\" name=\"alert-circle-outline\" color=\"danger\"></ion-icon>\n    </ion-note>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"borderBottom\">\n    <ion-label>\n      <ion-text color=\"dark\" *ngFor=\"let item of order?.orders\">\n        <p>{{item?.name}} x {{item?.quantity}}</p>\n      </ion-text>\n      <p>{{order?.time}}</p>\n      <!-- <ion-row>\n        <ion-col size=\"6\">\n          <ion-button fill=\"outline\" expand=\"block\" color=\"primary\" (click)=\"reorderItem()\">REORDER</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button fill=\"outline\" expand=\"block\" color=\"dark\" (click)=\"getHelp()\">GET HELP</ion-button>\n        </ion-col>\n      </ion-row> -->\n    </ion-label>\n  </ion-item>\n</ion-item-group>";

/***/ }),

/***/ 6786:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>My Account</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"logout()\">\n        <ion-icon name=\"power-outline\" color=\"light\" slot=\"icon-only\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"isLoading\" class=\"ion-text-center alignSpinner\">\n    <ion-spinner color=\"crescent\"></ion-spinner>\n  </div>\n\n  <ng-container *ngIf=\"!isLoading\">\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-button slot=\"end\" fill=\"clear\">EDIT</ion-button>\n        <ion-label>\n          <ion-text class=\"ion-text-uppercase\"><h4>{{user?.name}}</h4></ion-text>\n          <p>{{user.phone}} | {{user.email}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        <ion-label color=\"primary\">PAST ORDERS</ion-label>\n      </ion-list-header>\n      <ion-text class=\"ion-text-center\" *ngIf=\"!orderList || orderList.length == 0\"><p>No orders placed yet</p></ion-text>\n      <app-orders \n      *ngFor=\"let order of orderList\" [order]=\"order\" (reorder)=\"reorder($event)\" (help)=\"getHelp($event)\">\n    </app-orders>\n\n    </ion-list>\n  </ng-container>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_account_account_module_ts.js.map