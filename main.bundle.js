webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 151;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(163);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_project_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signtype_signtype_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_result_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info1_info1_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__info2_info2_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preview_preview_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__workflow_workflow_guard_service__ = __webpack_require__(162);
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    // Project Description Route
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_2__project_project_component__["a" /* ProjectComponent */] },
    { path: 'signtype', component: __WEBPACK_IMPORTED_MODULE_3__signtype_signtype_component__["a" /* SignTypeComponent */] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_4__result_result_component__["a" /* ResultComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    { path: 'info1', component: __WEBPACK_IMPORTED_MODULE_5__info1_info1_component__["a" /* Info1Component */] },
    { path: 'info2', component: __WEBPACK_IMPORTED_MODULE_6__info2_info2_component__["a" /* Info2Component */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    { path: 'preview', component: __WEBPACK_IMPORTED_MODULE_7__preview_preview_component__["a" /* PreviewComponent */] },
    { path: '', redirectTo: '/project', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__project_project_component__["a" /* ProjectComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__workflow_workflow_guard_service__["a" /* WorkflowGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'BRB Calculator';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "formData", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'multi-step-wizard-app',
        template: __webpack_require__(325)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_project_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signtype_signtype_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__result_result_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview_preview_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info1_info1_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__info2_info2_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_formData_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* App Root */


/* Wizard Components */






/* Routing Module */

/* Shared Service */


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_12__data_formData_service__["a" /* FormDataService */], useClass: __WEBPACK_IMPORTED_MODULE_12__data_formData_service__["a" /* FormDataService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__["a" /* WorkflowService */], useClass: __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__["a" /* WorkflowService */] }],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_5__project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_6__signtype_signtype_component__["a" /* SignTypeComponent */], __WEBPACK_IMPORTED_MODULE_7__result_result_component__["a" /* ResultComponent */], __WEBPACK_IMPORTED_MODULE_8__preview_preview_component__["a" /* PreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__info1_info1_component__["a" /* Info1Component */], __WEBPACK_IMPORTED_MODULE_10__info2_info2_component__["a" /* Info2Component */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'msw-navbar',
        template: __webpack_require__(328)
    })
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowGuard = (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        ;
        return true;
    };
    return WorkflowGuard;
}());
WorkflowGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object])
], WorkflowGuard);

var _a, _b;
//# sourceMappingURL=workflow-guard.service.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormDataService = (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */]();
        this.isProjectFormValid = false;
        this.isSignTypeFormValid = false;
    }
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isProjectFormValid = this.isSignTypeFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isProjectFormValid &&
            this.isSignTypeFormValid;
    };
    FormDataService.prototype.getProject = function () {
        // Return the Project data
        var project = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            description: this.formData.description,
            location: this.formData.location,
            phoneNumber: this.formData.phoneNumber
        };
        return project;
    };
    FormDataService.prototype.setProject = function (data) {
        // Update the Project data only when the Project Form had been validated successfully
        this.isProjectFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.description = data.description;
        this.formData.location = data.location;
        this.formData.phoneNumber = data.phoneNumber;
        // Validate Project Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].project);
    };
    FormDataService.prototype.getSignType = function () {
        // Return the work type
        return [this.formData.signType, this.formData.streetCount, this.formData.sqFootage];
    };
    FormDataService.prototype.getCoefficient = function (setback, angle) {
        console.log(setback + " - " + angle);
        if (setback >= 5 && setback <= 50) {
            if (angle >= 0 && angle <= 15) {
                return 0.5;
            }
            if (angle >= 16 && angle <= 30) {
                return 0.6;
            }
            if (angle >= 31 && angle <= 45) {
                return 0.7;
            }
            if (angle >= 46 && angle <= 60) {
                return 0.8;
            }
            if (angle >= 61 && angle <= 75) {
                return 0.9;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.0;
            }
        }
        if (setback > 50 && setback <= 100) {
            if (angle >= 0 && angle <= 15) {
                return 0.55;
            }
            if (angle >= 16 && angle <= 30) {
                return 0.65;
            }
            if (angle >= 31 && angle <= 45) {
                return 0.75;
            }
            if (angle >= 46 && angle <= 60) {
                return 0.85;
            }
            if (angle >= 61 && angle <= 75) {
                return 0.95;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.05;
            }
        }
        if (setback > 100 && setback <= 150) {
            if (angle >= 0 && angle <= 15) {
                return 0.6;
            }
            if (angle >= 16 && angle <= 30) {
                return 0.7;
            }
            if (angle >= 31 && angle <= 45) {
                return 0.8;
            }
            if (angle >= 46 && angle <= 60) {
                return 0.9;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.0;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.10;
            }
        }
        if (setback > 150 && setback <= 200) {
            if (angle >= 0 && angle <= 15) {
                return 0.65;
            }
            if (angle >= 16 && angle <= 30) {
                return 0.75;
            }
            if (angle >= 31 && angle <= 45) {
                return 0.85;
            }
            if (angle >= 46 && angle <= 60) {
                return 0.95;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.05;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.15;
            }
        }
        if (setback > 200 && setback <= 250) {
            if (angle >= 0 && angle <= 15) {
                return 0.7;
            }
            if (angle >= 16 && angle <= 30) {
                return 0.8;
            }
            if (angle >= 31 && angle <= 45) {
                return 0.9;
            }
            if (angle >= 46 && angle <= 60) {
                return 1.0;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.1;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.2;
            }
        }
        if (setback > 250 && setback <= 300) {
            if (angle >= 0 && angle <= 15) {
                return 0.75;
            }
            if (angle >= 16 && angle <= 30) {
                return 0.85;
            }
            if (angle >= 31 && angle <= 45) {
                return 0.95;
            }
            if (angle >= 46 && angle <= 60) {
                return 1.05;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.15;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.25;
            }
        }
        if (setback > 300 && setback <= 350) {
            if (angle >= 0 && angle <= 15) {
                return 0.8;
            }
            if (angle >= 16 && angle <= 30) {
                return 0.9;
            }
            if (angle >= 31 && angle <= 45) {
                return 1.0;
            }
            if (angle >= 46 && angle <= 60) {
                return 1.1;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.2;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.3;
            }
        }
        if (setback > 350 && setback <= 400) {
            if (angle >= 0 && angle <= 15) {
                return 0.85;
            }
            if (angle >= 16 && angle <= 30) {
                return 0.95;
            }
            if (angle >= 31 && angle <= 45) {
                return 1.05;
            }
            if (angle >= 46 && angle <= 60) {
                return 1.15;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.25;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.35;
            }
        }
        if (setback > 400 && setback <= 450) {
            if (angle >= 0 && angle <= 15) {
                return 0.9;
            }
            if (angle >= 16 && angle <= 30) {
                return 1.0;
            }
            if (angle >= 31 && angle <= 45) {
                return 1.1;
            }
            if (angle >= 46 && angle <= 60) {
                return 1.2;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.3;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.4;
            }
        }
        if (setback > 450 && setback <= 500) {
            if (angle >= 0 && angle <= 15) {
                return 0.95;
            }
            if (angle >= 16 && angle <= 30) {
                return 1.05;
            }
            if (angle >= 31 && angle <= 45) {
                return 1.15;
            }
            if (angle >= 46 && angle <= 60) {
                return 1.25;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.35;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.45;
            }
        }
        if (setback > 500) {
            if (angle >= 0 && angle <= 15) {
                return 1.0;
            }
            if (angle >= 16 && angle <= 30) {
                return 1.1;
            }
            if (angle >= 31 && angle <= 45) {
                return 1.2;
            }
            if (angle >= 46 && angle <= 60) {
                return 1.3;
            }
            if (angle >= 61 && angle <= 75) {
                return 1.4;
            }
            if (angle >= 76 && angle <= 90) {
                return 1.5;
            }
        }
    };
    FormDataService.prototype.setSignType = function (signType, streetCount, sqFootage, freestandingSigns, buildingSigns) {
        // Update the work type only when the Work Form had been validated successfully
        this.isSignTypeFormValid = true;
        this.formData.signType = signType;
        this.formData.streetCount = streetCount;
        this.formData.sqFootage = sqFootage;
        this.formData.freestandingSigns = [];
        if (freestandingSigns == 0) {
            this.formData.freestandingSigns = [];
        }
        else {
            for (var i = 0; i < freestandingSigns; i++) {
                var signParams = {
                    description: String(i + 1),
                    completed: false
                };
                this.formData.freestandingSigns.push(signParams);
            }
        }
        this.formData.buildingSigns = [];
        if (buildingSigns == 0) {
            this.formData.buildingSigns = [];
        }
        else {
            for (var i = 0; i < buildingSigns; i++) {
                var signParams = {
                    description: String(i + 1),
                    completed: false
                };
                this.formData.buildingSigns.push(signParams);
            }
        }
        // Validate Work Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].signtype);
    };
    FormDataService.prototype.setFreestandingSign = function (orderNumber) {
        this.formData.freestandingSigns[orderNumber].completed = true;
    };
    return FormDataService;
}());
FormDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]) === "function" && _a || Object])
], FormDataService);

