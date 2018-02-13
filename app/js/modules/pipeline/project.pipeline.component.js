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
var service_projectpipeline_1 = require("./service.projectpipeline");
var ProjectPipeLineComponent = /** @class */ (function () {
    function ProjectPipeLineComponent(route, _project_Pipeline) {
        this.route = route;
        this._project_Pipeline = _project_Pipeline;
        this.totHeaders = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // default headers
        this.dumList = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.count = 1;
        this.baseUrl = "http://localhost:8080/forecast-1.0.0-SNAPSHOT/testing/";
    }
    ProjectPipeLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.pageTypeFlag = +params['id'];
        });
        if (this.pageTypeFlag == 1) {
            this.newStaffingPage = true;
        }
        if (this.pageTypeFlag == 2) {
            this.projectFromService = true;
        }
    };
    //proceed available in the menu will create new page with single row 
    ProjectPipeLineComponent.prototype.proceed = function () {
        document.getElementById("newStaff").style.display = "block";
        this.newStaffingPage = false;
        this.dumheaders = this.totHeaders.slice(this.start - 1, this.end);
        console.log(this.dumheaders);
        this.allStaffs = [
            { sno: this.count++,
                lob: '',
                opportunityname: '',
                contact: '',
                salesstage: '',
                estCloseDate: '',
                headers: this.dumheaders,
                list: this.dumList.slice(this.start - 1, this.end),
                tcv: undefined,
                probability: '',
                practiseinvolved: '',
                header: ['2017$']
            }
        ];
    };
    ProjectPipeLineComponent.prototype.cloneStaffDetails = function (c) {
        return c;
    };
    // service call with data and month as parameters
    ProjectPipeLineComponent.prototype.getHistory = function () {
        var _this = this;
        document.getElementById("newStaff").style.display = "block";
        this.projectFromService = false;
        this._project_Pipeline.getStaffPipelineData(this.baseUrl + this.start + "/" + this.end).then(function (result) { return _this.allStaffs = result; }, function (error) { return _this.errorMessage = error; });
    };
    ProjectPipeLineComponent.prototype.onRowSelect = function (event) {
        this.newStaffFlag = false;
        this.newStaff = this.cloneStaffDetails(event.data);
        this.displayDialog = true;
    };
    ProjectPipeLineComponent.prototype.findSelectedStaffIndex = function () {
        return this.allStaffs.indexOf(this.selectedStaff);
    };
    ProjectPipeLineComponent.prototype.showDialogToAdd = function () {
        this.newStaffFlag = true;
        document.getElementById("delete").style.display = "none";
        this.newStaff =
            { sno: this.count,
                lob: '',
                opportunityname: '',
                contact: '',
                salesstage: '',
                estCloseDate: '',
                headers: this.allStaffs[0].headers,
                list: this.dumList.slice(this.start - 1, this.end),
                tcv: undefined,
                probability: '',
                practiseinvolved: '',
                header: ['2017$']
            };
        this.displayDialog = true;
    };
    ProjectPipeLineComponent.prototype.save = function () {
        if (this.newStaffFlag) {
            this.allStaffs.push(this.newStaff);
            this.count++;
        }
        else
            this.allStaffs[this.findSelectedStaffIndex()] = this.newStaff;
        this.newStaff = null;
        this.displayDialog = false;
    };
    ProjectPipeLineComponent.prototype.delete = function () {
        this.allStaffs.splice(this.findSelectedStaffIndex(), 1);
        this.newStaff = null;
        this.displayDialog = false;
    };
    ProjectPipeLineComponent = __decorate([
        core_1.Component({
            selector: 'projectpipeLineComponent',
            templateUrl: 'app/modules/pipeline/projectpipeline.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, service_projectpipeline_1.ProjectPipelineService])
    ], ProjectPipeLineComponent);
    return ProjectPipeLineComponent;
}());
exports.ProjectPipeLineComponent = ProjectPipeLineComponent;
//# sourceMappingURL=project.pipeline.component.js.map