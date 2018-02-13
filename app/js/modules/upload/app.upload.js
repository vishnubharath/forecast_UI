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
/**
 * Created by 574473 on 9/28/2016.
 */
var core_1 = require("@angular/core");
var Upload_service_1 = require("./Upload.service");
var UploadComponent = /** @class */ (function () {
    function UploadComponent(service) {
        this.service = service;
        this.uploadedFiles = [];
        this.service.progress$.subscribe(function (data) {
            console.log('progress = ' + data);
        });
    }
    UploadComponent.prototype.uploadFiles_prime = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
    };
    UploadComponent.prototype.onChange = function (event) {
        console.log('onChange');
        var files = event.srcElement.files;
        console.log(files);
        this.service.makeFileRequest('http://localhost:8080/forecast-1.0.0-SNAPSHOT/uploadController/upload', [], files).subscribe(function () {
            console.log('sent');
        });
    };
    UploadComponent = __decorate([
        core_1.Component({
            selector: 'upload',
            templateUrl: 'app/modules/upload/upload.html',
            providers: [Upload_service_1.UploadService]
        }),
        __metadata("design:paramtypes", [Upload_service_1.UploadService])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=app.upload.js.map