var _a;
//# sourceMappingURL=formData.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "/* Tooltip container */\n.tooltip1 {\n    position: relative;\n    display: inline-block;\n}\n\n/* Tooltip text */\n.tooltip1 .tooltiptext1 {\n    visibility: hidden;\n    width: 320px;\n    background-color: #454545;\n    color: #ffffff;\n    text-align: left;\n    padding: 5px;\n    border-radius: 6px;\n\n    /* Position the tooltip text - see examples below! */\n    position: absolute;\n    z-index: 1;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip1:hover .tooltiptext1 {\n    visibility: visible;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "/* Tooltip container */\n.tooltip1 {\n    position: relative;\n    display: inline-block;\n}\n\n/* Tooltip text */\n.tooltip1 .tooltiptext1 {\n    visibility: hidden;\n    width: 320px;\n    background-color: #454545;\n    color: #ffffff;\n    text-align: left;\n    padding: 5px;\n    border-radius: 6px;\n\n    /* Position the tooltip text - see examples below! */\n    position: absolute;\n    z-index: 1;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip1:hover .tooltiptext1 {\n    visibility: visible;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<section style=\"background:#efefe9;\">\n    <div class=\"container\">\n        <div class=\"board\">\n            <!-- Navigation Area (Circular Tabs) -->\n            <msw-navbar></msw-navbar>\n            <!-- End Navigation Area (Circular Tabs) -->\n\n            <!-- Content Area -->\n            <div class=\"tab-content\">\n                <!-- Routed view  -->\n                <router-outlet></router-outlet>\n            </div>\n            <!-- End Content Area -->\n        </div>\n\n        <!-- For Debugging: show our formData as it is being typed -->\n        <!-- <pre>{{ formData | json }}</pre> -->\n    </div>\n</section>\n"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<form #projectForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n          <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"row\">\n                    <div class='col-xs-3 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"name\">BRB Available: </label>\n                        </div>\n                    </div>\n                    <div class='col-xs-9 col-sm-6'>\n                        {{formData.brbAvailable}}\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"this.formData.activeFreestandingSign >= 0\">\n                    <div class='col-xs-3 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"email\">Sign maximum BRB: </label>\n                        </div>\n                    </div>\n                    <div class='col-xs-9 col-sm-6'>\n                      {{formData.brbLimit}}\n                    </div>\n               </div>\n            </div>\n        </div>\n        <div class='row'>\n            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n              <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"email\">Requested BRB</label>\n                  <input class=\"form-control input-md\" #brb=\"ngModel\" required id=\"brb\" name=\"brb\" type=\"text\" placeholder=\"Requested BRB\" [(ngModel)]=\"sign.brb\">\n                  <div [hidden]=\"!projectForm.submitted\">\n                    <div class=\"alert alert-danger\" [hidden]=\"brb.valid\">Requested BRB is required</div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"firstname\">Height</label>\n                      <div class=\"tooltip1\">\n                        <i class=\"glyphicon glyphicon-info-sign tooltip1\" (mouseenter)=\"mouseHover($event)\"  style=\"color: #22c222;\"></i>\n                        <span class=\"tooltiptext1\">Height of the sign (as measure from finish grade to the top of the sign; in feet. Maximum height is 26 feet)</span>\n                      </div>\n                      <input class=\"form-control input-md\" #height=\"ngModel\" required id=\"height\" name=\"height\" type=\"text\" pattern=\"^0*([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-8][0-9]{4}|9[0-8][0-9]{3}|99[0-8][0-9]{2}|999[0-8][0-9]|9999[0-9]|[1-8][0-9]{5}|9[0-8][0-9]{4}|99[0-8][0-9]{3}|999[0-8][0-9]{2}|9999[0-8][0-9]|99999[0-9]|1000000)$\" placeholder=\"Height\" [(ngModel)]=\"sign.height\">\n                      <div [hidden]=\"!height.errors\">\n                        <div class=\"alert alert-danger\" *ngIf=\"height.errors?.pattern\">Minimum Height is 1ft</div>\n                      </div>\n                  </div>\n                </div>\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"lastname\">Speed</label>\n                        <div class=\"tooltip1\">\n                          <i class=\"glyphicon glyphicon-info-sign tooltip1\" (mouseenter)=\"mouseHover($event)\"  style=\"color: #22c222;\"></i>\n                          <span class=\"tooltiptext1\">Vehicle speed limit on the street where the sign is to be viewed</span>\n                        </div>\n                        <input class=\"form-control input-md\" #speed=\"ngModel\" required id=\"speed\" name=\"speed\" type=\"text\" pattern=\"^0*([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-8][0-9]{4}|9[0-8][0-9]{3}|99[0-8][0-9]{2}|999[0-8][0-9]|9999[0-9]|[1-8][0-9]{5}|9[0-8][0-9]{4}|99[0-8][0-9]{3}|999[0-8][0-9]{2}|9999[0-8][0-9]|99999[0-9]|1000000)$\" placeholder=\"Speed\" [(ngModel)]=\"sign.speed\">\n                        <div [hidden]=\"!speed.errors\">\n                          <div class=\"alert alert-danger\" *ngIf=\"speed.errors?.pattern\">Speed cannot be aero</div>\n                        </div>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"firstname\">Setback from Property Line</label>\n                      <input class=\"form-control input-md\" #setback=\"ngModel\" required id=\"setback\" name=\"setback\" type=\"text\" pattern=\"^0*([5-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-8][0-9]{4}|9[0-8][0-9]{3}|99[0-8][0-9]{2}|999[0-8][0-9]|9999[0-9]|[1-8][0-9]{5}|9[0-8][0-9]{4}|99[0-8][0-9]{3}|999[0-8][0-9]{2}|9999[0-8][0-9]|99999[0-9]|1000000)$\" placeholder=\"Setback\" [(ngModel)]=\"sign.setback\">\n                      <div [hidden]=\"!setback.errors\">\n                        <!-- <div class=\"alert alert-danger\" [hidden]=\"setback.valid\">Setback is required</div> -->\n                        <div class=\"alert alert-danger\" *ngIf=\"setback.errors?.pattern\">Minimum Setback is 5ft</div>\n                      </div>\n                  </div>\n                </div>\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"lastname\">Angle to Street</label>\n                        <input class=\"form-control input-md\" #angle=\"ngModel\" required id=\"angle\" name=\"angle\" type=\"text\" pattern=\"^0*([0-9]|[1-8][0-9]|90)$\" placeholder=\"Angle\" [(ngModel)]=\"sign.angle\">\n                        <div [hidden]=\"!angle.errors\">\n                          <div class=\"alert alert-danger\" *ngIf=\"angle.errors?.pattern\">Angle could be from 0 to 90</div>\n                        </div>\n                    </div>\n                </div>\n              </div>\n                <div class=\"form-group text-center\">\n                  <button class=\"btn btn-outline-rounded btn-default\" (click)=\"back()\" type=\"button\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Back</button>\n                  <button class=\"btn btn-success btn-outline-rounded btn-info\" [disabled]=\"!projectForm.valid\" (click)=\"confirm(projectForm)\" type=\"button\"> Confirm </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "<form #signTypeForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"form-horizontal\">\n        <div class=\"tab-pane fade in active\">\n            <h4 class=\"head text-center\">{{title}}</h4>\n            <br/>\n            <div class=\"row\">\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Square Footage</label>\n                    <input class=\"form-control input-md\" #description=\"ngModel\" required id=\"sqfootage\" name=\"sqfootage\" type=\"text\" placeholder=\"Square Footage\" [(ngModel)]=\"sqFootage\">\n                    <div [hidden]=\"!signTypeForm.submitted\">\n                      <div class=\"alert alert-danger\" [hidden]=\"description.valid\">Square Footage is required</div>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Location</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #signtype=\"ngModel\" required name=\"signtype\" [(ngModel)]=\"signType\" value=\"0\">\n                            Businesses not located in a multiple business complex\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #signtype=\"ngModel\" required name=\"signtype\" [(ngModel)]=\"signType\" value=\"1\">\n                            Businesses in a multiple business complex where signage is (or will be) provided to identify the complex\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #signtype=\"ngModel\" required name=\"signtype\" [(ngModel)]=\"signType\" value=\"2\">\n                            Businesses in a multiple business complex where signage is not (and will not) be provided to identify the complex\n                        </label>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Primary Access Streets</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"streetcount\" [(ngModel)]=\"streetCount\" value=1>\n                            One\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"streetcount\" [(ngModel)]=\"streetCount\" value=2>\n                            Two\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"streetcount\" [(ngModel)]=\"streetCount\" value=3>\n                            Three\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"streetcount\" [(ngModel)]=\"streetCount\" value=4>\n                            Four\n                        </label>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group text-center space-20\">\n                <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(signTypeForm)\" type=\"button\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!signTypeForm.valid\" (click)=\"goToNext(signTypeForm)\" type=\"button\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "<div class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n\n        <!-- circular user icon -->\n        <li>\n            <a routerLink=\"/project\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"project\">\n                <span class=\"round-tabs brown\">\n                    <i class=\"glyphicon glyphicon-home\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular tasks icon -->\n         <li>\n            <a routerLink=\"/signtype\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"work\">\n                <span class=\"round-tabs yellow\">\n                    <i class=\"glyphicon glyphicon-tasks\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular ok icon -->\n        <li>\n            <a routerLink=\"/result\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs blue\">\n                    <i class=\"glyphicon glyphicon-pencil\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular tasks icon -->\n         <!-- <li>\n            <a routerLink=\"/info1\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"work\">\n                <span class=\"round-tabs brown\">\n                    <i class=\"glyphicon glyphicon-th-list\"></i>\n                </span>\n            </a>\n        </li> -->\n\n        <!-- circular ok icon -->\n        <!-- <li>\n            <a routerLink=\"/info2\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs blue\">\n                    <i class=\"glyphicon glyphicon-tasks\"></i>\n                </span>\n            </a>\n        </li> -->\n        <!-- circular ok icon -->\n        <li>\n            <a routerLink=\"/preview\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs green\">\n                    <i class=\"glyphicon glyphicon-ok\"></i>\n                </span>\n            </a>\n        </li>\n    </ul>\n    <div class=\"clearfix\"></div>\n</div>\n\n<!-- Close the Splash screen -->\n<script src=\"assets/js/loading-bars.js\"></script>\n"

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade in active\" id=\"print-selection\" style=\"background-color:#fff;\">\n    <h3 class=\"head text-center\">{{title}}</h3>\n    <div class='row'>\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\n            <div class=\"row\" *ngIf=\"this.formData.firstName || this.formData.lastName\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"name\">Name: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.firstName + ' ' + formData.lastName}}\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"this.formData.phoneNumber\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"email\">Phone: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.phoneNumber}}\n                </div>\n           </div>\n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"work\">Project: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.description}}\n                </div>\n           </div>\n           <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"address\">Location: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.location}}\n                </div>\n            </div>\n            <div class=\"row\">\n                 <div class='col-xs-3 col-sm-2'>\n                     <div class=\"form-group\">\n                         <label class=\"control-label\" for=\"address\">Unused BRB: </label>\n                     </div>\n                 </div>\n                 <div class='col-xs-9 col-sm-10'>\n                     {{formData.brbAvailable}}\n                 </div>\n             </div>\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-offset-1 col-xs-10\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Streets</th>\n              <th scope=\"col\">Floor Space Reference</th>\n              <th scope=\"col\">Business</th>\n              <th scope=\"col\">BRB</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">{{ this.streets }}</th>\n              <td>{{this.formData.area}} x {{this.valueD}}</td>\n              <td *ngIf=\"this.formData.signType == 0\">Individual ({{this.valueC}})</td>\n              <td *ngIf=\"this.formData.signType == 1\">MultipleYes ({{this.valueC}})</td>\n              <td *ngIf=\"this.formData.signType == 2\">MultipleNo ({{this.valueC}})</td>\n              <td>{{this.formData.brb}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"formData.freestandingSigns.length > 0\">\n      <div class=\"col-xs-offset-1 col-xs-10\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th scope=\"col\" class=\"col-xs-2\">Freestanding</th>\n              <th scope=\"col\">BRB</th>\n              <th scope=\"col\">Height</th>\n              <th scope=\"col\">Speed</th>\n              <th scope=\"col\">Setback</th>\n              <th scope=\"col\">Angle</th>\n              <th scope=\"col\">Sign Area</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of formData.freestandingSigns; let i = index\">\n              <th scope=\"row\">Sign #{{item.description}}</th>\n              <td>{{item.brb}}</td>\n              <td>{{item.height}}</td>\n              <td>{{item.speed}}</td>\n              <td>{{item.setback}}</td>\n              <td>{{item.angle}}</td>\n              <td>{{item.area}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"formData.buildingSigns.length > 0\">\n      <div class=\"col-xs-offset-1 col-xs-10\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th scope=\"col\" class=\"col-xs-2\">Building</th>\n              <th scope=\"col\">BRB</th>\n              <th scope=\"col\">Height</th>\n              <th scope=\"col\">Speed</th>\n              <th scope=\"col\">Setback</th>\n              <th scope=\"col\">Angle</th>\n              <th scope=\"col\">Sign Area</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of formData.buildingSigns; let i = index\">\n              <th scope=\"row\">Sign #{{item.description}}</th>\n              <td>{{item.brb}}</td>\n              <td>{{item.height}}</td>\n              <td>{{item.speed}}</td>\n              <td>{{item.setback}}</td>\n              <td>{{item.angle}}</td>\n              <td>{{item.area}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n</div>\n<div class=\"text-center\">\n    <button class=\"btn btn-default btn-outline-rounded\" (click)=\"print()\" type=\"button\"> Download PDF </button>\n    <button class=\"btn btn-default btn-outline-rounded\" (click)=\"print1()\" type=\"button\"> Print </button>\n</div>\n"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<form #projectForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n              <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"email\">Project description</label>\n                  <input class=\"form-control input-md\" #description=\"ngModel\" required id=\"description\" name=\"description\" type=\"text\" placeholder=\"Project Description\" [(ngModel)]=\"project.description\">\n                  <div [hidden]=\"!projectForm.submitted\">\n                    <div class=\"alert alert-danger\" [hidden]=\"description.valid\">Project description is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"email\">Location</label>\n                  <input class=\"form-control input-md\" #location=\"ngModel\" required id=\"location\" name=\"location\" type=\"text\" placeholder=\"Sign Location\" [(ngModel)]=\"project.location\">\n                  <div [hidden]=\"!projectForm.submitted\">\n                    <div class=\"alert alert-danger\" [hidden]=\"location.valid\">Project location is required</div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"firstname\">First Name</label>\n                      <input class=\"form-control input-md\" #firstname=\"ngModel\" id=\"firstname\" name=\"firstname\" type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"project.firstName\">\n                      <!-- <div [hidden]=\"!projectForm.submitted\">\n                        <div class=\"alert alert-danger\" [hidden]=\"firstname.valid\">First Name is required</div>\n                      </div> -->\n                  </div>\n                </div>\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"lastname\">Last Name</label>\n                        <input class=\"form-control input-md\" #lastname=\"ngModel\" id=\"lastname\" name=\"lastname\" type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"project.lastName\">\n                        <!-- <div [hidden]=\"!projectForm.submitted\">\n                          <div class=\"alert alert-danger\" [hidden]=\"lastname.valid\">Last Name is required</div>\n                        </div> -->\n                    </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"email\">Phone Number</label>\n                  <input class=\"form-control input-md\" #phonenumber=\"ngModel\" id=\"phonenumber\" name=\"phonenumber\" type=\"text\" placeholder=\"Phone Number\" [(ngModel)]=\"project.phoneNumber\">\n                  <!-- <div [hidden]=\"!projectForm.submitted\">\n                    <div class=\"alert alert-danger\" [hidden]=\"phonenumber.valid\">Phone Number is required</div>\n                  </div> -->\n              </div>\n                <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-outline-rounded btn-info\" [disabled]=\"!projectForm.valid\" (click)=\"goToNext(projectForm)\" type=\"button\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade in active\">\n    <h3 class=\"head text-center\">{{title}}</h3>\n    <div class='row'>\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\n            <div class=\"row\" *ngIf=\"this.formData.firstName || this.formData.lastName\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"name\">Name: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.firstName + ' ' + formData.lastName}}\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"this.formData.phoneNumber\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"email\">Phone: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.phoneNumber}}\n                </div>\n           </div>\n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"work\">Project: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.description}}\n                </div>\n           </div>\n           <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"address\">Location: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.location}}\n                </div>\n            </div>\n            <div class=\"row\">\n                 <div class='col-xs-3 col-sm-2'>\n                     <div class=\"form-group\">\n                         <label class=\"control-label\" for=\"address\">Unused BRB: </label>\n                     </div>\n                 </div>\n                 <div class='col-xs-9 col-sm-10'>\n                   {{formData.brbAvailable}}\n                 </div>\n             </div>\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-offset-1 col-xs-10\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Streets</th>\n              <th scope=\"col\">Floor Space Reference</th>\n              <th scope=\"col\">Business</th>\n              <th scope=\"col\">BRB</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">{{ this.streets }}</th>\n              <td>{{this.formData.area}} x {{this.valueD}}</td>\n              <td *ngIf=\"this.formData.signType == 0\">Individual ({{this.valueC}})</td>\n              <td *ngIf=\"this.formData.signType == 1\">MultipleYes ({{this.valueC}})</td>\n              <td *ngIf=\"this.formData.signType == 2\">MultipleNo ({{this.valueC}})</td>\n              <td *ngIf=\"this.formData.signType == 3\">MultipleYesComplex</td>\n              <td>{{this.formData.brb}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\"></th>\n              <td></td>\n              <td>50% split of BRB is</td>\n              <td>{{this.formData.brb/2}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"formData.freestandingSigns.length > 0\">\n      <div class=\"col-xs-offset-1 col-xs-10\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th scope=\"col\" class=\"col-xs-2\">Freestanding</th>\n              <th scope=\"col\">BRB</th>\n              <th scope=\"col\">Height</th>\n              <th scope=\"col\">Speed</th>\n              <th scope=\"col\">Setback</th>\n              <th scope=\"col\">Angle</th>\n              <th scope=\"col\">Sign Area</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of formData.freestandingSigns; let i = index\">\n              <th scope=\"row\">Sign #{{item.description}}</th>\n              <td>{{item.brb}}</td>\n              <td>{{item.height}}</td>\n              <td>{{item.speed}}</td>\n              <td>{{item.setback}}</td>\n              <td>{{item.angle}}</td>\n              <td>{{item.area}}</td>\n              <td class=\"text-right\">\n                <button class=\"btn btn-default btn-sm\" (click)=\"goToEditSign(i)\" *ngIf=\"item.completed\" type=\"button\">Edit Sign</button>\n                <button class=\"btn btn-default btn-sm btn-info\" (click)=\"goToEditSign(i)\" *ngIf=\"!item.completed\" type=\"button\">Setup Sign</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"formData.buildingSigns.length > 0\">\n      <div class=\"col-xs-offset-1 col-xs-10\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th scope=\"col\" class=\"col-xs-2\">Building</th>\n              <th scope=\"col\">BRB</th>\n              <th scope=\"col\">Height</th>\n              <th scope=\"col\">Speed</th>\n              <th scope=\"col\">Setback</th>\n              <th scope=\"col\">Angle</th>\n              <th scope=\"col\">Sign Area</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of formData.buildingSigns; let i = index\">\n              <th scope=\"row\">Sign #{{item.description}}</th>\n              <td>{{item.brb}}</td>\n              <td>{{item.height}}</td>\n              <td>{{item.speed}}</td>\n              <td>{{item.setback}}</td>\n              <td>{{item.angle}}</td>\n              <td>{{item.area}}</td>\n              <td class=\"text-right\">\n                <button class=\"btn btn-default btn-sm\" (click)=\"goToEditBuildingSign(i)\" *ngIf=\"item.completed\" type=\"button\">Edit Sign</button>\n                <button class=\"btn btn-default btn-sm btn-info\" (click)=\"goToEditBuildingSign(i)\" *ngIf=\"!item.completed\" type=\"button\">Setup Sign</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"text-center\">\n        <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!isFormValid\" (click)=\"submit()\" type=\"button\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n</div>\n"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<form #signTypeForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"form-horizontal\">\n        <div class=\"tab-pane fade in active\">\n            <h4 class=\"head text-center\">{{title}}</h4>\n            <br/>\n            <div class=\"row\">\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Business Floor Square Footage</label>\n                    <input class=\"form-control input-md\" #description=\"ngModel\" required id=\"sqfootage\" name=\"sqfootage\" type=\"text\" placeholder=\"Square Footage\" [(ngModel)]=\"sqFootage\">\n                    <div [hidden]=\"!signTypeForm.submitted\">\n                      <div class=\"alert alert-danger\" [hidden]=\"description.valid\">Square Footage is required</div>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Location</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #signtype=\"ngModel\" required name=\"signtype\" [(ngModel)]=\"signType\" value=\"0\">\n                            Businesses not located in a multiple business complex\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #signtype=\"ngModel\" required name=\"signtype\" [(ngModel)]=\"signType\" value=\"1\">\n                            Businesses in a multiple business complex where signage is (or will be) provided to identify the complex\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #signtype=\"ngModel\" required name=\"signtype\" [(ngModel)]=\"signType\" value=\"2\">\n                            Businesses in a multiple business complex where signage is not (and will not) be provided to identify the complex\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" #signtype=\"ngModel\" required name=\"signtype\" [(ngModel)]=\"signType\" value=\"3\">\n                            Signage is provided to identify the complex\n                        </label>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                  <div style=\"display:block;\">\n                    <p style=\"display: inline-block;\"><label class=\"control-label\" for=\"email\">Primary Access Streets</label></p>\n                    <div class=\"tooltip1\">\n                      <i class=\"glyphicon glyphicon-info-sign tooltip1\" (mouseenter)=\"mouseHover($event)\"  style=\"color: #22c222;\"></i>\n                      <span class=\"tooltiptext1\">No. of Streets the business is accessed from</span>\n                    </div>\n                  </div>\n                    <div class=\"radio-inline\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"streetcount\" [(ngModel)]=\"streetCount\" value=1>\n                            One\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"streetcount\" [(ngModel)]=\"streetCount\" value=2>\n                            Two\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"streetcount\" [(ngModel)]=\"streetCount\" value=3>\n                            Three\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"streetcount\" [(ngModel)]=\"streetCount\" value=4>\n                            Four\n                        </label>\n                    </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Freestanding Signs</label>\n                    <p>You can select less than your maximum and applying remaining signature to your building signs</p>\n                    <div class=\"radio-inline\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"freestandingcount\" [(ngModel)]=\"freestandingCount\" value=0>\n                            None\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                        <label [ngClass]=\"isDisabled1()?'text-muted':''\">\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"freestandingcount\" [(ngModel)]=\"freestandingCount\" value=1 [attr.disabled]=\"isDisabled1()\">\n                            One\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                        <label [ngClass]=\"isDisabled2()?'text-muted':''\">\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"freestandingcount\" [(ngModel)]=\"freestandingCount\" value=2 [attr.disabled]=\"isDisabled2()\">\n                            Two\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                        <label [ngClass]=\"isDisabled3()?'text-muted':''\">\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"freestandingcount\" [(ngModel)]=\"freestandingCount\" value=3 [attr.disabled]=\"isDisabled3()\">\n                            Three\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                        <label [ngClass]=\"isDisabled4()?'text-muted':''\">\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"freestandingcount\" [(ngModel)]=\"freestandingCount\" value=4 [attr.disabled]=\"isDisabled4()\">\n                            Four\n                        </label>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                    <p><label class=\"control-label\" for=\"email\">Building Signs</label></p>\n                    <div class=\"radio-inline\">\n                        <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"buildingcount\" [(ngModel)]=\"buildingCount\" value=0>\n                            None\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                      <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"buildingcount\" [(ngModel)]=\"buildingCount\" value=1>\n                            One\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                      <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"buildingcount\" [(ngModel)]=\"buildingCount\" value=2>\n                            Two\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                      <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"buildingcount\" [(ngModel)]=\"buildingCount\" value=3>\n                            Three\n                        </label>\n                    </div>\n                    <div class=\"radio-inline\">\n                      <label>\n                            <input type=\"radio\" #streetcount=\"ngModel\" required name=\"buildingcount\" [(ngModel)]=\"buildingCount\" value=4>\n                            Four\n                        </label>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group text-center space-20\">\n                <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(signTypeForm)\" type=\"button\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!signTypeForm.valid\" (click)=\"goToNext(signTypeForm)\" type=\"button\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormData; });
/* unused harmony export SignParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SignType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StreetSignCount; });
/* unused harmony export Project */
var Constants;
(function (Constants) {
    Constants.formulaC = {
        individual: 1.1,
        multipleComplexYes: 0.9,
        multipleComplexNo: 1.0,
    };
    Constants.formulaD = {
        oneStreet: 1.0,
        twoStreet: 1.41,
        threeStreet: 1.73,
        fourStreet: 2.0,
    };
    Constants.formulaDMultiple = {
        oneStreet: 0.5,
        twoStreet: 0.7,
        threeStreet: 0.85,
        fourStreet: 1.0,
    };
})(Constants || (Constants = {}));
var FormData = (function () {
    function FormData() {
        this.description = '';
        this.location = '';
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber = '';
        this.sqFootage = '';
        this.freestandingSigns = [];
        this.buildingSigns = [];
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.description = '';
        this.location = '';
        this.phoneNumber = '';
    };
    return FormData;
}());

