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

/***/ "./src/app/CartItem.ts":
/*!*****************************!*\
  !*** ./src/app/CartItem.ts ***!
  \*****************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(phone, buying) {
        this.phone = phone;
        this.buying = buying;
    }
    return CartItem;
}());



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
/* harmony import */ var _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-page/checkout-page.component */ "./src/app/checkout-page/checkout-page.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-page/products-page.component */ "./src/app/products-page/products-page.component.ts");
/* harmony import */ var _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-page/sign-in-page.component */ "./src/app/sign-in-page/sign-in-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'phones', component: _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_4__["ProductsPageComponent"] },
    { path: 'Details/:id', component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_1__["DetailsPageComponent"] },
    { path: 'Products', component: _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_4__["ProductsPageComponent"] },
    { path: 'SignIn', component: _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_5__["SignInPageComponent"] },
    { path: 'Checkout', component: _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_0__["CheckoutPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-messages>  </app-messages>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: monospace; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-page/sign-in-page.component */ "./src/app/sign-in-page/sign-in-page.component.ts");
/* harmony import */ var _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-page/products-page.component */ "./src/app/products-page/products-page.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout-page/checkout-page.component */ "./src/app/checkout-page/checkout-page.component.ts");
/* harmony import */ var _confirmation_page_confirmation_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirmation-page/confirmation-page.component */ "./src/app/confirmation-page/confirmation-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _phones_phones_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./phones/phones.component */ "./src/app/phones/phones.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: 'Home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'home', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'signin', redirectTo: '/SignIn', pathMatch: 'full' },
    { path: 'products', redirectTo: '/Products', pathMatch: 'full' },
    { path: 'detail', redirectTo: '/Details', pathMatch: 'full' },
    { path: 'checkout', redirectTo: '/Checkout', pathMatch: 'full' },
    { path: 'confirmation', redirectTo: '/Confirmation', pathMatch: 'full' },
    { path: 'SignIn', component: _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_6__["SignInPageComponent"] },
    { path: 'Products', component: _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_7__["ProductsPageComponent"] },
    { path: 'Details', component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_8__["DetailsPageComponent"] },
    { path: 'Checkout', component: _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutPageComponent"] },
    { path: 'Confirmation', component: _confirmation_page_confirmation_page_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationPageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_6__["SignInPageComponent"],
                _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_7__["ProductsPageComponent"],
                _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_8__["DetailsPageComponent"],
                _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutPageComponent"],
                _confirmation_page_confirmation_page_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationPageComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _phones_phones_component__WEBPACK_IMPORTED_MODULE_13__["PhonesComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = /** @class */ (function () {
    function CartService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    CartService.prototype.addItem = function (id, arg1) {
        throw new Error("Method not implemented.");
    };
    CartService.prototype.addToCart = function (id, qty) {
        var username = this.cookieService.get("user");
        var item = { "prod_id": id, "qty": qty };
        var url = "https://freedomphones-zuul-svc.herokuapp.com/cart-service/addItem/" + username;
        return this.http.post(url, item);
    };
    CartService.prototype.getItems = function () {
        var username = this.cookieService.get("user");
        var url = "https://freedomphones-zuul-svc.herokuapp.com/cart-service/getCart/" + username;
        return this.http.get(url);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/checkout-page/checkout-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/checkout-page/checkout-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"top\">\n<h2>Shopping Cart</h2>\n<div *ngIf=\"!loading\">\n  <div *ngFor=\"let p of items\">\n    <span>Name: {{p.phone.name}}</span>\n    <br>\n    <span>Quantity: {{p.buying}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/checkout-page/checkout-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/checkout-page/checkout-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 200px;\n  height: 300px; }\n\nh2 {\n  text-align: center;\n  padding-top: 3%;\n  color: #191D32; }\n\n.container {\n  padding-top: 4%;\n  text-align: center; }\n\nh4 {\n  display: inline;\n  -webkit-padding-start: 5%;\n          padding-inline-start: 5%;\n  -webkit-padding-end: 5%;\n          padding-inline-end: 5%;\n  color: #191D32; }\n\nbutton, select {\n  color: #841c26;\n  font-size: 20px;\n  border-radius: 2px;\n  border: none;\n  text-align: right;\n  background-color: white;\n  height: 90px; }\n\n.column {\n  float: left;\n  width: 20%;\n  padding: 3%; }\n\n#row {\n  overflow: scroll; }\n\na {\n  -webkit-padding-start: 5%;\n          padding-inline-start: 5%;\n  -webkit-padding-end: 5%;\n          padding-inline-end: 5%;\n  padding-left: 3%;\n  padding-top: 3%;\n  float: left;\n  width: 30%;\n  padding: 3%;\n  color: #565264;\n  font-size: 35px;\n  text-align: center;\n  margin: 35%; }\n\na:hover, a:active {\n  text-decoration: underline; }\n\n.bottom {\n  align-content: center;\n  text-align: center; }\n\nfooter {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 100px;\n  width: 100%;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/checkout-page/checkout-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/checkout-page/checkout-page.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageComponent", function() { return CheckoutPageComponent; });
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _phone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../phone.service */ "./src/app/phone.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CartItem */ "./src/app/CartItem.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutPageComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function CheckoutPageComponent(phoneService, cartService) {
        this.phoneService = phoneService;
        this.cartService = cartService;
        this.items = [];
        this.loading = true;
    }
    CheckoutPageComponent.prototype.ngOnInit = function () {
        this.getPhones();
        console.log(this.items);
        this.loading = false;
    };
    CheckoutPageComponent.prototype.getPhones = function () {
        var _this = this;
        this.cartService.getItems().subscribe(function (response) {
            var _loop_1 = function (item) {
                _this.phoneService.getPhone(item).subscribe(function (Item) {
                    var new_item = new _CartItem__WEBPACK_IMPORTED_MODULE_3__["CartItem"](Item, response.items[item].quantity);
                    _this.items.push(new_item);
                }, function (error) { console.log(error); });
            };
            for (var item in response.items) {
                _loop_1(item);
            }
        }, function (error) {
        }, function () {
        });
    };
    ;
    CheckoutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-checkout-page',
            template: __webpack_require__(/*! ./checkout-page.component.html */ "./src/app/checkout-page/checkout-page.component.html"),
            styles: [__webpack_require__(/*! ./checkout-page.component.scss */ "./src/app/checkout-page/checkout-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_phone_service__WEBPACK_IMPORTED_MODULE_1__["PhoneService"], _cart_service__WEBPACK_IMPORTED_MODULE_0__["CartService"]])
    ], CheckoutPageComponent);
    return CheckoutPageComponent;
}());



/***/ }),

/***/ "./src/app/confirmation-page/confirmation-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/confirmation-page/confirmation-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/confirmation-page/confirmation-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/confirmation-page/confirmation-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirmation-page/confirmation-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/confirmation-page/confirmation-page.component.ts ***!
  \******************************************************************/
/*! exports provided: ConfirmationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPageComponent", function() { return ConfirmationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationPageComponent = /** @class */ (function () {
    function ConfirmationPageComponent() {
    }
    ConfirmationPageComponent.prototype.ngOnInit = function () {
    };
    ConfirmationPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-page',
            template: __webpack_require__(/*! ./confirmation-page.component.html */ "./src/app/confirmation-page/confirmation-page.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-page.component.scss */ "./src/app/confirmation-page/confirmation-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationPageComponent);
    return ConfirmationPageComponent;
}());



/***/ }),

