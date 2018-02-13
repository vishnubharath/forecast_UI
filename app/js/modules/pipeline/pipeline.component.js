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
var router_1 = require("@angular/router");
var service_staffpipeline_1 = require("./service.staffpipeline");
var PipeLineComponent = /** @class */ (function () {
    function PipeLineComponent(route, _staffService) {
        this.route = route;
        this._staffService = _staffService;
        this.count = 1; // to determine sno.
        this.totHeaders = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // default headers
        this.dumList = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        //baseUrl:string="http://localhost:8080/forecast-1.0.0-SNAPSHOT/testing/";
        this.baseUrl = "http://localhost:8080/forecast-1.0.0-SNAPSHOT/pipeline/get/staffing/";
    }
    //Menu bar
    PipeLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.pageTypeFlag = +params['id'];
        });
        //load with menu items
        this.items = [
            {
                label: 'View',
                items: [{ label: 'Create New Staffing Page', icon: 'newStaff', routerLink: ['/pipeLineModule', "1"] },
                    { label: 'View History Staffing Page', icon: 'newStaff', routerLink: ['/pipeLineModule', "2"] },
                    { label: 'Create New Project Staffing Page', icon: 'oldStaff', routerLink: ['/projectPipeLineComponent', "1"] },
                    { label: 'View History Project Staffing Page', icon: 'newStaff', routerLink: ['/projectPipeLineComponent', "2"] },
                    { label: 'Upload Staffing Page', icon: 'fa-plus', routerLink: ['/uploadModule'] },]
            }
        ];
        if (this.pageTypeFlag == 1) {
            this.newStaffingPage = true;
        }
        if (this.pageTypeFlag == 2) {
            this.staffFromService = true;
        }
    };
    //proceed available in the menu will create new page with single row 
    PipeLineComponent.prototype.proceed = function () {
        document.getElementById("newStaff").style.display = "block";
        this.newStaffingPage = false;
        this.dumheaders = this.totHeaders.slice(this.start - 1, this.end);
        this.allStaffs = [
            { sNo: 1,
                name: '',
                division: '',
                noOfResources: undefined,
                headers: this.dumheaders,
                values: this.dumList.slice(this.start - 1, this.end)
            }
        ];
    };
    // service call with data and month as parameters
    PipeLineComponent.prototype.getHistory = function () {
        var _this = this;
        document.getElementById("newStaff").style.display = "block";
        this.staffFromService = false;
        this._staffService.getStaffPipelineData(this.baseUrl + this.start + this.end).then(function (result) { return _this.allStaffs = result; }, function (error) { return _this.errorMessage = error; });
    };
    PipeLineComponent.prototype.cloneStaffDetails = function (c) {
        return c;
    };
    //once a row is selected
    PipeLineComponent.prototype.onRowSelect = function (event) {
        this.newStaffFlag = false;
        this.newStaff = this.cloneStaffDetails(event.data);
        this.displayDialog = true;
    };
    // identify the selected staff by index
    PipeLineComponent.prototype.findSelectedStaffIndex = function () {
        return this.allStaffs.indexOf(this.selectedStaff);
    };
    //dialog box enable user to add new staff
    PipeLineComponent.prototype.showDialogToAdd = function () {
        if (this.count < this.allStaffs.length) {
            this.count = this.allStaffs.length + 1;
        }
        this.newStaffFlag = true;
        document.getElementById("delete").style.display = "none";
        this.newStaff =
            { sNo: this.count,
                name: '',
                division: '',
                noOfResources: undefined,
                values: this.dumList.slice(this.start - 1, this.end),
                headers: this.allStaffs[0].headers
            };
        this.displayDialog = true;
    };
    //save call to service
    PipeLineComponent.prototype.save = function () {
        if (this.newStaffFlag) {
            this.allStaffs.push(this.newStaff);
            this.staffList = {
                staffingList: this.allStaffs,
                Month: this.end
            };
            this._staffService.addStaffPipelineData(this.staffList);
            this.count++;
        }
        else
            this.allStaffs[this.findSelectedStaffIndex()] = this.newStaff;
        this.newStaff = null;
        this.displayDialog = false;
    };
    //delete call to service with staff details.	
    PipeLineComponent.prototype.delete = function () {
        this.allStaffs.splice(this.findSelectedStaffIndex(), 1);
        this.newStaff = null;
        this.displayDialog = false;
    };
    PipeLineComponent = __decorate([
        core_1.Component({
            selector: 'pipeLineComponent',
            templateUrl: 'app/modules/pipeline/stafingpipeline.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, service_staffpipeline_1.StaffPipelineService])
    ], PipeLineComponent);
    return PipeLineComponent;
}());
exports.PipeLineComponent = PipeLineComponent;
//# sourceMappingURL=pipeline.component.js.map