var SignParams = (function () {
    function SignParams() {
        this.description = '';
    }
    return SignParams;
}());

var SignType;
(function (SignType) {
    SignType[SignType["Individual"] = 0] = "Individual";
    SignType[SignType["MultipleYes"] = 1] = "MultipleYes";
    SignType[SignType["MultipleNo"] = 2] = "MultipleNo";
    SignType[SignType["MultipleYesComplex"] = 3] = "MultipleYesComplex";
})(SignType || (SignType = {}));
var StreetSignCount;
(function (StreetSignCount) {
    StreetSignCount[StreetSignCount["None"] = 0] = "None";
    StreetSignCount[StreetSignCount["One"] = 1] = "One";
    StreetSignCount[StreetSignCount["Two"] = 2] = "Two";
    StreetSignCount[StreetSignCount["Three"] = 3] = "Three";
    StreetSignCount[StreetSignCount["Four"] = 4] = "Four";
})(StreetSignCount || (StreetSignCount = {}));
var Project = (function () {
    function Project() {
        this.description = '';
        this.location = '';
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber = '';
    }
    return Project;
}());

//# sourceMappingURL=formData.model.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workflow_model__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = (function () {
    function WorkflowService() {
        this.workflow = [
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].project, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].signtype, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].result, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].preview, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    return WorkflowService;
}());
WorkflowService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], WorkflowService);

