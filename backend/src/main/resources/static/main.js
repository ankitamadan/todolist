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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_model/Item.ts":
/*!********************************!*\
  !*** ./src/app/_model/Item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(name, id) {
        this.name = name;
        this.id = id;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_items_http_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/items/http-items.service */ "./src/app/_services/items/http-items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.itemsStrategy = new _services_items_http_items_service__WEBPACK_IMPORTED_MODULE_2__["HttpItemsService"](http);
    }
    ApiService.prototype.getCurrentItem = function () {
        return this.itemsStrategy.getCurrentItem();
    };
    ;
    ApiService.prototype.setCurrentItem = function (item) {
        this.itemsStrategy.setCurrentItem(item);
    };
    ;
    ApiService.prototype.getItems = function () {
        return this.itemsStrategy.getItems();
    };
    ;
    ApiService.prototype.removeItem = function (item) {
        return this.itemsStrategy.removeItem(item);
    };
    ;
    ApiService.prototype.addItem = function (item) {
        return this.itemsStrategy.addItem(item.name);
    };
    ;
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/_services/items/abstract-items.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/_services/items/abstract-items.service.ts ***!
  \***********************************************************/
/*! exports provided: AbstractItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractItemsService", function() { return AbstractItemsService; });
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

var AbstractItemsService = /** @class */ (function () {
    function AbstractItemsService() {
    }
    AbstractItemsService.prototype.getCurrentItem = function () {
        return this.currentItem;
    };
    ;
    AbstractItemsService.prototype.setCurrentItem = function (item) {
        this.currentItem = item;
    };
    ;
    AbstractItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AbstractItemsService);
    return AbstractItemsService;
}());



/***/ }),

/***/ "./src/app/_services/items/http-items.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/items/http-items.service.ts ***!
  \*******************************************************/
/*! exports provided: HttpItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpItemsService", function() { return HttpItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_model/Item */ "./src/app/_model/Item.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _abstract_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-items.service */ "./src/app/_services/items/abstract-items.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpItemsService = /** @class */ (function (_super) {
    __extends(HttpItemsService, _super);
    function HttpItemsService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = '/todoList/';
        return _this;
    }
    HttpItemsService.prototype.getItems = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url).subscribe(function (response) {
                var items = response.map(function (item) { return new _model_Item__WEBPACK_IMPORTED_MODULE_1__["Item"](item.name, item.id); });
                resolve(items);
            });
        });
    };
    ;
    HttpItemsService.prototype.removeItem = function (item) {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.url + 'delete', null, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('todoItem', item)
        });
        return this.http.request(req).toPromise();
    };
    HttpItemsService.prototype.addItem = function (item) {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.url + 'add', null, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('todoItem', item)
        });
        return this.http.request(req).toPromise();
    };
    HttpItemsService.prototype.updateItem = function (item) {
        return this.http.put(this.url + '/' + item.id, item).toPromise();
    };
    HttpItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpItemsService);
    return HttpItemsService;
}(_abstract_items_service__WEBPACK_IMPORTED_MODULE_3__["AbstractItemsService"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist/todolist.component */ "./src/app/todolist/todolist.component.ts");
/* harmony import */ var _new_item_new_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item/new-item.component */ "./src/app/new-item/new-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_2__["TodolistComponent"] },
    { path: 'new-item', component: _new_item_new_item_component__WEBPACK_IMPORTED_MODULE_3__["NewItemComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>{{ title }}</h1>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

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
        this.title = 'To-do list';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolist/todolist.component */ "./src/app/todolist/todolist.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _new_item_new_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item/new-item.component */ "./src/app/new-item/new-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_3__["TodolistComponent"],
                _new_item_new_item_component__WEBPACK_IMPORTED_MODULE_5__["NewItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/new-item/new-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-item/new-item.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-item/new-item.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-item/new-item.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"newItemForm\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"itemName\">Item name</label>\r\n    <input type=\"text\" style=\"margin-left: 590px; max-width: 200px;\" formControlName=\"name\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n    <a routerLink=\"/home\" class=\"btn btn-link\">Cancel</a>\r\n  </div>\r\n\r\n  <div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '15px' }\"></ngx-loading>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/new-item/new-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-item/new-item.component.ts ***!
  \************************************************/
/*! exports provided: NewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemComponent", function() { return NewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/Item */ "./src/app/_model/Item.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewItemComponent = /** @class */ (function () {
    function NewItemComponent(service, router, builder) {
        this.service = service;
        this.router = router;
        this.builder = builder;
        this.loading = false;
        this.newItemForm = builder.group(new _model_Item__WEBPACK_IMPORTED_MODULE_1__["Item"](""));
    }
    NewItemComponent.prototype.ngOnInit = function () {
    };
    NewItemComponent.prototype.onSubmit = function () {
        this.addItem(this.newItemForm.value);
    };
    NewItemComponent.prototype.addItem = function (item) {
        var _this = this;
        this.loading = true;
        this.service.addItem(item)
            .then(function () {
            console.log('ITEM ADDED');
            _this.loading = false;
            _this.router.navigateByUrl('/home');
        })
            .catch(function (err) { return console.log(err); });
    };
    NewItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-item',
            template: __webpack_require__(/*! ./new-item.component.html */ "./src/app/new-item/new-item.component.html"),
            styles: [__webpack_require__(/*! ./new-item.component.css */ "./src/app/new-item/new-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], NewItemComponent);
    return NewItemComponent;
}());



/***/ }),

/***/ "./src/app/todolist/todolist.component.css":
/*!*************************************************!*\
  !*** ./src/app/todolist/todolist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item span{\r\n\tmargin-right: 2em;\r\n}"

/***/ }),

