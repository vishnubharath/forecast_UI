"use strict";
/**
 * Created by 574473 on 9/28/2016.
 */
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
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var UploadService = /** @class */ (function () {
    function UploadService() {
        var _this = this;
        this.progress = 0;
        this.boundary = Math.random().toString().substr(8);
        this.progress$ = Observable_1.Observable.create(function (observer) {
            _this.progressObserver = observer;
        }).share();
    }
    UploadService.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("userFile", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        //document.getElementById("path").innerHTML = JSON.parse(xhr.response).toString;
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.upload.onprogress = function (event) {
                _this.progress = Math.round(event.loaded / event.total * 100);
                _this.progressObserver.next(_this.progress);
            };
            xhr.open('POST', url);
            xhr.setRequestHeader("content-type", "multipart/form-data;boundary=" + _this.boundary);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
//# sourceMappingURL=Upload.service.js.map