/***/ "./src/app/details-page/details-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-header></app-header>\n\n <div *ngIf=\"phone\">\n \n  <h1><u>{{phone.name}} Phone Details</u></h1>\n  <div>\n  <div class =\"column\"><img src = {{phone.picture.highRes}}> </div>\n  <div class =\"column1\"><h4><u>Description:</u> {{phone.description}} </h4> </div>\n  <div class=\"column1\"> <h4><u>Price:</u> ${{phone.price}}</h4> </div>\n  <div class=\"column1\"><h4><u>Quantity: </u>{{phone.qty}}</h4></div>\n  <div class=\"column1\"><h4><u>Buy: </u> </h4>\n    <div class=\"input-group\">\n        <div class =\"input\"><input id=\"qunatityWanted\" type=\"text\" class=\"form-control\" name=\"qunatityWanted\" placeholder=\"Enter a number\"></div>\n        </div> </div>\n</div>\n<a routerLink=\"/Products\"> Back to Products Page </a>\n</div>"

/***/ }),

/***/ "./src/app/details-page/details-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  padding-top: 3%;\n  color: #191D32; }\n\nu {\n  color: #191D32; }\n\na {\n  padding: 3%;\n  color: #841C26; }\n\nimg {\n  width: 300px;\n  height: 500px; }\n\n.column {\n  float: left;\n  width: 30%;\n  padding-top: 1%;\n  padding-left: 3%; }\n\n.column1 {\n  float: left;\n  width: 70%;\n  padding-left: 3%;\n  padding-top: 1%; }\n\nh4 {\n  color: #565264; }\n\n.input {\n  padding-left: 5%; }\n"

