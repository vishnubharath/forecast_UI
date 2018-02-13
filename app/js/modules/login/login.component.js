"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authenticate_service_1 = require("./authenticate.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService) {
        this._authService = _authService;
        console.log("constructor called..");
    }
    LoginComponent.prototype.loginUser = function () {
        var user = { userName: this.userName, password: btoa(this.password) };
        if (user.userName && user.password) {
            this._authService.login(user);
        }
        else {
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/modules/login/login.html',
            providers: [authenticate_service_1.AuthenticationService]
        }),
        __metadata("design:paramtypes", [authenticate_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map