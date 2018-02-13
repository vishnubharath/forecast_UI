"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestModel = /** @class */ (function () {
    function RequestModel(forecastLeaves) {
        this.empId = 0;
        this.year = '';
        this.region = '';
        this.type = '';
        var keys = Object.keys(forecastLeaves);
        for (var i = 0; i < keys.length; i++) {
            if (forecastLeaves[keys[i]].length > 0) {
                this.empId = forecastLeaves[keys[i]][0]['empId'];
                this.year = forecastLeaves[keys[i]][0]['year'];
                this.region = forecastLeaves[keys[i]][0]['region'];
                this.type = forecastLeaves[keys[i]][0]['type'];
                break;
            }
        }
    }
    return RequestModel;
}());
exports.RequestModel = RequestModel;
//# sourceMappingURL=request.model.js.map