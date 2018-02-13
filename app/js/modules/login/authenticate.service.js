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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_router, _http) {
        this._router = _router;
        this._http = _http;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (user) {
        this._router.navigate(['leaveModule']);
        /*let loginUrl = "http://localhost:8080/Auth/authenticate"+"?password="+user.password+"&"+"username="+user.userName;
        let router = this._router;
        this._http
          .post(loginUrl,null)
          .toPromise()
          .then(function(res){
             if (res && JSON.parse(res['_body']).userId === user.userName){
                 localStorage.setItem("user", JSON.stringify(JSON.parse(res['_body']).userId));
                 router.navigate(['home']);
              }
          })
          .catch(error=>{
              let errMsg = (error.message) ? error.message :
              error.status ? `${error.status} - ${error.statusText}` : 'Server error';
              console.error(errMsg);
          });*/
        /*
           addHero (name: string): Observable<Hero> {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
  
            return this.http.post(this.heroesUrl, { name }, options)
                            .map(this.extractData)
                            .catch(this.handleError);
          }
        */
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authenticate.service.js.map