//# sourceMappingURL=workflow.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_model__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_formData_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Info1Component = (function () {
    function Info1Component(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Sign Parameters';
        this.sign = {
            description: "",
            completed: false
        };
    }
    Info1Component.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        if (this.formData.activeFreestandingSign >= 0) {
            this.sign = this.formData.freestandingSigns[this.formData.activeFreestandingSign];
            this.title = "Freestanding Sign #" + this.sign.description;
        }
        else {
            this.sign = this.formData.buildingSigns[this.formData.activeBuildingSign];
            this.title = "Building Sign #" + this.sign.description;
        }
    };
    Info1Component.prototype.back = function () {
        this.router.navigate(['/result']);
    };
    Info1Component.prototype.confirm = function (form) {
        if (!form.valid) {
            return false;
        }
        if (this.formData.activeFreestandingSign >= 0) {
            if (this.sign.brb > this.formData.brbAvailable || this.sign.brb > this.formData.brbLimit) {
                alert("Please check available BRB values");
                return false;
            }
        }
        else {
            if (this.sign.brb > this.formData.brbAvailable) {
                alert("Please check available BRB values");
                return false;
            }
        }
        var totalBRB = 0;
        for (var _i = 0, _a = this.formData.freestandingSigns; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.brb) {
                totalBRB = totalBRB + Number(item.brb);
            }
        }
        for (var _b = 0, _c = this.formData.buildingSigns; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.brb) {
                totalBRB = totalBRB + Number(item.brb);
            }
        }
        this.formData.brbAvailable = parseFloat((this.formData.brb - totalBRB).toFixed(2));
        this.sign.completed = true;
        this.sign.coefficient = this.formDataService.getCoefficient(this.sign.setback, this.sign.angle);
        this.sign.area = parseFloat((((this.sign.brb * this.sign.coefficient * this.sign.speed) / 35) * Math.pow((1 + (this.sign.height / 250)), 2)).toFixed(2));
        this.router.navigate(['/result']);
    };
    return Info1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_model__["a" /* FormData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_model__["a" /* FormData */]) === "function" && _a || Object)
], Info1Component.prototype, "formData", void 0);
Info1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'mt-wizard-sign-type',
        template: __webpack_require__(326),
        styles: [__webpack_require__(321)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_formData_service__["a" /* FormDataService */]) === "function" && _c || Object])
], Info1Component);