/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var _phone_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../phone.service */ "./src/app/phone.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(route, 
    // tslint:disable-next-line:no-shadowed-variable
    Phone, location) {
        var _this = this;
        this.route = route;
        this.Phone = Phone;
        this.location = location;
        this.route.params.subscribe(function (params) { return _this.phone_id$ = params.id; });
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Phone.getPhone(this.phone_id$).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        function (Phone) { return _this.phone = Phone; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], DetailsPageComponent.prototype, "phone_id$", void 0);
    DetailsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.scss */ "./src/app/details-page/details-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _phone_service__WEBPACK_IMPORTED_MODULE_0__["PhoneService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-dark {\n  width: 100%;\n  position: absolute;\n  height: 40px; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Freedom Phones</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li>\n          <a class=\"nav-link\" href=\"/phones\">Products</a>\n      </li>\n      <li>\n          <a class=\"nav-link\" *ngIf=\"cookieService.get('user')\" (click)=logout()>Logout</a>\n      </li>\n      <li>\n          <a class=\"nav-link\" href=\"/SignIn\" *ngIf=\"!cookieService.get('user')\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.cookieService.delete("user");
        this.router.navigate(["/SignIn"]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<body>\n  <h1>Freedom Phones</h1>\n  <h3> Freedom is ringining, will you answer the call?</h3>\n  <h4>Sign in to view our range of phones we offer!</h4>\n  <a routerLink=\"/SignIn\"><button>Sign In</button></a>\n  <br/>\n  <img src=\"https://images.pexels.com/photos/1083622/pexels-photo-1083622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n\n</body>\n\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  text-align: center; }\n\n.carousel {\n  width: auto;\n  max-height: 768px;\n  overflow: hidden; }\n\n.carousel .item img {\n  max-height: 50px;\n  min-width: auto; }\n\nimg {\n  width: 55%; }\n\nbutton {\n  color: #841c26;\n  font-size: 20px;\n  border-radius: 2px;\n  border: none;\n  text-align: right;\n  background-color: white;\n  height: 90px; }\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\n\nbody {\n  margin: 2em; }\n\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia; }\n\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\n\nbutton:hover {\n  background-color: #cfd8dc; }\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto; }\n\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px; }\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function MessagesComponent(MessageService) {
        this.MessageService = MessageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/phone.service.ts":
/*!**********************************!*\
  !*** ./src/app/phone.service.ts ***!
  \**********************************/
/*! exports provided: PhoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneService", function() { return PhoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneService = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function PhoneService(http) {
        this.http = http;
    }
    PhoneService.prototype.getPhones = function () {
        return this.http.get('https://freedomphones-db-microservice.herokuapp.com/allPhones');
    };
    PhoneService.prototype.getPhone = function (id) {
        return this.http.get('https://freedomphones-zuul-svc.herokuapp.com/phone-service/findById/' + id);
    };
    PhoneService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PhoneService);
    return PhoneService;
}());



/***/ }),

