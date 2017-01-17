System.register(["angular2/core", "./services/log_parser.service"], function(exports_1, context_1) {
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
    var core_1, log_parser_service_1;
    var ParseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (log_parser_service_1_1) {
                log_parser_service_1 = log_parser_service_1_1;
            }],
        execute: function() {
            ParseComponent = (function () {
                function ParseComponent() {
                }
                ParseComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "../searchbar.html",
                        template: "<parse-log></parse-log>",
                        directives: [log_parser_service_1.ParseService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParseComponent);
                return ParseComponent;
            }());
            exports_1("ParseComponent", ParseComponent);
        }
    }
});
//# sourceMappingURL=parse_app.component.js.map