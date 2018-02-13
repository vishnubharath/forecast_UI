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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var ForeCastService = /** @class */ (function () {
    function ForeCastService(http) {
        this.http = http;
        this.getForecastUrl = 'http://localhost:8080/forecast-1.0.0-SNAPSHOT/leavesByEmpId/13456';
        this.postForecastUrl = 'http://localhost:8080/forecast-1.0.0-SNAPSHOT/forecastLeaves';
        this.postActualUrl = 'http://localhost:8080/forecast-1.0.0-SNAPSHOT/actualLeaves';
    }
    ;
    ForeCastService.prototype.getForecastDetails = function () {
        return this.http.get(this.getForecastUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ForeCastService.prototype.saveForecastDetails = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.postForecastUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ForeCastService.prototype.saveActualDetails = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.postActualUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ForeCastService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ForeCastService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ForeCastService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ForeCastService);
    return ForeCastService;
}());
exports.ForeCastService = ForeCastService;
//# sourceMappingURL=forecast.service.js.map