var _a, _b, _c;
//# sourceMappingURL=info1.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Info2Component = (function () {
    function Info2Component(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Business Parameters';
    }
    Info2Component.prototype.ngOnInit = function () {
        _a = this.formDataService.getSignType(), this.signType = _a[0], this.streetCount = _a[1], this.sqFootage = _a[2];
        console.log('Sign Type loaded!');
        var _a;
    };
    Info2Component.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        // this.formDataService.setSignType(this.signType, this.streetCount, this.sqFootage);
        return true;
    };
    Info2Component.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the project page
            this.router.navigate(['/project']);
        }
    };
    Info2Component.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/result']);
        }
    };
    return Info2Component;
}());
Info2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'mt-wizard-sign-type',
        template: __webpack_require__(327)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object])
], Info2Component);

var _a, _b;
//# sourceMappingURL=info2.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_model__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PreviewComponent = (function () {
    function PreviewComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Sign Analysis Result';
        this.streets = '';
        this.isFormValid = false;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log(this.formData.streetCount);
        if (this.formData.streetCount == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["b" /* StreetSignCount */].One) {
            this.streets = "One";
            this.valueD = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaD.oneStreet;
        }
        if (this.formData.streetCount == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["b" /* StreetSignCount */].Two) {
            this.streets = "Two";
            this.valueD = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaD.twoStreet;
        }
        if (this.formData.streetCount == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["b" /* StreetSignCount */].Three) {
            this.streets = "Three";
            this.valueD = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaD.threeStreet;
        }
        if (this.formData.streetCount == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["b" /* StreetSignCount */].Four) {
            this.streets = "Four";
            this.valueD = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaD.fourStreet;
        }
        if (this.formData.signType == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["d" /* SignType */].Individual) {
            this.valueC = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaC.individual;
        }
        if (this.formData.signType == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["d" /* SignType */].MultipleYes) {
            this.valueC = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaC.multipleComplexYes;
        }
        if (this.formData.signType == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["d" /* SignType */].MultipleNo) {
            this.valueC = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaC.multipleComplexNo;
        }
        this.formData.area = parseFloat(((Math.pow(Number(this.formData.sqFootage) + 80, 1 / 2.5)) * this.valueD).toFixed(2));
        this.formData.brb = parseFloat((this.formData.area * this.valueC).toFixed(2));
        if (!this.formData.brbAvailable) {
            this.formData.brbAvailable = this.formData.brb;
        }
        if (this.formData.streetCount == 1) {
            this.formData.brbLimit = parseFloat((50 * this.formData.brb / 100).toFixed(2));
        }
        if (this.formData.streetCount == 2) {
            this.formData.brbLimit = parseFloat((35 * this.formData.brb / 100).toFixed(2));
        }
        if (this.formData.streetCount == 3) {
            this.formData.brbLimit = parseFloat((28 * this.formData.brb / 100).toFixed(2));
        }
        if (this.formData.streetCount == 4) {
            this.formData.brbLimit = parseFloat((25 * this.formData.brb / 100).toFixed(2));
        }
    };
    PreviewComponent.prototype.goToEditSign = function (signNumber) {
        this.formData.activeFreestandingSign = signNumber;
        this.formData.activeBuildingSign = -1;
        this.router.navigate(['/info1']);
    };
    PreviewComponent.prototype.goToEditBuildingSign = function (signNumber) {
        this.formData.activeFreestandingSign = -1;
        this.formData.activeBuildingSign = signNumber;
        this.router.navigate(['/info1']);
    };
    PreviewComponent.prototype.print = function () {
        var pdf = new __WEBPACK_IMPORTED_MODULE_4_jspdf__('p', 'pt', 'a4'), pdfConf = {
            pagesplit: true,
            background: '#000000'
        };
        var printContents = document.getElementById('print-selection').innerHTML;
        var hhtml = "\n      <html>\n      <head>\n          <meta charset=\"utf-8\">\n          <title>SLT BRB</title>\n          <base href=\"/\">\n\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n\n      <style type=\"text/css\">@import url(//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);</style><style type=\"text/css\">@import url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css);</style><style type=\"text/css\">\n      </style><style type=\"text/css\">@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);</style><style type=\"text/css\">/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\n      .board{\n          width: 75%;\n          margin: 60px auto;\n          /* height: 500px; */\n          background: #fff;\n          /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\n      }\n      .board .nav-tabs {\n          position: relative;\n          /* border-bottom: 0; */\n          /* width: 80%; */\n          margin: 40px auto;\n          margin-bottom: 0;\n          box-sizing: border-box;\n\n      }\n\n      .board > div.board-inner{\n          background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\n          background-size: 30%;\n      }\n\n      p.narrow{\n          width: 60%;\n          margin: 10px auto;\n      }\n\n      .liner{\n          height: 2px;\n          background: #ddd;\n          position: absolute;\n          width: 80%;\n          margin: 0 auto;\n          left: 0;\n          right: 0;\n          top: 50%;\n          z-index: 1;\n      }\n\n      .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n          color: #555555;\n          cursor: default;\n          /* background-color: #ffffff; */\n          border: 0;\n          border-bottom-color: transparent;\n      }\n\n      span.round-tabs{\n          width: 70px;\n          height: 70px;\n          line-height: 70px;\n          display: inline-block;\n          border-radius: 100px;\n          background: white;\n          z-index: 2;\n          position: absolute;\n          left: 0;\n          text-align: center;\n          font-size: 25px;\n      }\n\n      span.round-tabs.green{\n          color: #22c222;border: 2px solid #22c222;\n      }\n\n      li.active span.round-tabs.green{\n          background: #fff !important;\n          border: 2px solid #ddd;\n          color: #22c222;\n      }\n\n      span.round-tabs.brown{\n          color: #b18d68;border: 2px solid #b18d68;\n      }\n\n      li.active span.round-tabs.brown{\n          background: #fff !important;\n          border: 2px solid #ddd;\n          color: #b18d68;\n      }\n\n      span.round-tabs.yellow{\n          color: #febe29;border: 2px solid #febe29;\n      }\n\n      li.active span.round-tabs.yellow{\n          background: #fff !important;\n          border: 2px solid #ddd;\n          color: #febe29;\n      }\n\n      span.round-tabs.blue{\n          color: #3e5e9a;border: 2px solid #3e5e9a;\n      }\n\n      li.active span.round-tabs.blue{\n          background: #fff !important;\n          border: 2px solid #ddd;\n          color: #3e5e9a;\n      }\n\n      span.round-tabs.red{\n          color: #f1685e;border: 2px solid #f1685e;\n      }\n\n      li.active span.round-tabs.red{\n          background: #fff !important;\n          border: 2px solid #ddd;\n          color: #f1685e;\n      }\n\n      span.round-tabs.five{\n          color: #999;border: 2px solid #999;\n      }\n\n      li.active span.round-tabs.five{\n          background: #fff !important;\n          border: 2px solid #ddd;\n          color: #999;\n      }\n\n      .nav-tabs > li.active > a span.round-tabs{\n          background: #fafafa;\n      }\n      .nav-tabs > li {\n          /* width: 16.6%; */\n          width: 25%;\n      }\n      /*li.active:before {\n          content: \" \";\n          position: absolute;\n          left: 45%;\n          opacity:0;\n          margin: 0 auto;\n          bottom: -2px;\n          border: 10px solid transparent;\n          border-bottom-color: #fff;\n          z-index: 1;\n          transition:0.2s ease-in-out;\n      }*/\n      .nav-tabs > li:after {\n          content: \" \";\n          position: absolute;\n          left: 45%;\n         opacity:0;\n          margin: 0 auto;\n          bottom: 0px;\n          border: 5px solid transparent;\n          border-bottom-color: #ddd;\n          transition:0.1s ease-in-out;\n\n      }\n      .nav-tabs > li.active:after {\n          content: \" \";\n          position: absolute;\n          left: 45%;\n         opacity:1;\n          margin: 0 auto;\n          bottom: 0px;\n          border: 10px solid transparent;\n          border-bottom-color: #ddd;\n\n      }\n      .nav-tabs > li a{\n         width: 70px;\n         height: 70px;\n         margin: 20px auto;\n         border-radius: 100%;\n         padding: 0;\n      }\n\n      .nav-tabs > li a:hover{\n          background: transparent;\n      }\n\n      .tab-content .tab-pane{\n         position: relative;\n      padding-top: 50px;\n      }\n      .tab-content .head{\n          font-family: 'Roboto Condensed', sans-serif;\n          font-size: 25px;\n          text-transform: uppercase;\n          padding-bottom: 10px;\n      }\n      .btn-outline-rounded{\n          padding: 10px 40px;\n          margin: 20px 0;\n          border: 2px solid transparent;\n          border-radius: 25px;\n      }\n\n      .btn.green{\n          background-color:#5cb85c;\n          /*border: 2px solid #5cb85c;*/\n          color: #ffffff;\n      }\n\n\n\n      @media( max-width : 585px ){\n\n          .board {\n      width: 90%;\n      height:auto !important;\n      }\n          span.round-tabs {\n              font-size:16px;\n      width: 50px;\n      height: 50px;\n      line-height: 50px;\n          }\n          .tab-content .head{\n              font-size:20px;\n              }\n          .nav-tabs > li a {\n      width: 50px;\n      height: 50px;\n      line-height:50px;\n      }\n\n      .nav-tabs > li.active:after {\n      content: \" \";\n      position: absolute;\n      left: 35%;\n      }\n\n      .btn-outline-rounded {\n          padding:12px 20px;\n          }\n      }\n      </style><style type=\"text/css\">.btn-default {\n          border-color: #ccc;\n      }\n\n      .tab-content .choice {\n        text-align: center;\n        cursor: pointer;\n        margin-top: 38px;\n      }\n\n      .tab-content .choice i {\n          font-size: 32px;\n          line-height: 55px;\n      }\n\n      .btn-radio {\n        width: 100%;\n      }\n      .img-radio {\n        opacity: 0.8;\n        margin-bottom: 5px;\n      }\n\n      .space-20 {\n          margin-top: 20px;\n      }\n\n      /* active buttons */\n      #status-buttons a.active span.round-tabs.green {\n          background: #22c222;\n          color: #fff\n      }\n\n      #status-buttons a.active span.round-tabs.yellow {\n          background: #febe29;\n          color: #fff\n      }\n\n      #status-buttons a.active span.round-tabs.blue {\n          background: #3e5e9a;\n          color: #fff\n      }\n\n      #status-buttons a.active span.round-tabs.red {\n          background: #f1685e;\n          color: #fff\n      }\n\n      #status-buttons a.active span.round-tabs.brown {\n          background: #b18d68;\n          color: #fff\n      }\n\n      .iradio_buttons {\n          display: inline-block;\n          vertical-align: middle;\n          margin: 0;\n          padding: 0;\n          width: 22px;\n          height: 22px;\n          background: #febe29 no-repeat;\n          border: none;\n          cursor: pointer;\n      }\n      .iradio_buttons {\n          background-position: -120px 0;\n      }\n      .iradio_buttons.hover {\n          background-position: -144px 0;\n      }\n      .iradio_buttons.checked {\n          background-position: -168px 0;\n      }\n      </style><style type=\"text/css\">.tab-content .tab-pane{\n          padding-top: 20px;\n      }\n\n      .alert {\n        padding: 8px;\n        margin-bottom: 8px;\n      }\n\n      .ng-valid[required], .ng-valid.required  {\n        border-left: 5px solid #42A948; /* green */\n      }\n      .ng-valid {\n        border-left: 5px solid #42A948; /* green */\n      }\n      .ng-invalid:not(form)  {\n        border-left: 5px solid #a94442; /* red */\n      }\n      </style><style type=\"text/css\">.splash {\n          position: absolute;\n          z-index: 2000;\n          background: white;\n          color: gray;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0\n      }\n\n      .splash-title {\n          text-align: center;\n          max-width: 500px;\n          margin: 15% auto;\n          padding: 20px\n      }\n\n      .splash-title h1{\n          font-size: 26px\n      }\n\n      .color-line {\n          border-radius:4px 4px 0 0\n      }</style></head>\n    <body>" + printContents + "</body>\n      </html>";
        pdf.fromHTML(hhtml, 15, 15, {});
        pdf.save('slt-brb.pdf');
    };
    PreviewComponent.prototype.print1 = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-selection').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n        <html>\n        <head>\n            <meta charset=\"utf-8\">\n            <title>SLT BRB</title>\n            <base href=\"/\">\n\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n            <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n\n        <style type=\"text/css\">@import url(//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);</style><style type=\"text/css\">@import url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css);</style><style type=\"text/css\">\n        </style><style type=\"text/css\">@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);</style><style type=\"text/css\">/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\n        .board{\n            width: 75%;\n            margin: 60px auto;\n            /* height: 500px; */\n            background: #fff;\n            /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\n        }\n        .board .nav-tabs {\n            position: relative;\n            /* border-bottom: 0; */\n            /* width: 80%; */\n            margin: 40px auto;\n            margin-bottom: 0;\n            box-sizing: border-box;\n\n        }\n\n        .board > div.board-inner{\n            background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\n            background-size: 30%;\n        }\n\n        p.narrow{\n            width: 60%;\n            margin: 10px auto;\n        }\n\n        .liner{\n            height: 2px;\n            background: #ddd;\n            position: absolute;\n            width: 80%;\n            margin: 0 auto;\n            left: 0;\n            right: 0;\n            top: 50%;\n            z-index: 1;\n        }\n\n        .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n            color: #555555;\n            cursor: default;\n            /* background-color: #ffffff; */\n            border: 0;\n            border-bottom-color: transparent;\n        }\n\n        span.round-tabs{\n            width: 70px;\n            height: 70px;\n            line-height: 70px;\n            display: inline-block;\n            border-radius: 100px;\n            background: white;\n            z-index: 2;\n            position: absolute;\n            left: 0;\n            text-align: center;\n            font-size: 25px;\n        }\n\n        span.round-tabs.green{\n            color: #22c222;border: 2px solid #22c222;\n        }\n\n        li.active span.round-tabs.green{\n            background: #fff !important;\n            border: 2px solid #ddd;\n            color: #22c222;\n        }\n\n        span.round-tabs.brown{\n            color: #b18d68;border: 2px solid #b18d68;\n        }\n\n        li.active span.round-tabs.brown{\n            background: #fff !important;\n            border: 2px solid #ddd;\n            color: #b18d68;\n        }\n\n        span.round-tabs.yellow{\n            color: #febe29;border: 2px solid #febe29;\n        }\n\n        li.active span.round-tabs.yellow{\n            background: #fff !important;\n            border: 2px solid #ddd;\n            color: #febe29;\n        }\n\n        span.round-tabs.blue{\n            color: #3e5e9a;border: 2px solid #3e5e9a;\n        }\n\n        li.active span.round-tabs.blue{\n            background: #fff !important;\n            border: 2px solid #ddd;\n            color: #3e5e9a;\n        }\n\n        span.round-tabs.red{\n            color: #f1685e;border: 2px solid #f1685e;\n        }\n\n        li.active span.round-tabs.red{\n            background: #fff !important;\n            border: 2px solid #ddd;\n            color: #f1685e;\n        }\n\n        span.round-tabs.five{\n            color: #999;border: 2px solid #999;\n        }\n\n        li.active span.round-tabs.five{\n            background: #fff !important;\n            border: 2px solid #ddd;\n            color: #999;\n        }\n\n        .nav-tabs > li.active > a span.round-tabs{\n            background: #fafafa;\n        }\n        .nav-tabs > li {\n            /* width: 16.6%; */\n            width: 25%;\n        }\n        /*li.active:before {\n            content: \" \";\n            position: absolute;\n            left: 45%;\n            opacity:0;\n            margin: 0 auto;\n            bottom: -2px;\n            border: 10px solid transparent;\n            border-bottom-color: #fff;\n            z-index: 1;\n            transition:0.2s ease-in-out;\n        }*/\n        .nav-tabs > li:after {\n            content: \" \";\n            position: absolute;\n            left: 45%;\n           opacity:0;\n            margin: 0 auto;\n            bottom: 0px;\n            border: 5px solid transparent;\n            border-bottom-color: #ddd;\n            transition:0.1s ease-in-out;\n\n        }\n        .nav-tabs > li.active:after {\n            content: \" \";\n            position: absolute;\n            left: 45%;\n           opacity:1;\n            margin: 0 auto;\n            bottom: 0px;\n            border: 10px solid transparent;\n            border-bottom-color: #ddd;\n\n        }\n        .nav-tabs > li a{\n           width: 70px;\n           height: 70px;\n           margin: 20px auto;\n           border-radius: 100%;\n           padding: 0;\n        }\n\n        .nav-tabs > li a:hover{\n            background: transparent;\n        }\n\n        .tab-content .tab-pane{\n           position: relative;\n        padding-top: 50px;\n        }\n        .tab-content .head{\n            font-family: 'Roboto Condensed', sans-serif;\n            font-size: 25px;\n            text-transform: uppercase;\n            padding-bottom: 10px;\n        }\n        .btn-outline-rounded{\n            padding: 10px 40px;\n            margin: 20px 0;\n            border: 2px solid transparent;\n            border-radius: 25px;\n        }\n\n        .btn.green{\n            background-color:#5cb85c;\n            /*border: 2px solid #5cb85c;*/\n            color: #ffffff;\n        }\n\n\n\n        @media( max-width : 585px ){\n\n            .board {\n        width: 90%;\n        height:auto !important;\n        }\n            span.round-tabs {\n                font-size:16px;\n        width: 50px;\n        height: 50px;\n        line-height: 50px;\n            }\n            .tab-content .head{\n                font-size:20px;\n                }\n            .nav-tabs > li a {\n        width: 50px;\n        height: 50px;\n        line-height:50px;\n        }\n\n        .nav-tabs > li.active:after {\n        content: \" \";\n        position: absolute;\n        left: 35%;\n        }\n\n        .btn-outline-rounded {\n            padding:12px 20px;\n            }\n        }\n        </style><style type=\"text/css\">.btn-default {\n            border-color: #ccc;\n        }\n\n        .tab-content .choice {\n          text-align: center;\n          cursor: pointer;\n          margin-top: 38px;\n        }\n\n        .tab-content .choice i {\n            font-size: 32px;\n            line-height: 55px;\n        }\n\n        .btn-radio {\n        \twidth: 100%;\n        }\n        .img-radio {\n        \topacity: 0.8;\n        \tmargin-bottom: 5px;\n        }\n\n        .space-20 {\n            margin-top: 20px;\n        }\n\n        /* active buttons */\n        #status-buttons a.active span.round-tabs.green {\n            background: #22c222;\n            color: #fff\n        }\n\n        #status-buttons a.active span.round-tabs.yellow {\n            background: #febe29;\n            color: #fff\n        }\n\n        #status-buttons a.active span.round-tabs.blue {\n            background: #3e5e9a;\n            color: #fff\n        }\n\n        #status-buttons a.active span.round-tabs.red {\n            background: #f1685e;\n            color: #fff\n        }\n\n        #status-buttons a.active span.round-tabs.brown {\n            background: #b18d68;\n            color: #fff\n        }\n\n        .iradio_buttons {\n            display: inline-block;\n            vertical-align: middle;\n            margin: 0;\n            padding: 0;\n            width: 22px;\n            height: 22px;\n            background: #febe29 no-repeat;\n            border: none;\n            cursor: pointer;\n        }\n        .iradio_buttons {\n            background-position: -120px 0;\n        }\n        .iradio_buttons.hover {\n            background-position: -144px 0;\n        }\n        .iradio_buttons.checked {\n            background-position: -168px 0;\n        }\n        </style><style type=\"text/css\">.tab-content .tab-pane{\n            padding-top: 20px;\n        }\n\n        .alert {\n          padding: 8px;\n          margin-bottom: 8px;\n        }\n\n        .ng-valid[required], .ng-valid.required  {\n          border-left: 5px solid #42A948; /* green */\n        }\n        .ng-valid {\n          border-left: 5px solid #42A948; /* green */\n        }\n        .ng-invalid:not(form)  {\n          border-left: 5px solid #a94442; /* red */\n        }\n        </style><style type=\"text/css\">.splash {\n            position: absolute;\n            z-index: 2000;\n            background: white;\n            color: gray;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0\n        }\n\n        .splash-title {\n            text-align: center;\n            max-width: 500px;\n            margin: 15% auto;\n            padding: 20px\n        }\n\n        .splash-title h1{\n            font-size: 26px\n        }\n\n        .color-line {\n            border-radius:4px 4px 0 0\n        }</style></head>\n      <body onload=\"window.print();window.close()\">" + printContents + "</body>\n        </html>");
        popupWin.document.close();
    };
    return PreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* FormData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* FormData */]) === "function" && _a || Object)
], PreviewComponent.prototype, "formData", void 0);
PreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'mt-wizard-preview',
        template: __webpack_require__(329)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _c || Object])
], PreviewComponent);

