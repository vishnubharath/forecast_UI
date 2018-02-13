"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forecast_model_1 = require("./forecast.model");
var ForecastActualModel = /** @class */ (function () {
    function ForecastActualModel(data) {
        this.empId = '';
        this.empId = data['empId'];
        this.forecastLeaves = new forecast_model_1.ForecastModel(data['forecastLeaves']);
        this.actualleaves = data['actualleaves'];
    }
    ;
    ForecastActualModel.prototype.removeLeaveObj = function (eachForecastLeave, leaveType) {
        if (leaveType === 'forecast') {
            var month = eachForecastLeave['month'];
            var index = this.forecastLeaves[month].indexOf(eachForecastLeave);
            this.forecastLeaves[month].splice(index, 1);
        }
        else if (leaveType === 'actual') {
            var index = this.actualleaves.indexOf(eachForecastLeave);
            this.actualleaves.splice(index, 1);
        }
    };
    return ForecastActualModel;
}());
exports.ForecastActualModel = ForecastActualModel;
//# sourceMappingURL=forecastActual.model.js.map