/***/ "./src/app/phones/phones.component.html":
/*!**********************************************!*\
  !*** ./src/app/phones/phones.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"phones$\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div *ngFor=\"let p of phones$.phones\"> \n        <div class=\"col-lg d-flex\">\n          <div class=\"card flex-fill h-100\" style=\"width:14rem\">\n            <div class=\"card-body\" routerLink=\"/Details/{{p.id}}\">\n              <img class=\"card-img-top\" src = {{p.picture.lowRes}}>\n              <h3 class=\"card-link\">{{p.name}}</h3>\n              <h4 class=\"card-text\">{{p.qty}} in stock</h4>\n              <h4 class=\"card-text\">${{p.price}}</h4>\n            </div>\n            <button class=\"btn btn-primary\" (click)=\"addToCart(p.id, 1)\">Add To Cart</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/phones/phones.component.scss":
/*!**********************************************!*\
  !*** ./src/app/phones/phones.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 10px 0;\n  border: none; }\n\n.container {\n  padding-top: 4%;\n  text-align: center;\n  border: none; }\n\n.card-body {\n  width: 200px;\n  height: 400px;\n  border: none; }\n\n.card-img-top {\n  height: 50%;\n  width: 50%; }\n\n.btn-primary {\n  color: #841c26;\n  font-size: 20px;\n  border-radius: 2px;\n  border: none;\n  text-align: center;\n  background-color: white;\n  height: 90px; }\n\n.card-link {\n  padding-top: 10px;\n  font-size: 25px;\n  border: none; }\n"

/***/ }),

/***/ "./src/app/phones/phones.component.ts":
/*!********************************************!*\
  !*** ./src/app/phones/phones.component.ts ***!
  \********************************************/
/*! exports provided: PhonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesComponent", function() { return PhonesComponent; });
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _phone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../phone.service */ "./src/app/phone.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhonesComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function PhonesComponent(cartService, phoneService, userService, router, cookieService) {
        this.cartService = cartService;
        this.phoneService = phoneService;
        this.userService = userService;
        this.router = router;
        this.cookieService = cookieService;
        this.requestInProgress = true;
    }
    PhonesComponent.prototype.ngOnInit = function () {
        if (!this.cookieService.get("user")) {
            this.router.navigate(["/signin"]);
        }
        this.getPhones();
    };
    PhonesComponent.prototype.getPhones = function () {
        var _this = this;
        this.phoneService.getPhones().subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        function (Phone) { return _this.phones$ = Phone; });
    };
    PhonesComponent.prototype.addToCart = function (id, qty) {
        console.log(id);
        this.cartService.addToCart(id, qty).subscribe(function (result) {
            console.log(result);
        }, function (error) {
        }, function () {
        });
    };
    ;
    PhonesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-phones',
            template: __webpack_require__(/*! ./phones.component.html */ "./src/app/phones/phones.component.html"),
            styles: [__webpack_require__(/*! ./phones.component.scss */ "./src/app/phones/phones.component.scss")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_0__["CartService"], _phone_service__WEBPACK_IMPORTED_MODULE_1__["PhoneService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], PhonesComponent);
    return PhonesComponent;
}());



/***/ }),

