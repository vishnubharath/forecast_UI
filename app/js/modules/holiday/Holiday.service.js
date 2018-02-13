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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var HolidayService = /** @class */ (function () {
    function HolidayService(_http) {
        this._http = _http;
        //baseUrl:string="https://myangularproject-3768f.firebaseio.com";
        this.baseUrl = "http://localhost:8080/forecast-1.0.0-SNAPSHOT/holidays";
    }
    HolidayService.prototype.getHolidays = function () {
        return this._http
            .get(this.baseUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) {
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(errMsg); // log to console instead
            return Observable_1.Observable.throw(errMsg);
        });
    };
    HolidayService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HolidayService);
    return HolidayService;
}());
exports.HolidayService = HolidayService;
//# sourceMappingURL=Holiday.service.js.map