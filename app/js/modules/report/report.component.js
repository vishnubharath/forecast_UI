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
var report_service_1 = require("./report.service");
//import { ReportSearch} from "./report.search";
var ReportComponent = /** @class */ (function () {
    function ReportComponent(_reportService) {
        this._reportService = _reportService;
        this.typeOfReport = [];
        this.typeOfReport.push({ label: 'Select report', value: null });
        this.typeOfReport.push({ label: 'Actual Report', value: 'actual' });
        this.typeOfReport.push({ label: 'Forecast Report', value: 'forecast' });
        this.months = [];
        this.months.push({ label: 'Select month', value: null });
        this.months.push({ label: 'JAN', value: 'JAN' });
        this.months.push({ label: 'FEB', value: 'FEB' });
        this.months.push({ label: 'MAR', value: 'MAR' });
        this.months.push({ label: 'APR', value: 'APR' });
        this.months.push({ label: 'MAY', value: 'MAY' });
        this.months.push({ label: 'JUN', value: 'JUN' });
        this.months.push({ label: 'JUL', value: 'JUL' });
        this.months.push({ label: 'AUG', value: 'AUG' });
        this.months.push({ label: 'SEP', value: 'SEP' });
        this.months.push({ label: 'OCT', value: 'OCT' });
        this.months.push({ label: 'NOV', value: 'NOV' });
        this.months.push({ label: 'DEC', value: 'DEC' });
        this.years = [];
        this.years.push({ label: 'Select year', value: null });
        this.years.push({ label: '2014', value: '2014' });
        this.years.push({ label: '2015', value: '2015' });
        this.years.push({ label: '2016', value: '2016' });
        this.years.push({ label: '2017', value: '2017' });
        this.years.push({ label: '2018', value: '2018' });
        this.years.push({ label: '2019', value: '2019' });
        this.years.push({ label: '2020', value: '2020' });
        this.years.push({ label: '2021', value: '2021' });
        this.years.push({ label: '2022', value: '2022' });
        this.years.push({ label: '2023', value: '2023' });
        this.years.push({ label: '2024', value: '2024' });
        this.years.push({ label: '2025', value: '2025' });
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._reportService
            .getCurrentReport()
            .then(function (report) { return _this.report = report; }, function (error) { return _this.errorMessage = error; });
    };
    ReportComponent.prototype.save = function () {
        console.log("save");
        this._reportService.saveReportData(this.report);
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'reportComponent',
            templateUrl: 'app/modules/report/report.html',
        }),
        __metadata("design:paramtypes", [report_service_1.ReportService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map