/***/ "./src/app/todolist/todolist.component.html":
/*!**************************************************!*\
  !*** ./src/app/todolist/todolist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\r\n\t\t<ul class=\"list-group\">\r\n\t\t\t<li class=\"list-group-item list-group-item-action\" *ngFor=\"let item of items\" >\r\n\r\n\t\t\t      <span>{{item.name}}</span>\r\n\t\t\t      <div class=\"pull-right\">\r\n\t\t\t          <button class=\"btn btn-danger btn-xs fa fa-trash-o\" (click)=\"onRemove(item.name)\"></button>\r\n\t\t\t      </div>\r\n\t\t\t</li>\r\n\r\n\t\t</ul>\r\n</div>\r\n\r\n<div class=\"row justify-content-md-center\">\r\n\t\t<nav>\r\n\t\t\t<a routerLink=\"/new-item\" class=\"pull-right\">New item</a>\r\n\t\t</nav>\r\n</div>\r\n\r\n\r\n<div class=\"my-container\">\r\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '15px' }\"></ngx-loading>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/todolist/todolist.component.ts":
/*!************************************************!*\
  !*** ./src/app/todolist/todolist.component.ts ***!
  \************************************************/
/*! exports provided: TodolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponent", function() { return TodolistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
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



var TodolistComponent = /** @class */ (function () {
    function TodolistComponent(service, router) {
        this.service = service;
        this.router = router;
        this.loading = false;
        this.updateLocalItems();
    }
    TodolistComponent.prototype.updateLocalItems = function () {
        var _this = this;
        console.log('Updating items');
        this.loading = true;
        this.service.getItems().then(function (items) {
            _this.items = items;
            _this.loading = false;
        });
    };
    TodolistComponent.prototype.ngOnInit = function () {
    };
    TodolistComponent.prototype.onRemove = function (item) {
        var _this = this;
        this.loading = true;
        this.service.removeItem(item).then(function () {
            _this.updateLocalItems();
            _this.loading = false;
        });
    };
    TodolistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todolist',
            template: __webpack_require__(/*! ./todolist.component.html */ "./src/app/todolist/todolist.component.html"),
            styles: [__webpack_require__(/*! ./todolist.component.css */ "./src/app/todolist/todolist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TodolistComponent);
    return TodolistComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backendUrl: "http://localhost:8080/todoList/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\ankita\flexdapps\todolistapp\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map