var _a, _b, _c;
//# sourceMappingURL=preview.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectComponent = (function () {
    function ProjectComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'City of South Lake Tahoe Sign Analysis Computer Program';
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.project = this.formDataService.getProject();
        console.log('Project feature loaded!');
    };
    ProjectComponent.prototype.save = function (form) {
        // console.log(firstname);
        if (!form.valid) {
            return false;
        }
        this.formDataService.setProject(this.project);
        return true;
    };
    ProjectComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/signtype']);
        }
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'mt-wizard-project',
        template: __webpack_require__(330)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object])
], ProjectComponent);

var _a, _b;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_model__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultComponent = (function () {
    function ResultComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Please check information you entered!';
        this.streets = '';
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log(this.formData.streetCount);
        if (this.formData.streetCount == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["b" /* StreetSignCount */].One) {
            this.streets = "One";
            this.valueD = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaD.oneStreet;
            this.valueDComplex = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaDMultiple.oneStreet;
        }
        if (this.formData.streetCount == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["b" /* StreetSignCount */].Two) {
            this.streets = "Two";
            this.valueD = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaD.twoStreet;
            this.valueDComplex = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaDMultiple.twoStreet;
        }
        if (this.formData.streetCount == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["b" /* StreetSignCount */].Three) {
            this.streets = "Three";
            this.valueD = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaD.threeStreet;
            this.valueDComplex = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaDMultiple.threeStreet;
        }
        if (this.formData.streetCount == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["b" /* StreetSignCount */].Four) {
            this.streets = "Four";
            this.valueD = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaD.fourStreet;
            this.valueDComplex = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaDMultiple.fourStreet;
        }
        if (this.formData.signType == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["d" /* SignType */].Individual) {
            this.valueC = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaC.individual;
        }
        if (this.formData.signType == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["d" /* SignType */].MultipleYes) {
            this.valueC = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaC.multipleComplexYes;
        }
        if (this.formData.signType == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["d" /* SignType */].MultipleNo) {
            this.valueC = __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["c" /* Constants */].formulaC.multipleComplexNo;
        }
        if (this.formData.signType == __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["d" /* SignType */].MultipleYesComplex) {
            this.formData.area = parseFloat(((Math.pow(Number(this.formData.sqFootage), 1 / 2.5) + 80) * this.valueDComplex).toFixed(2));
            this.formData.brb = this.formData.area;
        }
        else {
            this.formData.area = parseFloat(((Math.pow(Number(this.formData.sqFootage), 1 / 2.5) + 80) * this.valueD).toFixed(2));
            this.formData.brb = parseFloat((this.formData.area * this.valueC).toFixed(2));
        }
        if (!this.formData.brbAvailable) {
            this.formData.brbAvailable = this.formData.brb;
        }
        if (this.formData.streetCount == 1) {
            this.formData.brbLimit = parseFloat((50 * this.formData.brb / 100).toFixed(2));
        }
        if (this.formData.streetCount == 2) {
            this.formData.brbLimit = parseFloat((35 * this.formData.brb / 100).toFixed(2));
        }
        if (this.formData.streetCount == 3) {
            this.formData.brbLimit = parseFloat((28 * this.formData.brb / 100).toFixed(2));
        }
        if (this.formData.streetCount == 4) {
            this.formData.brbLimit = parseFloat((25 * this.formData.brb / 100).toFixed(2));
        }
    };
    ResultComponent.prototype.goToEditSign = function (signNumber) {
        this.formData.activeFreestandingSign = signNumber;
        this.formData.activeBuildingSign = -1;
        this.router.navigate(['/info1']);
    };
    ResultComponent.prototype.goToEditBuildingSign = function (signNumber) {
        this.formData.activeFreestandingSign = -1;
        this.formData.activeBuildingSign = signNumber;
        this.router.navigate(['/info1']);
    };
    ResultComponent.prototype.submit = function () {
        this.router.navigate(['/preview']);
    };
    return ResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* FormData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* FormData */]) === "function" && _a || Object)
], ResultComponent.prototype, "formData", void 0);
ResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'mt-wizard-result',
        template: __webpack_require__(331)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _c || Object])
], ResultComponent);

