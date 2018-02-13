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
var forecastActual_model_1 = require("./models/forecastActual.model");
var forecast_service_1 = require("./forecast.service");
var leave_model_1 = require("./models/leave.model");
var request_model_1 = require("./models/request.model");
var LeaveComponent = /** @class */ (function () {
    function LeaveComponent(forecastService, ngZone) {
        this.forecastService = forecastService;
        this.ngZone = ngZone;
    }
    LeaveComponent.prototype.ngAfterContentChecked = function () {
        this.toggleAccordian();
        this.initTabsStyle();
        this.initDatePickerStyle();
    };
    LeaveComponent.prototype.ngOnInit = function () {
        this.forecastService
            .getForecastDetails()
            .subscribe(this.successCallBackOnInit.bind(this), this.errorCallBack);
    };
    LeaveComponent.prototype.dateChanged = function (date, leaveType, month, source) {
        if (leaveType == 'forecast') {
            this.currentForeCast = this.totalMonthsForecast.filter(function (item) { return item.month === month; })[0];
            if (source == 'from') {
                this.currentForeCast.dateFrom = date;
            }
            else if (source == 'to') {
                this.currentForeCast.dateTo = date;
            }
            if (this.currentForeCast.dateFrom && this.currentForeCast.dateTo) {
                this.calculateDays(this.currentForeCast);
            }
        }
        else if (leaveType == 'actual') {
            if (source == 'from') {
                this.monthActual.dateFrom = date;
            }
            else if (source == 'to') {
                this.monthActual.dateTo = date;
            }
            if (this.monthActual.dateFrom && this.monthActual.dateTo) {
                this.calculateDays(this.monthActual);
            }
        }
    };
    LeaveComponent.prototype.addLeave = function (leaveType, month) {
        if (leaveType == 'forecast') {
            var leave = this.addToForecastActualRow(this.currentForeCast);
            if (leave) {
                this.forecast.forecastLeaves[month].push(leave);
                this.resetAfterAdd(this.currentForeCast);
            }
        }
        else if (leaveType == 'actual') {
            var leave = this.addToForecastActualRow(this.monthActual);
            if (leave) {
                this.forecast.actualleaves.push(leave);
                this.resetAfterAdd(this.monthActual);
            }
        }
        console.log(this.forecast);
    };
    LeaveComponent.prototype.removeLeave = function (eachForecastLeave, leaveType) {
        this.forecast.removeLeaveObj(eachForecastLeave, leaveType);
    };
    LeaveComponent.prototype.saveForecast = function () {
        this.forecastService
            .saveForecastDetails(this.forecast.forecastLeaves)
            .subscribe(this.successCallBack.bind(this), this.errorCallBack);
    };
    LeaveComponent.prototype.saveActual = function () {
        this.forecastService
            .saveActualDetails(this.forecast.actualleaves)
            .subscribe(this.successCallBack.bind(this), this.errorCallBack);
    };
    LeaveComponent.prototype.addToForecastActualRow = function (model) {
        if (!model || !model.totalNoOFDays) {
            this.leaveModal.open();
            this.msg = 'Please enter vaild date';
            return;
        }
        var leave = new leave_model_1.LeaveModel(model.dateFrom, model.dateTo, model.totalNoOFDays, model.month, this.reqModel);
        return leave;
    };
    LeaveComponent.prototype.resetAfterAdd = function (model) {
        model.dateFrom = null;
        model.dateTo = null;
        model.totalNoOFDays = null;
    };
    LeaveComponent.prototype.successCallBackOnInit = function (data) {
        var _this = this;
        this.ngZone.run(function () {
            _this.forecast = new forecastActual_model_1.ForecastActualModel(data);
            _this.totalMonthsForecast = _this.forecast.forecastLeaves
                .getNoOfMonthsForecast(_this.forecast['forecastLeaves']);
            _this.monthActual = _this.forecast.forecastLeaves
                .getNoOfMonthsActual(_this.forecast['actualleaves']);
            _this.reqModel = new request_model_1.RequestModel(_this.forecast['forecastLeaves']);
            console.log(_this.totalMonthsForecast);
        });
    };
    LeaveComponent.prototype.successCallBack = function (data) {
        this.leaveModal.open();
        this.msg = data.message;
    };
    LeaveComponent.prototype.errorCallBack = function (error) {
        console.log(error);
    };
    LeaveComponent.prototype.calculateDays = function (model) {
        var from = model.dateFrom;
        var to = model.dateTo;
        var totalDay = parseInt(to.split('-')[2], 10) - parseInt(from.split('-')[2], 10);
        if (totalDay <= 0) {
            this.leaveModal.open();
            this.msg = 'Please enter vaild date';
            return;
        }
        model.totalNoOFDays = totalDay.toString();
    };
    LeaveComponent.prototype.toggleAccordian = function () {
        jQuery('.collapse.in').prev('.panel-heading').addClass('active');
        jQuery('#accordion, #bs-collapse')
            .on('show.bs.collapse', function (a) {
            jQuery(a.target).prev('.panel-heading').addClass('active');
        })
            .on('hide.bs.collapse', function (a) {
            jQuery(a.target).prev('.panel-heading').removeClass('active');
        });
    };
    LeaveComponent.prototype.initTabsStyle = function () {
        jQuery('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        jQuery('.tab ul.tabs li a').click(function (g) {
            var tab = jQuery(this).closest('.tab'), index = jQuery(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            jQuery(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    };
    LeaveComponent.prototype.initDatePickerStyle = function () {
        jQuery('.datepicker__input').addClass('form-control');
        jQuery('.datepicker__input').removeAttr("style");
    };
    __decorate([
        core_1.ViewChild('leaveModal'),
        __metadata("design:type", Object)
    ], LeaveComponent.prototype, "leaveModal", void 0);
    LeaveComponent = __decorate([
        core_1.Component({
            selector: 'leave-component',
            templateUrl: 'app/modules/leave/app.html',
            providers: [forecast_service_1.ForeCastService]
        }),
        __metadata("design:paramtypes", [forecast_service_1.ForeCastService,
            core_1.NgZone])
    ], LeaveComponent);
    return LeaveComponent;
}());
exports.LeaveComponent = LeaveComponent;
//# sourceMappingURL=leave.component.js.map