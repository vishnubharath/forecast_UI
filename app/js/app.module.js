"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./ts/app.component");
var app_upload_1 = require("./modules/upload/app.upload");
var Holiday_service_1 = require("./modules/holiday/Holiday.service");
var app_holiday_list_1 = require("./modules/holiday/app.holiday.list");
var leave_component_1 = require("./modules/leave/leave.component");
var report_component_1 = require("./modules/report/report.component");
var report_service_1 = require("./modules/report/report.service");
var service_staffpipeline_1 = require("./modules/pipeline/service.staffpipeline");
var service_projectpipeline_1 = require("./modules/pipeline/service.projectpipeline");
var project_pipeline_component_1 = require("./modules/pipeline/project.pipeline.component");
var pipeline_component_1 = require("./modules/pipeline/pipeline.component");
var Upload_service_1 = require("./modules/upload/Upload.service");
var tabview_1 = require("primeng/components/tabview/tabview");
var primeng_1 = require("primeng/primeng");
var report_list_1 = require("./modules/report/report.list");
var ForecastMonths_service_1 = require("./ts/ForecastMonths.service");
var login_component_1 = require("./modules/login/login.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./ts/home.component");
var ng2_modal_1 = require("ng2-modal");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing,
                tabview_1.TabViewModule,
                ng2_modal_1.ModalModule,
                primeng_1.FileUploadModule, primeng_1.PanelModule, primeng_1.CalendarModule, primeng_1.DataTableModule, primeng_1.ButtonModule, primeng_1.InputTextModule, primeng_1.AccordionModule, primeng_1.SharedModule, primeng_1.DialogModule, primeng_1.DropdownModule, primeng_1.TieredMenuModule
            ],
            declarations: [
                app_component_1.AppComponent, app_holiday_list_1.HolidayComponent, login_component_1.LoginComponent, leave_component_1.LeaveComponent, report_list_1.ReportListComponent, report_component_1.ReportComponent,
                app_upload_1.UploadComponent, pipeline_component_1.PipeLineComponent, home_component_1.HomeComponent, project_pipeline_component_1.ProjectPipeLineComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                Holiday_service_1.HolidayService, app_routing_1.appRoutingProviders, report_service_1.ReportService, Upload_service_1.UploadService, ForecastMonths_service_1.ForecastMonthsService, service_staffpipeline_1.StaffPipelineService, service_projectpipeline_1.ProjectPipelineService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map