var _a, _b, _c;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignTypeComponent = (function () {
    function SignTypeComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Business Parameters';
    }
    SignTypeComponent.prototype.mouseHover = function (e) {
        console.log('hovered', e);
    };
    SignTypeComponent.prototype.ngOnInit = function () {
        _a = this.formDataService.getSignType(), this.signType = _a[0], this.streetCount = _a[1], this.sqFootage = _a[2];
        console.log('Sign Type loaded!');
        var _a;
    };
    SignTypeComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setSignType(this.signType, this.streetCount, this.sqFootage, this.freestandingCount, this.buildingCount);
        return true;
    };
    SignTypeComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the project page
            this.router.navigate(['/project']);
        }
    };
    SignTypeComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/result']);
        }
    };
    SignTypeComponent.prototype.isDisabled1 = function () {
        if (this.streetCount < 1 || this.streetCount == null) {
            if (this.freestandingCount > 1) {
                this.freestandingCount = null;
            }
            return true;
        }
        return null;
    };
    SignTypeComponent.prototype.isDisabled2 = function () {
        if (this.streetCount < 2 || this.streetCount == null) {
            if (this.freestandingCount > 1) {
                this.freestandingCount = null;
            }
            return true;
        }
        return null;
    };
    SignTypeComponent.prototype.isDisabled3 = function () {
        if (this.streetCount < 3 || this.streetCount == null) {
            if (this.freestandingCount > 2) {
                this.freestandingCount = null;
            }
            return true;
        }
        return null;
    };
    SignTypeComponent.prototype.isDisabled4 = function () {
        if (this.streetCount < 4 || this.streetCount == null) {
            if (this.freestandingCount > 3) {
                this.freestandingCount = null;
            }
            return true;
        }
        return null;
    };
    return SignTypeComponent;
}());
SignTypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'mt-wizard-sign-type',
        template: __webpack_require__(332),
        styles: [__webpack_require__(322)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object])
], SignTypeComponent);

var _a, _b;
//# sourceMappingURL=signtype.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STEPS; });
var STEPS = {
    project: 'project',
    signtype: 'signtype',
    work: 'work',
    address: 'address',
    result: 'result',
    preview: 'preview'
};
//# sourceMappingURL=workflow.model.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.bundle.js.map