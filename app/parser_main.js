System.register(["angular2/platform/browser", "./parse_app.component", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, parse_app_component_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (parse_app_component_1_1) {
                parse_app_component_1 = parse_app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(parse_app_component_1.ParseComponent, [http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=parser_main.js.map