/***/ "./src/app/products-page/products-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/products-page/products-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1>Products for Sale</h1>\n<a routerLink=\"/Checkout\">\n<button >View Cart</button> </a>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <app-phones></app-phones>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products-page/products-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/products-page/products-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding-top: 50px;\n  text-align: center;\n  padding-bottom: 25px;\n  color: #191D32; }\n\nhtml, body {\n  overflow: visible;\n  text-align: center;\n  align-content: center; }\n\nfooter {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 100px;\n  width: 100%;\n  overflow: hidden; }\n\nbutton {\n  color: #841c26;\n  font-size: 20px;\n  border-radius: 2px;\n  border: none;\n  text-align: center;\n  background-color: white;\n  height: 90px;\n  align-content: center;\n  margin-left: 45%; }\n\napp-phones {\n  margin: auto; }\n\na {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/products-page/products-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products-page/products-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function() { return ProductsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsPageComponent = /** @class */ (function () {
    function ProductsPageComponent(cartService) {
        this.cartService = cartService;
    }
    ProductsPageComponent.prototype.ngOnInit = function () {
    };
    ProductsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-page',
            template: __webpack_require__(/*! ./products-page.component.html */ "./src/app/products-page/products-page.component.html"),
            styles: [__webpack_require__(/*! ./products-page.component.scss */ "./src/app/products-page/products-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], ProductsPageComponent);
    return ProductsPageComponent;
}());



/***/ }),

/***/ "./src/app/sign-in-page/sign-in-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sign-in-page/sign-in-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br/>\n<div *ngIf=\"messageService.messages.length\" class=\"alert alert-danger\">\n    <div *ngFor=\"let message of messageService.messages\"><strong>Error:</strong> {{ message }} </div>\n</div>\n<div ngNativeValidate>\n    <div class=\"form-group\">\n        <label for=\"inputUser\">User Name</label>\n        <input [(ngModel)]=\"user.username\" type=\"username\" class=\"form-control input-sm\" id=\"username\" placeholder=\"User Name\" required minlength=\"4\" #username=\"ngModel\">\n    </div>\n    <div *ngIf=\"username.invalid && submitted\" class=\"alert alert-danger\">\n        <div *ngIf=\"username.errors.required\">\n            Username is required.\n        </div>\n        <div *ngIf=\"username.errors.minlength\">\n            Username must be at least 4 characters long.\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputPassword\">Password</label>\n        <input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" required minlength=\"4\"  #password=\"ngModel\">\n    </div>\n    <div *ngIf=\"password.invalid && submitted\" class=\"alert alert-danger\">\n        <div *ngIf=\"password.errors.required\">\n            Password is required.\n        </div>\n        <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 4 characters long.\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=authUser()>Login</button>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/sign-in-page/sign-in-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sign-in-page/sign-in-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  width: 250px;\n  padding-left: 25px;\n  padding-top: 10px;\n  display: inline-block;\n  align-content: center; }\n\nbutton {\n  margin-left: 25px; }\n"

/***/ }),

/***/ "./src/app/sign-in-page/sign-in-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sign-in-page/sign-in-page.component.ts ***!
  \********************************************************/
/*! exports provided: SignInPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageComponent", function() { return SignInPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignInPageComponent = /** @class */ (function () {
    function SignInPageComponent(userService, messageService, router, cookieService) {
        this.userService = userService;
        this.messageService = messageService;
        this.router = router;
        this.cookieService = cookieService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.submitted = false;
    }
    SignInPageComponent.prototype.ngOnInit = function () {
        this.user.username = "";
        this.user.password = "";
    };
    SignInPageComponent.prototype.authUser = function () {
        var _this = this;
        this.submitted = true;
        this.userService.authUser(this.user.username).subscribe(function (result) { }, function (error) {
            _this.messageService.add("Username or Password incorrect");
        }, function () {
            _this.cookieService.set("user", _this.user.username);
            _this.messageService.clear();
            _this.router.navigate(["/phones"]);
        });
    };
    SignInPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in-page',
            template: __webpack_require__(/*! ./sign-in-page.component.html */ "./src/app/sign-in-page/sign-in-page.component.html"),
            styles: [__webpack_require__(/*! ./sign-in-page.component.scss */ "./src/app/sign-in-page/sign-in-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], SignInPageComponent);
    return SignInPageComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.authUser = function (username) {
        var url = "https://freedomphones-zuul-svc.herokuapp.com/user-service/getUser/" + username;
        return this.http.get(url);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.User = function (username, password) {
        this.username = username;
        this.password = password;
    };
    return User;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrisforsythe/Documents/Software-Engineering/acmn_proj/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map