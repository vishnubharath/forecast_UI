"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var LeaveModel = /** @class */ (function () {
    function LeaveModel(startDate, endDate, noOfDays, month, reqModel) {
        this.empId = 0;
        this.month = '';
        this.year = '';
        this.datefrom = '';
        this.dateTo = '';
        this.noOfDays = '';
        this.region = '';
        this.updatedOn = '';
        this.type = '';
        var from = moment(startDate).format('YYYY-MM-DD');
        var to = moment(endDate).format('YYYY-MM-DD');
        this.empId = reqModel.empId;
        this.month = month;
        this.year = reqModel.year;
        this.datefrom = from;
        this.dateTo = to;
        this.noOfDays = noOfDays;
        this.region = reqModel.region;
        this.updatedOn = '';
        this.type = reqModel.type;
    }
    return LeaveModel;
}());
exports.LeaveModel = LeaveModel;
//# sourceMappingURL=leave.model.js.map