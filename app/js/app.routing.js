"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var leave_component_1 = require("./modules/leave/leave.component");
var report_component_1 = require("./modules/report/report.component");
var app_upload_1 = require("./modules/upload/app.upload");
var pipeline_component_1 = require("./modules/pipeline/pipeline.component");
var project_pipeline_component_1 = require("./modules/pipeline/project.pipeline.component");
var home_component_1 = require("./ts/home.component");
var login_component_1 = require("./modules/login/login.component");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'leaveModule', component: leave_component_1.LeaveComponent },
    { path: 'reportModule', component: report_component_1.ReportComponent },
    { path: 'uploadModule', component: app_upload_1.UploadComponent },
    { path: 'pipeLineModule', component: pipeline_component_1.PipeLineComponent },
    { path: 'projectPipeLineComponent', component: project_pipeline_component_1.ProjectPipeLineComponent },
    { path: 'projectPipeLineComponent/:id', component: project_pipeline_component_1.ProjectPipeLineComponent },
    { path: 'pipeLineModule/:id', component: pipeline_component_1.PipeLineComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map