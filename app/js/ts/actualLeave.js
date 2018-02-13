"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment/moment");
var ActualLeave = /** @class */ (function () {
    function ActualLeave(dateFrom, dateTo) {
        console.log("fff");
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        //this.noOfDays = 3";
        this.calculateNoOfDays();
    }
    ActualLeave.prototype.calculateNoOfDays = function () {
        var dateFrom_array = this.dateFrom.split('/');
        var dateTo_array = this.dateTo.split('/');
        var date1 = moment([dateFrom_array[2], dateFrom_array[0], dateFrom_array[1]]);
        var date2 = moment([dateTo_array[2], dateTo_array[0], dateTo_array[1]]);
        this.no_Days = date2.diff(date1, 'days');
    };
    return ActualLeave;
}());
exports.ActualLeave = ActualLeave;
//# sourceMappingURL=actualLeave.js.map