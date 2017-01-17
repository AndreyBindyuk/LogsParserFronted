System.register(["rxjs/operator/map"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var map_1;
    var packages, packageNames, config, System;
    return {
        setters:[
            function (map_1_1) {
                map_1 = map_1_1;
            }],
        execute: function() {
            packages = {
                'app': { main: 'main.js', defaultExtension: 'js' },
                'rxjs': { defaultExtension: 'js' },
                'angular2-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            };
            packageNames = [
                '@angular/common',
                '@angular/compiler',
                '@angular/core',
                '@angular/http',
                '@angular/platform-browser',
                '@angular/platform-browser-dynamic',
                '@angular/router',
                '@angular/router-deprecated',
                '@angular/testing',
                '@angular/upgrade',
            ];
            packageNames.forEach(function (pkgName) {
                packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
            });
            config = {
                map: map_1.map,
                packages: packages
            };
            System.config(config);
        }
    }
});
//# sourceMappingURL=system-config.js.map