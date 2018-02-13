"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var days_model_1 = require("./days.model");
var ForecastModel = /** @class */ (function () {
    function ForecastModel(data) {
        var monthNames = Object.keys(data);
        for (var i = 0; i < monthNames.length; i++) {
            this[monthNames[i]] = [];
            var leavesForMonth = data[monthNames[i]];
            for (var j = 0; j < leavesForMonth.length; j++) {
                this[monthNames[i]].push(leavesForMonth[j]);
            }
        }
    }
    ;
    ForecastModel.prototype.getNoOfMonthsForecast = function (data) {
        var result = [];
        var months = Object.keys(data);
        for (var key in months) {
            result.push(new days_model_1.DayModel(months[key], null, null, null));
        }
        return result;
    };
    ForecastModel.prototype.getNoOfMonthsActual = function (data) {
        return new days_model_1.DayModel(data[0].month, null, null, null);
    };
    return ForecastModel;
}());
exports.ForecastModel = ForecastModel;
//# sourceMappingURL=forecast.model.js.map