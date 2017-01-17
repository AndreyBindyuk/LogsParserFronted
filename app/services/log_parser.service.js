System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map', "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ParseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ParseService = (function () {
                function ParseService(http) {
                    this.http = http;
                    this.parseLogUrl = "http://localhost:8080/countriess";
                    this.hideElement = true;
                    this.hideButtonElement = true;
                }
                ParseService.prototype.getLogs = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    this.http.get(this.parseLogUrl)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(JSON.stringify(error)); });
                };
                ParseService.prototype.getLogsPost = function () {
                    var _this = this;
                    var data = {
                        "domainName": this.domainName,
                        "projectName": this.projectName,
                        "logType": this.logType
                    };
                    var body = JSON.stringify(data);
                    var head = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    this.http.post(this.parseLogUrl, body, { headers: head })
                        .map(function (res) { return res.text(); })
                        .subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(JSON.stringify(error)); });
                    this.hideElement = false;
                    this.hideButtonElement = false;
                };
                ParseService.prototype.downloadFile = function () {
                    var data = {
                        "domainName": this.domainName,
                        "projectName": this.projectName,
                        "logType": this.logType
                    };
                    var body = JSON.stringify(data);
                    var head = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    this.http.post(this.parseLogUrl, body, { headers: head })
                        .map(function (res) { return res.text(); })
                        .subscribe(function (data) {
                        var data1 = new Blob([data], { type: 'text/plain;charset=utf-8' });
                        window['saveAs'](data1, 'log.xml');
                    }, function (error) { return console.log(JSON.stringify(error)); });
                };
                ParseService = __decorate([
                    core_1.Component({
                        selector: "parse-log",
                        template: "\n    <div style=\"position: absolute;top: 15%;left: 33%;margin-top: -50px;margin-left: -50px;\">\n    <button  class=\"btn btn-primary\" (click)=\"getLogsPost()\">Get Logs From Server!</button>\n    <select  class=\"form-check\" [(ngModel)]=\"domainName\">\n    <option value=\"D:\" selected>D</option>\n    <option value=\"C:\">C</option>\n    </select>\n    <select  class=\"form-check\" [(ngModel)]=\"projectName\">\n    <option value=\"meizu\" selected>meizu</option>\n    <option value=\"iphone\">iphone</option>\n    </select>\n    <select  class=\"form-check\" [(ngModel)]=\"logType\">\n    <option value=\"xslt.xml\"selected>xslt.xml</option>\n    <option value=\"iphone.xml\">iphone.xml</option>\n    </select>\n    <span [hidden]=\"hideButtonElement\"><button class=\"btn btn-primary\" (click)=\"downloadFile()\">Download Logs!</button></span>\n\n    <textarea [hidden]=\"hideElement\" style=\"border-color: dodgerblue;\n      top: 50px; width: 500px; height: 500px;\">\n             {{users}}\n    </textarea>\n    </div>",
                        providers: [http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ParseService);
                return ParseService;
            }());
            exports_1("ParseService", ParseService);
        }
    }
});
//# sourceMappingURL=log_parser.service.js.map