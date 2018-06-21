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

module.exports = "<app-header></app-header>\r\n<!-- <app-middlebody></app-middlebody>  -->\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n"

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
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/components/events/events.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/forget/forget.component */ "./src/app/components/forget/forget.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























function tokenGetter() {
    return localStorage.getItem('id_token');
}
var appRoutes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    { path: "events", component: _components_events_events_component__WEBPACK_IMPORTED_MODULE_19__["EventsComponent"] },
    { path: "about", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"] },
    { path: "contact", component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__["ContactusComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
    { path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "welcome", component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_23__["WelcomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "search", component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_25__["SearchComponent"] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "add", component: _components_add_add_component__WEBPACK_IMPORTED_MODULE_24__["AddComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]] },
    { path: "forgot", component: _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_26__["ForgetComponent"] },
    { path: "chat", component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_28__["ChatComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__["ContactusComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _components_events_events_component__WEBPACK_IMPORTED_MODULE_19__["EventsComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_23__["WelcomeComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_25__["SearchComponent"],
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_24__["AddComponent"],
                _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_26__["ForgetComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_28__["ChatComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:3001'],
                        blacklistedRoutes: ['localhost:3001/auth/']
                    }
                })
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_10__["ValidateService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _services_post_service__WEBPACK_IMPORTED_MODULE_27__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --jumbotron-padding-y: 3rem;\r\n}\r\n\r\n.container {\r\n    background-image: url(\"/assets/images/1.png\");\r\n}\r\n\r\n.jumbotron {\r\n    padding-top: var(--jumbotron-padding-y);\r\n    padding-bottom: var(--jumbotron-padding-y);\r\n    margin-bottom: 0;\r\n    background-color:transparent;\r\n    /* background-image: url(\"/assets/images/1.png\"); */\r\n    background-size: cover;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .jumbotron {\r\n        padding-top: calc(var(--jumbotron-padding-y) * 2);\r\n        padding-bottom: calc(var(--jumbotron-padding-y) * 2);\r\n    }\r\n}\r\n\r\n.jumbotron p:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.jumbotron-matter {\r\n    /* font-weight: 300; */\r\n    color:white;\r\n    font-size: 18px;\r\n}\r\n\r\n.jumbotron-heading {\r\n    /* font-weight: 300; */\r\n    color: #fff;\r\n}\r\n\r\n.jumbotron .container {\r\n    max-width: 40rem;\r\n}\r\n\r\nfooter {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\nfooter p {\r\n    margin-bottom: .25rem;\r\n}\r\n\r\n.box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n.album {\r\n    background-image: url(\"/assets/images/1.png\");\r\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div>\r\n        <main role=\"main\">\r\n\r\n            <section class=\"jumbotron text-center\">\r\n                <div class=\"first\">\r\n                    <br><br>\r\n                    <h1 class=\"jumbotron-heading\"><u>ABOUT US</u></h1>\r\n\r\n                    <br><br>\r\n                    <img src=\"assets/images/2.jpg\">\r\n                    <br><br><br><br>\r\n                    <p class=\"jumbotron-matter\"><u><h2>VISION STATEMENT</h2></u> <br>\" Our vision is to educate students from all over India including those from the local and rural areas, so that they become enlightened individuals, improving the living standards of their families,\r\n                        Industry and the Society. We will provide individual attention, high quality of Education to meet the challenges imposed by the rapid growth of technology and globalization.\"</p>\r\n                    <br><br>\r\n                    <p class=\"jumbotron-matter\"><u><h2>MISSION STATEMENT</h2></u></p> <br>\r\n                    <p class=\"jumbotron-matter\">\"To establish the School of Engineering / School of Computing / School of Management for ensuring proper linkages between planning of Engineering Education facilities, Management Facilities and Applied IT Facilities and the market\r\n                        demand so that these college becomes demand - driven and later the needs of the country / growth of country are met from both IT, Engineering and Management Perspective.\"</p>\r\n                    <p class=\"jumbotron-matter\"> \"To produce output of internationally accepted levels of quality Engineers by creating access to professional education by establishing colleges in Rural Areas.\"</p>\r\n                    <p class=\"jumbotron-matter\"> \"To create infrastructure, teacher competence, teaching learning process and management so as to produce graduates at accepted levels of competence in knowledge skills, attitudes and Industrial Knowledge through Industry Collaborations.\"</p>\r\n                    <p class=\"jumbotron-matter\"> \"To promote technological capacity building through technological innovation research, design and development and through active collaboration with Industry and R & D organizations.\"</p>\r\n                </div>\r\n                <br><br>\r\n            </section>\r\n            </main>\r\n            <div id=\"floating-button\">\r\n                    <img class=\"qr\" src=\"/assets/qr.png\">\r\n                </div>\r\n            </div>\r\n            </div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/add/add.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/add/add.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add/add.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/add/add.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form (submit)=\"onAddSubmit()\">\r\n        <div class=\"text-center mb-4\">\r\n            <h1 class=\"h3 mb-3 font-weight-normal\">\r\n                <font class=\"text-white\">ADD USER</font>\r\n            </h1>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" name=\"userid\" [(ngModel)]=\"userid\" class=\"form-control\" placeholder=\"Enter UserID\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Enter password\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control\" name=\"role\" [(ngModel)]=\"role\">\r\n                        <option disabled=\"disabled\" selected>select role</option>\r\n                        <option value=\"student\">STUDENT</option>\r\n                        <option value=\"hod\">HOD</option>\r\n                        <option value=\"tpo\">TPO</option>\r\n                        <option value=\"admin\">ADMIN</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\" *ngIf=\"isStudentOrHod()\">\r\n                    <select class=\"form-control\" name=\"dept\" [(ngModel)]=\"dept\">\r\n                        <option disabled=\"disabled\" selected>select dept</option>\r\n                        <option value=\"CSE\">CSE</option>\r\n                        <option value=\"ECE\">ECE</option>\r\n                        <option Value=\"EEE\">EEE</option>\r\n                        <option value=\"IT\">IT</option>\r\n                        <option value=\"MECH\">MECH</option>\r\n                        <option value=\"CIVIL\">CIVIL</option>\r\n                    </select>\r\n                </div>\r\n                <input class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" value=\"ADD\">\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add/add.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddComponent = /** @class */ (function () {
    function AddComponent(validateService, authService, router, flashmessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashmessage = flashmessage;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var obj = {
            userid: this.userid,
            password: this.password,
            role: this.role,
            dept: this.dept
        };
        if (!this.validateService.validateAddFields(obj)) {
            this.flashmessage.show('All fields are required', { cssClass: 'alert-danger text-center', timeOut: 2000 });
        }
        else {
            this.authService.addUser(obj).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.flashmessage.show(data.msg, { cssClass: 'alert-success text-center', timeOut: 2000 });
                    _this.router.navigate(['/add']);
                    _this.userid = "";
                    _this.password = "";
                    _this.role = "";
                    _this.dept = "";
                }
                else {
                    _this.flashmessage.show(data.msg, { cssClass: 'alert-danger text-center', timeOut: 2000 });
                    _this.router.navigate(['/add']);
                }
            });
        }
    };
    AddComponent.prototype.isStudentOrHod = function () {
        if (this.role == 'student' || this.role == 'hod')
            return true;
        else
            return false;
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/components/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/components/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatbot container p-25 text-center\">\r\n    <!--<iframe height=\"1000\" width=\"1000\" src=\"https://bot.dialogflow.com/f8524330-0095-4125-b17d-0602545897cd\"></iframe>-->\r\n <div >\t<iframe id=\"frame\" class=\"b_frame\" width=\"500\" height=\"500\" src=\"https://console.dialogflow.com/api-client/demo/embedded/f8524330-0095-4125-b17d-0602545897cd\"></iframe></div>\r\n </div>"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/contactus/contactus.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    max-width: 960px;\r\n}\r\n\r\n.border-top {\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n\r\n.border-bottom {\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.border-top-gray {\r\n    border-top-color: #adb5bd;\r\n}\r\n\r\n/* hello */\r\n\r\n.box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n.lh-condensed {\r\n    line-height: 1.25;\r\n}"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container first\">\r\n    <div class=\"py-5 text-center \">\r\n        <img class=\"d-block mx-auto mb-4 \">\r\n        <font color=\"white\">\r\n            <h1><u>CONTACT US</u></h1>\r\n        </font>\r\n\r\n    </div>\r\n\r\n    <div class=\"row \">\r\n        <div class=\"col-md-4 order-md-2 mb-4 \">\r\n            <h4 class=\"d-flex justify-content-between align-items-center mb-3 \">\r\n                <span class=\"text-muted \"><font color=\"white\" >College Management System</font></span>\r\n\r\n            </h4>\r\n            <ul class=\"list-group mb-3 \">\r\n                <li class=\"list-group-item d-flex justify-content-between lh-condensed \">\r\n                    <div>\r\n                        <h6 class=\"my-0 \">Admissions</h6>\r\n                        <small class=\"text-muted \">Last date to apply - 8/06/2018</small>\r\n                    </div>\r\n\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between lh-condensed \">\r\n                    <div>\r\n                        <h6 class=\"my-0 \">Placements</h6>\r\n                        <small class=\"text-muted \">256 students placed in top MNC's around the globe.</small>\r\n                    </div>\r\n\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between lh-condensed \">\r\n                    <div>\r\n                        <h6 class=\"my-0 \">Infrastructure</h6>\r\n                        <small class=\"text-muted \">Top class infrastructure that enriches the feeling among the students to learn.</small>\r\n                    </div>\r\n\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between lh-condensed \">\r\n                    <div>\r\n                        <h6 class=\"my-0 \">Library</h6>\r\n                        <small class=\"text-muted \">A state of the art Library with over 1 Lakh volumes and over 1200 computers for the student that operates 24x7.</small>\r\n                    </div>\r\n\r\n                </li>\r\n            </ul>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-md-8 order-md-1 \">\r\n            <font color=\"white\">\r\n                <h3>Please fill in your details</h3>\r\n            </font>\r\n            <form (submit)=\"onFeed()\">\r\n            <div class=\"needs-validation \" novalidate>\r\n                \r\n                <div class=\"row \">\r\n                    <div class=\"col-md-6 mb-3 \">\r\n                        <label for=\"firstName\"><font color=\"white\">First name</font></label>\r\n                        <input type=\"text \" class=\"form-control \" name=\"firstName \" placeholder=\"\" [(ngModel)]=\"firstname\" required>\r\n                        <div class=\"invalid-feedback \">\r\n                            Valid first name is required.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 mb-3 \">\r\n                        <label for=\"lastName \"><font color=\"white\">Last name</font></label>\r\n                        <input type=\"text \" class=\"form-control \" name=\"lastName \" placeholder=\"\" value=\"\" [(ngModel)]=\"lastname\" required>\r\n                        <div class=\"invalid-feedback \">\r\n                            Valid last name is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"mb-3 \">\r\n                    <label for=\"username \"><font color=\"white\">Username</font></label>\r\n                    <div class=\"input-group \">\r\n                        <div class=\"input-group-prepend \">\r\n                            <span class=\"input-group-text \">@</span>\r\n                        </div>\r\n                        <input type=\"text \" class=\"form-control \" id=\"username \" placeholder=\"Username \" required>\r\n                        <div class=\"invalid-feedback \" style=\"width: 100%; \">\r\n                            Your username is required.\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n\r\n                <!-- <div class=\"mb-3 \">\r\n                    <label for=\"username \"><font color=\"white\">Password</font></label>\r\n                    <div class=\"input-group \">\r\n                        <div class=\"input-group-prepend \">\r\n                            <span class=\"input-group-text \">P</span>\r\n                        </div>\r\n                        <input type=\"password \" class=\"form-control \" id=\"password \" placeholder=\"Password \" required>\r\n                        <div class=\"invalid-feedback \" style=\"width: 100%; \">\r\n                            Please enter your password\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n\r\n                <div class=\"mb-3 \">\r\n                    <label for=\"email \"><font color=\"white\">Email</font> <span class=\"text-muted \"></span></label>\r\n                    <input type=\"email \" class=\"form-control \" name=\"email \" [(ngModel)]=\"email\" placeholder=\"you@example.com \">\r\n                    <div class=\"invalid-feedback \">\r\n                        Please enter a valid email address to help us get in touch with you.\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mb-3 \">\r\n                    <label for=\"address \"><font color=\"white\">Address</font></label>\r\n                    <input type=\"text \" class=\"form-control \" name=\"address \" [(ngModel)]=\"address\" placeholder=\"1234 Main St \" required>\r\n                    <div class=\"invalid-feedback \">\r\n                        Please enter your address.\r\n                    </div></div>\r\n\r\n\r\n                    <div class=\"mb-3 \">\r\n                        <label for=\"address2 \"><font color=\"white\">Feedback</font> <span class=\"text-muted \"></span></label>\r\n                        <textarea rows=\"4\" cols=\"50\" name=\"feedback\" [(ngModel)]=\"feedback\" class=\"form-control\"> </textarea>\r\n                    </div>\r\n\r\n                    <div class=\"row \">\r\n                        <div class=\"col-md-5 mb-3 \">\r\n                            <label for=\"country \"><font color=\"white\">Country</font></label>\r\n                            <select class=\"custom-select d-block w-100 \" name=\"country\" [(ngModel)]=\"country\" required>\r\n                  <option [ngValue]=\"undefined\" disabled selected>Choose...</option>\r\n                  <option value=\"india\">India</option>\r\n                </select>\r\n                            <div class=\"invalid-feedback \">\r\n                                Please select a valid country.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 mb-3 \">\r\n                            <label for=\"state \"><font color=\"white\">State</font></label>\r\n                            <select class=\"custom-select d-block w-100 \" name=\"state\" [(ngModel)]=\"state\" required>\r\n                  <option [ngValue]=\"undefined\" disabled selected>Choose...</option>\r\n                  <option value=\"AP\">Andhra pradesh</option>\r\n                  <option value=\"OD\"> Odisha</option>\r\n                  <option value=\"WB\">West Bengal </option>\r\n                  <option value=\"TG\">Telengana</option>\r\n                  <option value=\"KA\">Karnataka </option>\r\n                  <option value=\"KR\"> Kerala</option>\r\n\r\n                </select>\r\n                            <div class=\"invalid-feedback \">\r\n                                Please provide a valid state.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3 mb-3 \">\r\n                            <label for=\"zip \"><font color=\"white\">Zip</font></label>\r\n                            <input type=\"text \" class=\"form-control\" name=\"zip\" [(ngModel)]=\"zip\" placeholder=\"\" required>\r\n                            <div class=\"invalid-feedback \">\r\n                                Zip code required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n\r\n                    <hr class=\"mb-4 \">\r\n                    <input type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" value=\"Submit Feedback\">\r\n                    </div>\r\n                    </form>\r\n                    <div id=\"floating-button\">\r\n                            <img class=\"qr\" src=\"/assets/qr.png\">\r\n                        </div>\r\n                    <footer class=\"my-5 pt-5 text-muted text-center text-small \">\r\n\r\n                    </footer>\r\n"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(authService, flash, validate) {
        this.authService = authService;
        this.flash = flash;
        this.validate = validate;
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.onFeed = function () {
        var obj = {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            address: this.address,
            feedback: this.feedback,
            state: this.state,
            country: this.country,
            zip: this.zip
        };
        if (!this.validate.validateFeed(obj)) {
            alert("all fields are required.");
        }
        else {
            this.authService.feedback(obj).subscribe(function (res) {
                if (res.success) {
                    //this.flash.show(res.msg,{cssClass:'alert-success text-center',timeOut:2000});
                    alert(res.msg);
                }
                else {
                    //this.flash.show("Something went wrong.",{cssClass:'alert-alert text-center',timeOut:2000});
                    alert("Something went wrong");
                }
            });
            this.firstname = "";
            this.lastname = "";
            this.address = "";
            this.email = "";
            this.country = "";
            this.zip = "";
            this.state = "";
            this.feedback = "";
        }
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/components/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .card{\r\n    max-width:auto;\r\n    min-height:50px;\r\n    \r\n}\r\n\r\n\r\n.s{\r\nwidth:250px;\r\nheight:90px;\r\nposition: relative;\r\nfont-size: 45px;\r\n}\r\n.md{\r\n    max-height:500px;\r\n    max-width:700px;\r\n    overflow: auto;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.dropdown{\r\n    position: relative;\r\n    padding-right: 20px;\r\n\r\n} */\r\n\r\n/* width */\r\n\r\n/* ::-webkit-scrollbar {\r\n    width: 0px;\r\n} */\r\n\r\n/* Track */\r\n\r\n/* ::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px; \r\n    border-radius: 10px;\r\n}\r\n  */\r\n\r\n/* Handle */\r\n\r\n/* ::-webkit-scrollbar-thumb {\r\n    background: transparent; \r\n    border-radius: 10px;\r\n} */\r\n\r\n/* Handle on hover */\r\n\r\n/* ::-webkit-scrollbar-thumb:hover {\r\n    background: transparent; \r\n} */\r\n\r\n/* .md,.s{\r\n    background-color: white;\r\n    border-radius: 10px;\r\n} */\r\n\r\n/* from HOD */\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--hod dashboard-->\r\n\r\n\r\n<!-- posting card with select tags for branch -->\r\n<div *ngIf=\"authService.hodLoggedIn()||authService.tpoLoggedIn()\">\r\n  <div class=\"body\">\r\n    <div align=\"center\">\r\n      <div class=\"card\" style=\"background-color: transparent\">\r\n          <div >\r\n            <div class=\"card \" >\r\n                <div class=\"card-header\" style=\"background-color: wheat\">write a post to student timeline</div>\r\n                <form>\r\n                  <div class=\"card-body\" >\r\n                    <div class=\"form-group\">\r\n                    <input type=\"text\" size=\"65\" maxlength=\"100\" placeholder=\"TITLE\" name=\"title\" [(ngModel)]=\"title\" class=\"form-control\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <textarea class=\"form-control\"  placeholder=\"DESCRIPTION\" name=\"content\" [(ngModel)]=\"content\" required></textarea>\r\n                    </div>\r\n                    <input type=\"button\" class=\"btn btn-success\" value=\"post\" style=\"float:right; border-radius: 8px;\" (click)=\"onPostClick()\">\r\n                    <div>\r\n                        <select class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" placeholder=\"year\" type=\"button\" style=\"float:left; margin-right:11px; border-radius: 8px;\" name=\"year\" [(ngModel)]=\"year\">\r\n                            <option [ngValue]=\"undefined\" disabled selected>YEAR</option>\r\n                            <option value=\"all\">All</option>\r\n                            <option value=\"1year\">1<sup>st </sup>year</option>\r\n                            <option value=\"2year\">2<sup>nd </sup>year</option>\r\n                            <option value=\"3year\">3<sup>rd </sup>year</option>\r\n                            <option value=\"4year\">4<sup>th </sup>year</option>\r\n                          </select>\r\n                    </div>\r\n                    <!-- <div class=\"button-group \">\r\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" style=\"float:left; margin-right:11px; border-radius: 8px;\" name=\"year\" ng-Model>YEAR</button>\r\n                      <ul class=\"dropdown-menu \">\r\n                          <li [class.selected]=\"cb1.checked\">&nbsp;<input #cb1 type=\"checkbox\" value=\"all\"/>&nbsp;All</li>\r\n                        <li>&nbsp;<input type=\"checkbox\" ng-checked=\"all\"/>&nbsp;1ST</li>\r\n                        <li>&nbsp;<input type=\"checkbox\" ng-checked=\"all\"/>&nbsp;2ND</li>\r\n                        <li>&nbsp;<input type=\"checkbox\" ng-checked=\"all\"/>&nbsp;3RD</li>\r\n                        <li>&nbsp;<input type=\"checkbox\" ng-checked=\"all\"/>&nbsp;4TH</li>\r\n                      </ul>\r\n                  </div>-->\r\n                    <div class=\"button-group\" *ngIf=\"authService.tpoLoggedIn()\">\r\n                        <select class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" placeholder=\"year\" type=\"button\" style=\"float:left; margin-right:11px; border-radius: 8px;\" name=\"dept\" [(ngModel)]=\"dept\">\r\n                            <option [ngValue]=\"undefined\" disabled selected>Dept.</option>\r\n                            <option value=\"\" selected>All</option>\r\n                            <option value=\"CSE\">CSE</option>\r\n                            <option value=\"EEE\">EEE</option>\r\n                            <option value=\"ECE\">ECE</option>\r\n                            <option value=\"MECH\">MECH</option>\r\n                            <option value=\"CIVIL\">CIVIL</option>\r\n                            <option value=\"IT\">IT</option>\r\n                          </select>\r\n                  </div></div>\r\n                    </form>\r\n               <!-- <div class=\"card-footer\">Footer</div> -->\r\n              </div>\r\n        </div>\r\n    </div >\r\n  </div>\r\n  </div></div>\r\n\r\n  <!--TPO DASHBOARD-->\r\n\r\n<!--student dashboard-->\r\n\r\n<div *ngIf=\"authService.studentLoggedIn()||authService.hodLoggedIn()||authService.tpoLoggedIn()\">\r\n    <!-- <div class=\"body\">\r\n      <div align=\"center\">\r\n        <div class=\"card-header \" style=\" width: 300px;background-color:#dee2e6\"><h3>Timeline</h3></div>\r\n     -->\r\n    \r\n          <div class=\"container\" *ngIf=\"authService.studentLoggedIn()\">\r\n      \r\n            <!-- Trigger the modal with a button -->\r\n            <button type=\"button\" class=\"btn btn-primary btn-md\" data-toggle=\"modal\" data-target=\"#myModal\" style=\"float: left;\">Timetable</button>\r\n    \r\n            <!-- Modal -->\r\n            <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n              <div class=\"modal-dialog\">\r\n              \r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <!-- <h4 class=\"modal-title\">Modal Header</h4>-->\r\n                </div>\r\n            <div class=\"modal-body \">\r\n              <table border=\"\" >\r\n          <tr><th>PERIOD</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>\r\n          <tr><th>DAY</th><td>9:00-10:00</td><td>10:00-11:00</td><td>11:00-12:00</td><td>12:00-1:00</td><td>1:00-2:00</td><td>2:00-3:00</td><td>3:00-4:00</td></tr>\r\n          <tr><th>MON</th><td>CN</td><td>DAA</td><td>IPR</td><td rowspan=\"6\" valign=\"middle\">LUNCH BREAK</td><td>SE</td><td>WT</td><td>DWDM</td></tr>\r\n          <tr><th>TUE</th><td>IPR</td><td>DWDM</td><td>DAA</td><td colspan=\"3\">-----WT-----</td></tr>\r\n          <tr><th>WED</th><td>SE </td><td>DWDM</td><td>CN</td><td>WT</td><td>IPR</td><td>DAA</td></tr>\r\n          <tr><th>THU</th><td colspan=\"3\">---WT---</td><td>CN</td><td>WT</td><td>SE</td></tr>\r\n          <tr><th>FRI</th><td>WT</td><td>CN</td><td>DWDM</td><td>SE</td><td>DAA</td><td>IPR</td></tr>\r\n          <tr><th>SAT</th><td>Seminar</td><td>seminar</td><td>LIBRARY</td><td colspan=\"3\">---SPORTS---</td></tr>\r\n        </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n    \r\n    <div class=\"dropdown float-right\" >\r\n        <select class=\"btn btn-primary btn-md dropdown-toggle p-23\" type=\"button\" data-toggle=\"dropdown\" name=\"pselect\" [(ngModel)]=\"paselect\" (change)=\"getPostsOf()\">\r\n        <!-- <span class=\"caret\"></span>\r\n        <ul class=\"dropdown-menu\">\r\n          <option><li><a href=\"#\"></a>HTML</a></li></option>\r\n          <li><a href=\"#\">CSS</a></li>\r\n          <li><a href=\"#\">JavaScript</a></li>\r\n        </ul> -->\r\n        <option value=\"undefined\" selected disabled>Select</option>\r\n        <option value=\"all\">ALL</option>\r\n        <option value=\"hod\" >HOD</option>\r\n        <option value=\"TPO\">TPO</option>\r\n      </select>\r\n      </div>\r\n    </div>\r\n    \r\n    <br>\r\n    \r\n    <div align=\"center\">\r\n       <br>\r\n       <div class=\"card md\" style=\"background-color: transparent;\">           \r\n        <div ><!--continer-->\r\n          <div *ngFor=\"let post of posts\" style=\"padding-bottom: 1.5%;\">\r\n              <div class=\"card\" >\r\n                <div class=\"card-header text-center\" style=\"background-color: wheat\"><h6>{{post.title}}</h6></div>\r\n                <div class=\"card-body\">\r\n                  <p>{{post.content}}</p>\r\n                  <div class=\"float-left text-left\" style=\"opacity: 0.5;\">\r\n                      Posted by : {{post.postedby}}\r\n                      <br>\r\n                      Posted Dept : {{post.dept}}\r\n                    </div>\r\n                  <div class=\"float-right text-right\" style=\"opacity: 0.5;\">\r\n                      Posted To : {{post.year}}\r\n                      <br>\r\n                    Posted On : {{post.postedon?post.postedon:\"just now\"}}\r\n                  </div>\r\n                </div> \r\n               <!-- <div class=\"card-footer\">Footer</div> -->\r\n              </div>\r\n            \r\n        </div>\r\n        <br>\r\n      <!-- removed from here -->\r\n     </div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(postService, authService, flashmessage, router) {
        this.postService = postService;
        this.authService = authService;
        this.flashmessage = flashmessage;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.role == 'student') {
            this.postService.getStudentPosts(this.user.dept, this.user.year).subscribe(function (posts) {
                _this.posts = posts;
                _this.posts.reverse();
                console.log(_this.posts);
            });
        }
        else if (this.user.role == "hod") {
            this.postService.getHodPosts(this.user.dept).subscribe(function (posts) {
                _this.posts = posts;
                _this.posts.reverse();
            });
        }
        else if (this.user.role == 'tpo') {
            this.postService.getTpoPosts().subscribe(function (posts) {
                _this.posts = posts;
                _this.posts.reverse();
            });
        }
        else {
        }
    };
    DashboardComponent.prototype.onPostClick = function () {
        var _this = this;
        var postObj = {
            postedby: this.user.userid,
            title: this.title,
            content: this.content,
            year: this.year,
            dept: this.user.dept,
            prole: this.user.role
        };
        if (this.authService.tpoLoggedIn()) {
            postObj.dept = this.dept;
        }
        this.postService.postNotification(postObj).subscribe(function (result) {
            if (result.msg == "posted successfully") {
                _this.flashmessage.show(result.msg, { cssClass: 'alert-success text-center', timeOut: 2000 });
                _this.posts.unshift(postObj);
                _this.title = "";
                _this.content = "";
                _this.year = "";
                _this.dept = "";
            }
            else {
                _this.flashmessage.show("Something went wrong.", { cssClass: 'alert-success text-center', timeOut: 2000 });
            }
        });
    };
    DashboardComponent.prototype.getPostsOf = function () {
        alert("changed");
        this.ngOnInit();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/events/events.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/events/events.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/events/events.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/events/events.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 class=\"jumbotron-heading text-white text-center\"><u>EVENTS</u></h1>\r\n</div>\r\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" style=\"margin:4%;\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" >\r\n      <div class=\"carousel-item active\">\r\n        <img class=\"d-block w-100\" src=\"assets/carousel1.jpg\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100\" src=\"assets/carousel2.jpg\" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100\" src=\"assets/carousel3.jpg\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n  \r\n  <div class=\"card\" style=\" margin-left: 4%;\" >\r\n    <img class=\"card-img-top\" src=\"assets/sports.jpg\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">We encourage sports and co-curricular activities in our campus very well. Our college football team recently won the cup for District level championship.</p>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"card\" style=\" margin-left: 4%;\" >\r\n    <img class=\"card-img-top\" src=\"assets/Blood.jpg\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">We encourage events like Blood Donation in our campus very well,our college provides the social service and awareness to the people who are nearer to the college location.</p>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"card\" style=\" margin-left: 4%;\" >\r\n    <img class=\"card-img-top\" src=\"assets/infra.JPG\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">Our College is well equipped with the good infrastructure and good laboratories and well experienced faculty who are always available for the students.</p>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"card\" style=\" margin-left: 4%;\" >\r\n    <img class=\"card-img-top\" src=\"assets/culturals.jpg\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">Our college conducts college festivals every year and many students from different colleges along with the students of our college participate in these events</p>\r\n      <div id=\"floating-button\">\r\n          <img class=\"qr\" src=\"/assets/qr.png\">\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/events/events.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
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

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/components/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/components/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    display: flex;\r\n    /* width:100%; */\r\n    justify-content:right;\r\n    vertical-align: bottom;\r\n    font-size:30px;\r\n    /* position: sticky; */\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer fixed-bottom\">\r\n <!-- <div class=\"row\"> -->\r\n <!-- <div class=\"col-sm-3\"></div><div class=\"col-sm-7\"> -->\r\n<h6>{{year}}&copy; &nbsp;&nbsp;{{copyright}}</h6>\r\n<!-- </div> -->\r\n<!-- </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
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
        this.year = "2018-2022";
        this.copyright = "M.G.R.A.V UNIVERSITY";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/forget/forget.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/forget/forget.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotpage{\r\n    margin-top: 10%;\r\n    }"

/***/ }),

/***/ "./src/app/components/forget/forget.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/forget/forget.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container text-white forgotpage\" >\r\n    <h2 class=\"text-center\">Forgot Password?</h2>\r\n      <label  >Enter Your userID:</label>\r\n        <input type=\"email\" placeholder=\"UserID\" class=\"form-control\" name=\"userid\" [(ngModel)]=\"userid\"><br>\r\n          <!-- has to give router link to collecting data form if authenticate  -->\r\n        <button class=\"btn btn-primary\" (click)=\"onResetClick()\">Reset Password</button>\r\n        </div>"

/***/ }),

/***/ "./src/app/components/forget/forget.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/forget/forget.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgetComponent = /** @class */ (function () {
    function ForgetComponent(authService, flashmessage) {
        this.authService = authService;
        this.flashmessage = flashmessage;
    }
    ForgetComponent.prototype.ngOnInit = function () {
    };
    ForgetComponent.prototype.onResetClick = function () {
        var _this = this;
        if (this.userid == "" || this.userid == undefined) {
            this.flashmessage.show("UserID is required.", { cssClass: 'alert-danger text-center', timeOut: 1000 });
        }
        else {
            var obj = {
                userid: this.userid
            };
            this.authService.sendForgotMail(obj).subscribe(function (result) {
                if (result.success) {
                    _this.flashmessage.show(result.msg, { cssClass: 'alert-info text-center', timeOut: 1000 });
                }
                else {
                    _this.flashmessage.show(result.msg, { cssClass: 'alert-danger text-center', timeOut: 1000 });
                }
            });
        }
    };
    ForgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! ./forget.component.html */ "./src/app/components/forget/forget.component.html"),
            styles: [__webpack_require__(/*! ./forget.component.css */ "./src/app/components/forget/forget.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <div class=\"topnav\">\r\n    <div class=\"logo\">\r\n        <a routerLink=\"/home\"><img src=\"assets/images/logo.png\" style=\"height:100%;display:inline-block;\"><span>COLLEGE</span>\r\n        </a>\r\n    </div>\r\n    <a *ngIf=\"!authService.loggedOut()\" (click)=\"onLogoutClick()\" routerLink=\"/login\">Logout</a>\r\n    <a *ngIf=\"authService.loggedOut()\" routerLink=\"/login\">Login</a>\r\n    <a routerLink=\"/contact\">Contact-Us</a>\r\n    <a routerLink=\"/about\">About</a>\r\n    <a routerLink=\"/events\">Events</a>\r\n    <a routerLink=\"/home\">Home</a>\r\n  </div>  -->\r\n\r\n   <nav class=\"navbar navbar-expand-md bg-transparent fixed-top navbar-dark\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['']\"><img src=\"/assets/logo.jpg\" width=\"40\" height=\"40\"><span>M.V.G.R.A.J University</span></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\" aria-controls=\"collapsibleNavbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse links\" id=\"collapsibleNavbar\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <!--default-->\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/events']\">Events</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\r\n        </li>  \r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact-Us</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat_with_me</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a [routerLink]=\"['/login']\" class=\"nav-link\">Login</a>\r\n        </li>\r\n        <!--dashboard for all users who are loggedin-->\r\n        <li *ngIf=\"authService.loggedIn()&&!authService.adminLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n        <!--admin-->\r\n        <li *ngIf=\"authService.adminLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/add']\">Add</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.studentLoggedIn() && authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/search']\">Search</a>\r\n          </li>\r\n        <!--hod-->\r\n        \r\n\r\n        <!--same for all-->\r\n        <li *ngIf=\"authService.loggedIn() && !authService.adminLoggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n          </li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"onLogoutClick()\" routerLink=\"/login\">Logout</a>\r\n        </li> \r\n      </ul>\r\n    </div>  \r\n  </nav>\r\n  "

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
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
    function HeaderComponent(authService, flashmessage) {
        this.authService = authService;
        this.flashmessage = flashmessage;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logOut();
        this.flashmessage.show("You are logged out.", { cssClass: "alert-success text-center", timeOut: 2000 });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <!-- <header class=\"blog-header py-3\">\r\n                <div class=\"row flex-nowrap justify-content-between align-items-center\">\r\n                    <div class=\"col-4 text-center check\">\r\n                        <a>COLLEGE NAME</a>\r\n                    </div>\r\n                    <div class=\"col-4 d-flex justify-content-end align-items-center\">\r\n                        <a class=\"text-muted\" href=\"#\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"mx-3\"><circle cx=\"10.5\" cy=\"10.5\" r=\"7.5\"></circle><line x1=\"21\" y1=\"21\" x2=\"15.8\" y2=\"15.8\"></line></svg>\r\n                        </a>\r\n                        <a class=\"btn btn-sm btn-outline-secondary\" href=\"#\">Log in</a>\r\n                    </div>\r\n                </div>\r\n            </header>\r\n    \r\n            <div class=\"nav-scroller py-1 mb-2\">\r\n    \r\n                <a class=\"p-2 text-muted\" href=\"#\">About</a>\r\n                <a class=\"p-2 text-muted\" href=\"#\">Admissions</a>\r\n                <a class=\"p-2 text-muted\" href=\"#\">Academics</a>\r\n                <a class=\"p-2 text-muted\" href=\"#\">Placements</a>\r\n                <a class=\"p-2 text-muted\" href=\"#\">Events</a>\r\n                <a class=\"p-2 text-muted\" href=\"#\">Contact us</a>\r\n                </nav>\r\n            </div> -->\r\n    \r\n        <div class=\"jumbotron p-3 p-md-5 text-white rounded bg-dark\">\r\n            <div class=\"col-md-6 px-0\">\r\n                <h1 class=\"display-4\"><b>30K students from 29 states and 70 countries</b></h1>\r\n                <p class=\"lead my-3\"> Although there are many students from so many diverse regions and different parts of the world there is one thing that unites them all ... They all <b>#thinkBIG</b></p>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\r\n                    <div class=\"card-body d-flex flex-column align-items-start\">\r\n                      \r\n                        <strong class=\"d-inline-block mb-2 text-primary\"><h3>CAMPUS LIFE</h3></strong>\r\n                        <h3 class=\"mb-0\">\r\n                            <a class=\"text-dark\"></a>\r\n                        </h3>\r\n                        <div class=\"mb-1 text-muted\">May 11</div>\r\n                      <h5><i>  <p class=\"card-text mb-auto\">The college schedule is very different than the traditional high school schedule. Typically, there is a lot more flexibility with your college classes. In high school, you were probably told that you had to take US History, which was offered every day at 10:00 am. In college, you’ll probably need to take a history class, but you could have 10 choices, which would be offered on different days, at different times, and for different durations.\r\n    \r\n                          The other cool thing about the college schedule is that you usually have more opportunities to explore your interests and passions. For example, you will be picking a major that will determine the types of classes you will specialize in. In high school, you have a set curriculum of classes you have to take across all subject areas. In college, think about your schedule as a pyramid. Your opinion is the must for us and we will do anything for the comfort of students in our campus </p></i></h5>\r\n                    </div>\r\n                    <!--<img class=\"card-img-right flex-auto d-none d-lg-block\" src=\"C:\\Users\\RAHUL\\Desktop\\college project\\home page\\2.jpg\" alt=\"Card image cap\">-->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\r\n                    <div class=\"card-body d-flex flex-column align-items-start\">\r\n                        <strong class=\"d-inline-block mb-2 text-success\"><h3>TECHMANDRA’18</h3></strong>\r\n                        <h3 class=\"mb-0\">\r\n                            <!-- <a class=\"text-dark\" href=\"#\">Post title</a> -->\r\n                        </h3>\r\n                        <div class=\"mb-1 text-muted\">May 11</div>\r\n                        <h5><i>   <p class=\"card-text mb-auto\">Techmandra’18, a National level Technical Symposium was organized by the Society of Civil, ECE, EEE, CSE, Mechanical and Mechatronics Departments of our college on February 17th, 2018. Mr.H.M.Shahul Hameed, General Manager & HR of Doowon Automotive Sstems India Pvt. Ltd., Chennai, was the Chief Guest for this event. For example, you will be picking a major that will determine the types of classes you will specialize in. In high school, you have a set curriculum of classes you have to take across all subject areas. In college, think about your schedule as a pyramid. Your freshman and sophomore year, you’ll take more general education classes (a mixture of everything so you walk away well-rounded) and a few classes in your major. But during your junior and senior year, you’ll take fewer general education classes and more classes in your major.</p></i></h5>\r\n                        <!-- <a href=\"#\">Continue reading</a> -->\r\n                    </div>\r\n                    <!-- <img class=\"card-img-right flex-auto d-none d-lg-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Card image cap\"> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"row mb-2\">\r\n          <div class=\"col-md-6\">\r\n              <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\r\n                  <div class=\"card-body d-flex flex-column align-items-start\">\r\n                      <strong class=\"d-inline-block mb-2 text-primary\"><h3>ASTRA'2018</h3></strong>\r\n                      <h3 class=\"mb-0\">\r\n                          <a class=\"text-dark\"></a>\r\n                      </h3>\r\n                      <div class=\"mb-1 text-muted\">July 18th-25th</div>\r\n                     <h5><i> <p class=\"card-text mb-auto\">ASTRA'2018, The Intra-Collegiate Cultural Extravaganza aims to unleash the talents in the Paavaians, streamline their capabilities and furthermore, tune their skills to perfection. The event acts as a prelude platform for the students before they can face the real world filled with talent and diverse opportunity. for participation students are requested to contact the student coordinators<br> Contact-9989602037</p></i></h5>\r\n                  </div>\r\n                  <!--<img class=\"card-img-right flex-auto d-none d-lg-block\" src=\"C:\\Users\\RAHUL\\Desktop\\college project\\home page\\2.jpg\" alt=\"Card image cap\">-->\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\r\n                <div class=\"card-body d-flex flex-column align-items-start\">\r\n                    <strong class=\"d-inline-block mb-2 text-success\"><h3>Admissions</h3></strong>\r\n                    <h3 class=\"mb-0\">\r\n                        <!-- <a class=\"text-dark\" href=\"#\">Post title</a> -->\r\n                    </h3>\r\n                    <div class=\"mb-1 text-muted\">June 25th</div>\r\n                    <h5><i><p class=\"card-text mb-auto \">University admission or college admission is the process through which students enter tertiary education at universities and colleges. Systems vary widely from country to country. In India almost all top private colleges and universities are having separate seats for management quota. Education diary plays a vital role in college and universities admission for all Undergraduate and postgraduate programs.\r\n    \r\n                      In many countries, prospective university students apply for admission during their last year of high school or community college.</p>\r\n                    </i></h5>\r\n                    <!-- <a href=\"#\">Continue reading</a> -->\r\n                </div>\r\n                <!-- <img class=\"card-img-right flex-auto d-none d-lg-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Card image cap\"> -->\r\n            </div>\r\n        </div>\r\n        <div id=\"floating-button\">\r\n            <img class=\"qr\" src=\"/assets/qr.png\">\r\n        </div>\r\n    </div>\r\n    </div>    "

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n    margin-top: 18%;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login\">\r\n    <form (submit)=\"onLoginSubmit()\">\r\n            <div class=\"text-center mb-4\">\r\n                    <h1 class=\"h3 mb-3 font-weight-normal\">\r\n                        <font class=\"text-white\">Login</font>\r\n                    </h1>\r\n                </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n        </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" name=\"userid\" [(ngModel)]=\"userid\" class=\"form-control\" placeholder=\"UserID\" required>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"form-group\">\r\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"password\" required>\r\n            <br><a [routerLink]=\"['/forgot']\" style=\"color: rgb(205, 235, 225)\">Forgot password?</a>\r\n        </div>\r\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n    </div>\r\n      </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, validateService, router, flashmessage) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashmessage = flashmessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var obj = {
            userid: this.userid,
            password: this.password
        };
        if (!this.validateService.validateLogin(obj)) {
            this.flashmessage.show('All fields are required', { cssClass: 'alert-danger text-center', timeOut: 2000 });
        }
        else {
            this.authService.authUser(obj).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.flashmessage.show(data.msg, { cssClass: 'alert-success text-center', timeOut: 2000 });
                    _this.router.navigate(['welcome']);
                }
                else {
                    _this.flashmessage.show(data.msg, { cssClass: 'alert-danger text-center', timeOut: 2000 });
                    _this.router.navigate(['login']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-outline{bottom:1.34375em}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#3f51b5}.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before{margin-left:16px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before{margin-left:0;margin-right:16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after{margin-right:16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after{margin-right:0;margin-left:16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before{margin-left:8px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before{margin-left:0;margin-right:8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after{margin-right:8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after{margin-right:0;margin-left:16px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before{margin-left:22px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before{margin-left:0;margin-right:22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after{margin-right:22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after{margin-right:0;margin-left:22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before{margin-left:11px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before{margin-left:0;margin-right:11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after{margin-right:11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after{margin-right:0;margin-left:22px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before{margin-left:28px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before{margin-left:0;margin-right:28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after{margin-right:28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after{margin-right:0;margin-left:28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before{margin-left:14px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before{margin-left:0;margin-right:14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after{margin-right:14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after{margin-right:0;margin-left:28px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(63,81,181,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,64,129,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#e91e63}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(233,30,99,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(233,30,99,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(63,81,181,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ff4081}.body{\r\n    padding-top:70px;\r\n\r\n  }.main-section{\r\n  border:1px solid #138496;\r\n  background-color: #fff;\r\n  }/* .profile-header{\r\n  background-color: #17a2b8;\r\n  height:150px;\r\n  } */.user-detail{\r\n  margin:-50px 0px 30px 0px;\r\n  }.user-detail img{\r\n  height:100px;\r\n  width:100px;\r\n  }.user-detail h5{\r\n  margin:15px 0px 5px 0px;\r\n  }.user-social-detail{\r\n  padding:15px 0px;\r\n  background-color: #17a2b8;\r\n  }.user-social-detail a:hover{\r\n  text-decoration:none;\r\n}.user-social-detail a i{\r\n  color:#fff;\r\n  font-size:23px;\r\n  padding: 0px 5px;\r\n  }.user-social-detail a:hover i{\r\n    border-radius:4px;\r\n    background-color:#fff;\r\n    color: #17a2b8;\r\n    font-size:25px;\r\n    padding: 0px 5px;\r\n    }.example-form {\r\n      min-width: 150px;\r\n      max-width: 500px;\r\n      width: 100%;\r\n      margin-left: 30%;\r\n    }.example-full-width {\r\n      width: 100%;\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HOD PROFILE -->\r\n<div class=\"body\" *ngIf=\"authService.hodLoggedIn() && authService.isProfileFilled() && !checkProfileUpdateCall()\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center\">\r\n          \r\n          <div class=\"row user-detail\">\r\n              <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                  <img [src]=\"'http://localhost:3000/uploads/'+image\" class=\"rounded-circle img-thumbnail\">\r\n                  <h5>{{name}}&nbsp;<sub><small>{{qualification}}</small></sub></h5>\r\n\r\n                  <span>{{role.toUpperCase()}} : {{dept}}</span>\r\n\r\n                  <hr>\r\n                  <label  class=\"btn btn-success btn-sm\">{{email}}</label>&nbsp;\r\n                  <label class=\"btn btn-info btn-sm\">{{phone}}</label>                    \r\n                  <hr>\r\n                  <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\">address : </i> {{address}}</p>\r\n                  \r\n              </div>\r\n          </div>\r\n          <div class=\"btn btn-info form-control\" (click)=\"profileUpdateCall()\">\r\n                <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                    <i>Update</i>\r\n                </div> \r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Student Profile-->\r\n\r\n<div class=\"body\" *ngIf=\"authService.studentLoggedIn() && authService.isProfileFilled() && !checkProfileUpdateCall()\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center\">\r\n                <div class=\"row user-detail\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                        <img [src]=\"'http://localhost:3000/uploads/'+image\" class=\"rounded-circle img-thumbnail\">\r\n                        <h5>{{name}}</h5>\r\n                        <span>{{userid}}</span>\r\n                        <hr>\r\n                        <label class=\"btn btn-primary btn-sm\">Aggregate:{{aggregate}}</label>\r\n                        <hr>\r\n                        <label class=\"btn btn-info btn-sm\">{{dept}}</label>&nbsp;\r\n                        <label class=\"btn btn-info btn-sm\">{{year}}</label>\r\n                        <hr>\r\n                        <label  class=\"btn btn-success btn-sm\">{{email}}</label>&nbsp;\r\n                        <label class=\"btn btn-info btn-sm\">{{phone}}</label>\r\n                        <hr>\r\n                        <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\">address : </i>{{address}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"btn btn-info form-control\" (click)=\"profileUpdateCall()\">\r\n                        <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                            <i>Update</i>\r\n                        </div> \r\n                    </div>\r\n            </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Tpo profile-->\r\n\r\n<div class=\"body\" *ngIf=\"authService.tpoLoggedIn() && authService.isProfileFilled() && !checkProfileUpdateCall()\">\r\n  <div class=\"body\" align=\"center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center\">\r\n            \r\n            <div class=\"row user-detail\">\r\n                <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                    <img [src]=\"'http://localhost:3000/uploads/'+image\" class=\"rounded-circle img-thumbnail\">\r\n                    <h5>{{name}}</h5>\r\n                    <span>{{qualification}}</span>\r\n                    \r\n  \r\n                    <hr>\r\n                    <label  class=\"btn btn-success btn-sm\">{{email}}</label>&nbsp;\r\n                    <label class=\"btn btn-info btn-sm\">{{phone}}</label>\r\n                    \r\n  \r\n                    \r\n                    <hr>\r\n                    <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\">address : </i> {{address}}</p>\r\n                    \r\n                </div>\r\n            </div>\r\n            <div class=\"btn btn-info form-control\" (click)=\"profileUpdateCall()\">\r\n                <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                    <i>Update</i>\r\n                </div> \r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--profile Form-->\r\n\r\n<div *ngIf=\"!authService.isProfileFilled() || checkProfileUpdateCall()\">\r\n<form class=\"example-form\" (submit)=\"onProfileSubmit()\">\r\n        <div style=\" border-style: solid; border-color:transparent; border-radius: 8px;  \r\n        border-width: -5px; margin-top: 9%;background-color:transparent; padding:12px;\"class=\"text-white\">\r\n        <h2>Profile : {{this.userid}}</h2>\r\n        <div class=\"form-group example-full-width text-black\">\r\n            <input placeholder=\"Name\" name=\"name\" [(ngModel)]=\"name\"  class=\"form-control\" required>\r\n        </div>\r\n        <div class=\" form-group example-full-width\" *ngIf=\"authService.hodLoggedIn() || authService.tpoLoggedIn()\">\r\n            <input placeholder=\"Qualification\" name='qualification' [(ngModel)]=\"qualification\" class=\"form-control\" required>\r\n        </div>\r\n        <div class=\"form-group example-full-width\" *ngIf=\"authService.studentLoggedIn()\">\r\n                <input placeholder=\"DOB(dd/mm/yyyy)\" type=\"text\" name=\"dob\" [(ngModel)]=\"dob\" class=\"form-control\" required >\r\n            </div>\r\n        <div class=\"form-group example-full-width\">\r\n            <input placeholder=\"E-mail\" type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required >\r\n        </div>\r\n        <div class=\"form-group example-full-width\">\r\n            <input placeholder=\"Phonenumber\" required type=\"text\" [(ngModel)]=\"phone\" class=\"form-control\"  name='phone'>\r\n        </div>\r\n        <div class=\"form-group example-full-width\">\r\n            <textarea placeholder=\"Address\" name=\"address\" [(ngModel)]=\"address\" class=\"form-control\"  required ></textarea>\r\n        </div>\r\n        <div class=\"form-group example-full-width\" *ngIf=\"authService.studentLoggedIn()\">\r\n            <input  placeholder=\"aggregate\" name=\"aggregate\" [(ngModel)]=\"aggregate\" class=\"form-control\"  required >\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"authService.studentLoggedIn()\">\r\n            <select placeholder=\"Year\" class=\"example-full-width form-control\"   name=\"year\" [(ngModel)]=\"year\" required>\r\n                <option>--</option>\r\n                <option value=\"1year\">1<sup>st</sup>year</option>\r\n                <option value=\"2year\">2<sup>nd</sup>year</option>\r\n                <option value=\"3year\">3<sup>rd</sup>year</option>\r\n                <option value=\"4year\">4<sup>rd</sup>year</option>\r\n            </select>\r\n        </div>\r\n        <!-- <div class=\"example-full-width\">\r\n            <input type=\"password\" matInput placeholder=\"password\" name=\"password\" [(ngModel)]=\"password\"required>\r\n        </div>\r\n        <div class=\"example-full-width\">\r\n                <input type=\"password\" matInput placeholder=\"confirm-password\" name=\"cpassword\" [(ngModel)]=\"cpassword\" required>\r\n            </div> -->\r\n        <div class=\"form-group\">\r\n                <input  (change)=\"selectFile($event)\" type=\"file\" placeholder=\"Picture\">\r\n       </div>\r\n       <div class=\"profilebtn\" style=\"display: inline; padding-left: 20%;\">\r\n        <button mat-button type=\"submit\" VALUE=\"Update\" style=\"width: 70px; background-color:#0066ff; color:white; border-radius:8px;\" >Update</button> &nbsp;&nbsp;&nbsp;\r\n        <button mat-raised-button mat-button   VALUE=\"CANCEL\" style=\"background-color:#0066ff; color:white; border-radius:8px; width: 70px;\" (click)=\"profileUpdateCall()\" >Cancel</button>\r\n      </div> \r\n      </div>\r\n      </form>\r\n      </div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, flashmessage, router, validate, location) {
        this.authService = authService;
        this.flashmessage = flashmessage;
        this.router = router;
        this.validate = validate;
        this.location = location;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.selected = false;
        this.call = false;
        var data = JSON.parse(localStorage.getItem('user'));
        this.userid = data.userid;
        this.name = data.name;
        this.dob = data.dob;
        this.email = data.email;
        this.phone = data.phone;
        this.aggregate = data.aggregate;
        this.address = data.address;
        this.dept = data.dept;
        this.role = data.role;
        this.year = data.year;
        this.qualification = data.qualification;
        this.image = data.image;
    };
    ProfileComponent.prototype.selectFile = function ($event) {
        this.selected = true;
        if (this.selected)
            this.files = $event.target.files || $event.srcElement.files;
    };
    ProfileComponent.prototype.buildProfile = function () {
        if (this.role == 'student') {
            this.profile = new FormData();
            this.profile.append("userid", this.userid);
            this.profile.append("name", this.name);
            this.profile.append("dob", this.dob);
            this.profile.append("email", this.email);
            this.profile.append("phone", this.phone);
            this.profile.append("aggregate", this.aggregate);
            this.profile.append("address", this.address);
            this.profile.append("year", this.year);
            this.profile.append("dept", this.dept);
            this.profile.append("role", this.role);
            this.profile.append('pic', this.selected);
            // email:this.email,
            // phone:this.phone,
            // aggregate:this.aggregate,
            // address:this.address,
            // year:this.year,
            // dept:this.dept,
            // role:this.role
            // image:this.files[0]['name']
        }
        else if (this.role == "hod") {
            this.profile = new FormData();
            this.profile.append("userid", this.userid);
            this.profile.append("name", this.name);
            this.profile.append("email", this.email);
            this.profile.append("qualification", this.qualification);
            this.profile.append("phone", this.phone);
            this.profile.append("address", this.address);
            this.profile.append("dept", this.dept);
            this.profile.append("role", this.role);
            this.profile.append('pic', this.selected);
            // this.profile={
            //   userid:this.userid,
            //   name:this.name,
            //   qualification:this.qualification,
            //   email:this.email,
            //   phone:this.phone,
            //   address:this.address,
            //   dept:this.dept,
            //   role:this.role
            // }
        }
        else if (this.role == "tpo") {
            this.profile = new FormData();
            this.profile.append("userid", this.userid);
            this.profile.append("name", this.name);
            this.profile.append("qualification", this.qualification);
            this.profile.append("email", this.email);
            this.profile.append("phone", this.phone);
            this.profile.append("address", this.address);
            this.profile.append("role", this.role);
            this.profile.append('pic', this.selected);
            // this.profile={
            //   userid:this.userid,
            //   name:this.name,
            //   qualification:this.qualification,
            //   email:this.email,
            //   phone:this.phone,
            //   address:this.address,
            //   role:this.role
            // }
        }
    };
    ProfileComponent.prototype.onProfileSubmit = function () {
        var _this = this;
        this.buildProfile();
        if (this.selected) {
            this.profile.append("image", this.files[0], this.files[0]['name']);
        }
        // if(!this.validate.studentProfilevalidation(this.profile)){
        //   this.flashmessage.show("all fields are required.",{cssClass:'alert-danger text-center',timeOut:2000});
        // }
        // else{
        this.authService.updateProfile(this.userid, this.profile).subscribe(function (data) {
            if (data.success) {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-success text-center', timeOut: 2000 });
                _this.authService.getProfile(_this.userid).subscribe(function (profiledata) {
                    console.log(profiledata);
                    localStorage.setItem('user', JSON.stringify(profiledata.user));
                });
                _this.profileUpdateCall();
                if (_this.selected) {
                    location.reload();
                }
            }
            else {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-danger text-center', timeOut: 2000 });
            }
        });
        // }
    };
    ProfileComponent.prototype.profileUpdateCall = function () {
        this.call = !this.call;
        this.selected = false;
    };
    ProfileComponent.prototype.checkProfileUpdateCall = function () {
        if (this.call)
            return true;
        else
            return false;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-line{\r\n    margin-top: 32px;\r\n}\r\n\r\n/*\r\n * Globals\r\n */\r\n\r\n/* Links */\r\n\r\na,\r\na:focus,\r\na:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Custom default button */\r\n\r\n.btn-secondary,\r\n.btn-secondary:hover,\r\n.btn-secondary:focus {\r\n    color: #333;\r\n    text-shadow: none;\r\n    /* Prevent inheritance from `body` */\r\n    background-color: #fff;\r\n    border: .05rem solid #fff;\r\n}\r\n\r\n/*\r\n * Base structure\r\n */\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    background-color: #333;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    color: #fff;\r\n    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\r\n    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\r\n    \r\n    background-color: #f5f5f5;\r\n    background-size: cover;\r\n}\r\n\r\n.cover-container {\r\n    max-width: 42em;\r\n}\r\n\r\n/*\r\n * Header\r\n */\r\n\r\n.masthead {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.masthead-brand {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.nav-masthead .nav-link {\r\n    padding: .25rem 0;\r\n    font-weight: 700;\r\n    color: rgba(255, 255, 255, .5);\r\n    background-color: transparent;\r\n    border-bottom: .25rem solid transparent;\r\n}\r\n\r\n.nav-masthead .nav-link:hover,\r\n.nav-masthead .nav-link:focus {\r\n    border-bottom-color: rgba(255, 255, 255, .25);\r\n}\r\n\r\n.nav-masthead .nav-link+.nav-link {\r\n    margin-left: 1rem;\r\n}\r\n\r\n.nav-masthead .active {\r\n    color: #fff;\r\n    border-bottom-color: #fff;\r\n}\r\n\r\n@media (min-width: 48em) {\r\n    .masthead-brand {\r\n        float: left;\r\n    }\r\n    .nav-masthead {\r\n        float: right;\r\n    }\r\n}\r\n\r\n/*\r\n * Cover\r\n */\r\n\r\n.cover {\r\n    padding: 0 1.5rem;\r\n}\r\n\r\n.cover .btn-lg {\r\n    padding: .75rem 1.25rem;\r\n    font-weight: 700;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\n.mastfoot {\r\n    color: rgba(255, 255, 255, .5);\r\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--admin  search-->\r\n<div *ngIf=\"authService.adminLoggedIn()||authService.hodLoggedIn()\">\r\n  <div class=\"text-white mb-4\">\r\n \r\n  <form class=\"form-horizontal\" (submit)=\"onSearchSubmit()\">\r\n      <h1 class=\"h3 mb-3 text-center font-weight-normal\">\r\n          <font>ADMIN SEARCH</font>\r\n        </h1>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5\">\r\n          <div class=\"form-group\">\r\n              <label class=\"control-label\">Branch:</label>\r\n              <select class=\"form-control\" name=\"dept\" [(ngModel)]=\"dept\" required>\r\n                <option [ngValue]=\"undefined\" disabled selected>Choose Dept.</option>\r\n                <option value=\"CIVIL\">CIVIL ENGINEERING</option>\r\n                <option value=\"EEE\">ELECTRICAL AND ELECTRONICS ENGINEERING</option>\r\n                <option value=\"MECH\">MECHANICAL ENGINEERING</option>\r\n                <option value=\"ECE\">ELECTRONICS AND COMMUNICATION ENGINEERING</option>\r\n                <option value=\"CSE\">COMPUTER SCIENCE ENGINEERING</option>\r\n                <option value=\"IT\">INFORMATION TECHNOLOGY</option>\r\n              </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <div class=\"form-group\">\r\n            <label>Year:</label>\r\n            <select class=\"form-control\" name=\"year\" [(ngModel)]=\"year\" required>\r\n                <option [ngValue]=\"undefined\" disabled selected>Choose Year</option>\r\n                <option value=\"all\">All</option>\r\n              <option value=\"1year\">I Year</option>\r\n              <option value=\"2year\">II Year</option>\r\n              <option value=\"3year\">III Year</option>\r\n              <option value=\"4year\">IV Year</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n                <label></label>\r\n                <input type=\"submit\" class=\"btn btn-primary button-line\" value=\"Search\">\r\n            </div>\r\n        </div>\r\n        </div>\r\n  </form> \r\n  </div>\r\n\r\n  <div *ngIf=\"hasResult()\">\r\n        <!-- <div class=\"container text-white\">\r\n      <hr>\r\n      <div *ngFor = \"let student of students\">\r\n      <div class=\"row\">\r\n      \r\n        <div class=\"col-md-1\">\r\n          {{student.userid}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n          {{student.name}}\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          {{student.dob}}\r\n        </div>\r\n        <div class =\"col-md-1\">\r\n          {{student.aggregate}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n          {{student.dept}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            {{student.year}}\r\n          </div>\r\n        <div class=\"col-md-1\">\r\n          {{student.role}}\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n          <input type=\"button\" (click)=\"deletestudent(student.userid)\" value=\"Delete\" class=\"btn btn-danger\">\r\n        </div>\r\n        </div>\r\n        <br><br>\r\n      </div>\r\n    </div> -->\r\n    <table class=\"table text-white\">\r\n    <thead>\r\n          <tr>\r\n              <th>#</th>\r\n              <th>Name</th>\r\n              <th>DOB</th>\r\n              <th>Year</th>\r\n              <th>Department</th>\r\n              <th *ngIf=\"authService.adminLoggedIn()\">Opearation</th>\r\n          </tr>\r\n      </thead>\r\n    <!--Table head-->\r\n  \r\n      <!--Table body-->\r\n      <tbody>\r\n          <tr *ngFor=\"let rec of students\">\r\n              <th scope=\"row\">{{students.indexOf(rec)+1}}</th>\r\n              <td>{{rec.name}}</td>\r\n              <td>{{rec.dob}}</td>\r\n              <td>{{rec.year}}</td>\r\n              <td>{{rec.dept}}</td>\r\n              <td *ngIf=\"authService.adminLoggedIn()\"><input type=\"button\" (click)=\"deletestudent(rec)\" value=\"Delete\" class=\"btn btn-danger\"></td>\r\n          </tr>\r\n      </tbody>\r\n      <!--Table body-->\r\n  \r\n  </table>\r\n  <!--Table-->\r\n  </div>\r\n  \r\n  \r\n</div>  \r\n\r\n<!--tpo search page-->\r\n<div *ngIf=\"authService.tpoLoggedIn()\">\r\n<div class=\"text-center\">\r\n\r\n    <div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\r\n        <!-- <header class=\"masthead mb-auto\">\r\n            <div class=\"inner\">\r\n                <nav class=\"nav nav-masthead justify-content-center\">\r\n                </nav>\r\n            </div>\r\n        </header> -->\r\n\r\n        <main role=\"main\" class=\"inner cover\">\r\n            <div class=\"text-center mb-4\" style=\"padding-top: 90px;\">\r\n                <h1 class=\"h3 mb-3 font-weight-normal\">\r\n                    <font color=\"white\"><u>Training & Placement Officer Search</u></font>\r\n                </h1>\r\n            </div>\r\n\r\n            <div class=\" checkMark text-white \" style=\"padding-top: 15px;\">\r\n                <div class=\"p-y-200 col-auto\">\r\n                    <div class=\"Branch form-row col\">\r\n                        <div class=\"bg-primary col-2 rounded p-2 w-25 d-inline text-white\">\r\n                            <h5>Branch</h5>\r\n                        </div>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectdepts($event)\" value=\"CSE\">\r\n                            <label class=\"form-check-label\" for=\"inlineCheckbox1\">CSE</label>\r\n                        </div>&nbsp;&nbsp;&nbsp;\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectdepts($event)\" value=\"ECE\">\r\n                            <label class=\"form-check-label\" for=\"inlineCheckbox2\">ECE</label>\r\n                        </div>&nbsp;&nbsp;&nbsp;\r\n                        <div class=\"form-check form-check-inline\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectdepts($event)\" value=\"IT\">\r\n                                <label class=\"form-check-label\" for=\"inlineCheckbox1\">IT</label>\r\n                            </div>&nbsp;&nbsp;&nbsp;\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectdepts($event)\" value=\"CIVIL\">\r\n                            <label class=\"form-check-label\" for=\"inlineCheckbox2\">CIVIL</label>\r\n                        </div>&nbsp;&nbsp;&nbsp;\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectdepts($event)\" value=\"MECH\">\r\n                            <label class=\"form-check-label\" for=\"inlineCheckbox1\">MECH</label>\r\n                        </div>&nbsp;&nbsp;&nbsp;\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectdepts($event)\" value=\"EEE\">\r\n                            <label class=\"form-check-label\" for=\"inlineCheckbox2\">EEE</label>\r\n                        </div>\r\n                        <!-- <button (click)=\"show()\">show</button> -->\r\n                    </div>\r\n                        <br>\r\n                    <!-- year checkbox -->\r\n                    <div>\r\n\r\n                        <div class=\"d-inline year\">\r\n                            <div class=\"form-row col\">\r\n                                <div class=\"bg-primary rounded col-2 p-2 d-inline-flex text-white\">&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                    <h5>Year</h5>\r\n                                </div>\r\n                                &nbsp;&nbsp;&nbsp;\r\n                                <div class=\"form-check form-check-inline p-2\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectyears($event)\" value=\"1year\">\r\n                                    <label class=\"form-check-label\" for=\"inlineCheckbox1\">FIRST</label>\r\n                                </div>&nbsp;&nbsp;\r\n                                <div class=\"form-check form-check-inline\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectyears($event)\" value=\"2year\">\r\n                                    <label class=\"form-check-label\" for=\"inlineCheckbox2\">SECOND</label>\r\n                                </div>&nbsp;&nbsp;\r\n                                <div class=\"form-check form-check-inline\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectyears($event)\"  value=\"3year\">\r\n                                    <label class=\"form-check-label\" for=\"inlineCheckbox1\">THIRD</label>\r\n                                </div>&nbsp;&nbsp;\r\n                                <div class=\"form-check form-check-inline\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectyears($event)\" value=\"4year\">\r\n                                    <label class=\"form-check-label\" for=\"inlineCheckbox2\">FOURTH</label>\r\n                                </div>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                \r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                    <!-- <br>\r\n                    <br>\r\n\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\" id=\"\">Percentage</span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"min %\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"max %\">\r\n                    </div> -->\r\n                    <br>\r\n                    <div>\r\n                        <input type=\"button\" class=\"text-center btn btn-md btn-primary\" (click)=\"onSearchClick()\" value=\"Search\">\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <br>\r\n        </main></div></div></div>\r\n\r\n<!--result-->\r\n\r\n\r\n  <!-- <div *ngIf=\"!hasResult()\">\r\n    <div class=\"text-center text-white\">\r\n      <p>no result found!</p>\r\n    </div>\r\n  </div> -->\r\n\r\n<div *ngIf=\"tpotable\">\r\n<!--Table-->\r\n<input type=\"button\" class=\"text-center btn btn-md btn-success\" style=\"float:right;margin-bottom:4px;\" onclick=\"tableToExcel('testTable', 'W3C Example Table')\" value=\"Export\">\r\n<table id=\"testTable\" class=\"table text-white\">\r\n\r\n        <!--Table head-->\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>UserId</th>\r\n                <th>Name</th>\r\n                <th>DOB</th>\r\n                <th>Aggregate</th>\r\n                <th>Year</th>\r\n                <th>Department</th>\r\n                <th>E-mail</th>\r\n            </tr>\r\n        </thead>\r\n      <!--Table head-->\r\n    \r\n        <!--Table body-->\r\n        <tbody>\r\n            <tr *ngFor=\"let rec of tpoResult\">\r\n                <th scope=\"row\">{{tpoResult.indexOf(rec)+1}}</th>\r\n                <td>{{rec.userid}}</td>\r\n                <td>{{rec.name}}</td>\r\n                <td>{{rec.dob}}</td>\r\n                <td>{{rec.aggregate}}</td>\r\n                <td>{{rec.year}}</td>\r\n                <td>{{rec.dept}}</td>\r\n                <td>{{rec.email}}</td>\r\n            </tr>\r\n        </tbody>\r\n        <!--Table body-->\r\n    \r\n    </table>\r\n    <!--Table-->\r\n<div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(authService, flashmessage, searchService) {
        this.authService = authService;
        this.flashmessage = flashmessage;
        this.searchService = searchService;
        this.tpotable = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.students = [];
        this.tpodepts = [];
        this.tpoyears = [];
        this.tpoResult = [];
    };
    SearchComponent.prototype.onSearchSubmit = function () {
        var _this = this;
        var basedon = {
            dept: this.dept,
            year: this.year
        };
        this.authService.SearchStudents(basedon)
            .subscribe(function (results) { return _this.students = results; });
    };
    SearchComponent.prototype.hasResult = function () {
        if (this.students.length != 0 || this.tpoResult.length != 0)
            return true;
        else
            return false;
    };
    SearchComponent.prototype.selectdepts = function (ev) {
        if (ev.currentTarget.checked) {
            this.tpodepts.push(ev.target.defaultValue);
            console.log(this.tpodepts);
        }
        else {
            var out = this.tpodepts.splice(this.tpodepts.indexOf(ev.target.defaultValue));
            console.log(this.tpodepts);
        }
    };
    SearchComponent.prototype.selectyears = function (ev) {
        if (ev.currentTarget.checked) {
            this.tpoyears.push(ev.target.defaultValue);
            console.log(this.tpoyears);
        }
        else {
            var out = this.tpoyears.splice(this.tpoyears.indexOf(ev.target.defaultValue));
            console.log(this.tpoyears);
        }
    };
    SearchComponent.prototype.onSearchClick = function () {
        var _this = this;
        if (this.tpodepts.length == 0 && this.tpoyears.length == 0) {
            this.tpoResult = [];
            this.tpotable = false;
            return;
        }
        this.searchService.tpoSearch(JSON.stringify(this.tpodepts), JSON.stringify(this.tpoyears))
            .subscribe(function (data) {
            if (data.length == 0) {
                _this.flashmessage.show("No recoreds found", { cssClass: 'alert-danger text-center', timeOut: 2000 });
                _this.tpotable = false;
                _this.tpoResult = [];
            }
            else {
                _this.tpoResult = data;
                _this.tpotable = true;
                console.log(_this.tpoResult);
            }
        });
    };
    SearchComponent.prototype.deletestudent = function (student) {
        var _this = this;
        console.log(student);
        this.authService.deleteStudent(student.userid).subscribe(function (data) {
            if (data.success) {
                _this.flashmessage.show("student record deleted", { cssClass: 'alert-success text-center', timeOut: 2000 });
                _this.students.splice(_this.students.indexOf(student));
            }
            else {
                console.log(data);
                _this.flashmessage.show("Something went wrong.", { cssClass: 'alert-danger text-center', timeOut: 2000 });
            }
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div role=\"main\" class=\"inner cover text-white text-center\">\r\n  <p>\r\n      <font size=\"10\">Welcome {{role}}</font>\r\n  </p>\r\n  <!-- <p class=\"lead\"><b>Choose The operation you want to perform</b></p> -->\r\n  <!-- <p class=\"lead\">\r\n      <a href=\"#\" class=\"btn btn-lg btn-secondary\">Add New User</a>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \r\n      <a href=\"#\" class=\"btn btn-lg btn-secondary\">Search</a>\r\n  </p> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(authService) {
        this.authService = authService;
        this.role = authService.role;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.authService.adminLoggedIn()) {
            return true;
        }
        else {
            this.authService.logOut();
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.addUser = function (user) {
        var headres = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headres.append('content-type', 'application/json');
        return this.http.post("http://localhost:3000/users/adduser", user, { headers: headres })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteStudent = function (userid) {
        return this.http.delete("http://localhost:3000/student/delete/" + userid)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.feedback = function (data) {
        var headres = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headres.append('content-type', 'application/json');
        return this.http.post("http://localhost:3000/mail/feedback_send", data, { headers: headres })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.sendForgotMail = function (user) {
        var headres = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headres.append('content-type', 'application/json');
        return this.http.post("http://localhost:3000/mail/forgot", user, { headers: headres })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authUser = function (user) {
        var headres = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headres.append('content-type', 'application/json');
        return this.http.post("http://localhost:3000/users/login", user, { headers: headres })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function (userid) {
        var headres = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        return this.http.get("http://localhost:3000/users/profile/" + userid)
            .map(function (res) { return res.json(); });
    };
    // getStudentProfile(userid){
    //   var headres = new Headers();
    //   headres.append('content-type','application/json');
    //   return this.http.get("http://localhost:3000/student/getstudent/"+userid,{headers:headres})
    //     .map(res =>  res.json());
    // }
    AuthService.prototype.SearchStudents = function (basedon) {
        var headres = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headres.append('content-type', 'application/json');
        return this.http.get("http://localhost:3000/student/getstudentbydeptyear/" + basedon.dept + "/" + basedon.year)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateProfile = function (userid, profileData) {
        return this.http.put("http://localhost:3000/users/updateuser/" + userid, profileData)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isProfileFilled = function () {
        var data = JSON.parse(localStorage.getItem('user'));
        if (data.name == undefined || data.name == "") {
            return false;
        }
        else
            return true;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', user.role);
        this.authToken = token;
        this.user = user;
        this.role = user.role;
    };
    AuthService.prototype.loggedIn = function () {
        if (this.jwtHelper.isTokenExpired()) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.studentLoggedIn = function () {
        this.role = localStorage.getItem('role');
        if (this.loggedIn() && this.role == "student") {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.hodLoggedIn = function () {
        this.role = localStorage.getItem('role');
        if (this.loggedIn() && this.role == "hod") {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.tpoLoggedIn = function () {
        this.role = localStorage.getItem('role');
        if (this.loggedIn() && this.role == "tpo") {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.adminLoggedIn = function () {
        this.role = localStorage.getItem('role');
        if (this.loggedIn() && this.role == "admin") {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        this.role = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    PostService.prototype.getStudentPosts = function (dept, year) {
        return this.http.get("http://localhost:3000/post/postsforstudents/" + dept + "/" + year)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getHodPosts = function (dept) {
        return this.http.get("http://localhost:3000/post/postsforhods/" + dept)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getTpoPosts = function () {
        return this.http.get("http://localhost:3000/post/postsfortpos")
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.postNotification = function (postObj) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post("http://localhost:3000/post/sendpost", postObj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    SearchService.prototype.tpoSearch = function (depts, years) {
        return this.http.get("http://localhost:3000/student/tposearch?depts=" + depts + "&years=" + years)
            .map(function (res) { return res.json(); });
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.password == undefined || user.copypassword == undefined || user.role == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    };
    ValidateService.prototype.validatePassword = function (password, copypassword) {
        if (password.length < 8 || password != copypassword)
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.userid == undefined || user.password == undefined) {
            return false;
        }
        else if (user.userid == "" || user.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAddFields = function (user) {
        if (user.userid == undefined || user.password == undefined || user.role == undefined)
            return false;
        else if (user.userid == "" || user.password == "" || user.role == "")
            return false;
        else if ((user.role == "hod" || user.role == "student") && (user.dept == undefined || user.dept == ""))
            return false;
        else
            return true;
    };
    ValidateService.prototype.studentProfilevalidation = function (student) {
        if (student.name == undefined || student.dob == undefined || student.year == undefined || student.aggregate == undefined || student.email == undefined || student.phone == undefined || student.address == undefined)
            return false;
        else if (student.name == "" || student.dob == "" || student.year == "" || student.aggregate == "" || student.email == "" || student.phone == "" || student.address == "")
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateFeed = function (obj) {
        if (obj.firstname == "" || obj.lastname == "" || obj.country == "" || obj.state == "" || obj.zip == "" || obj.email == "" || obj.feedback == "" || obj.address == "") {
            return false;
        }
        else if (obj.firstname == undefined || obj.lastname == undefined || obj.country == undefined || obj.state == undefined || obj.zip == undefined || obj.email == undefined || obj.feedback == undefined || obj.address == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
    production: false
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

module.exports = __webpack_require__(/*! F:\MEAN\project\FRONTEND\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map