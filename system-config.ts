import {map} from "rxjs/operator/map";
var packages = {
    'app': { main: 'main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api':'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core', // <--------
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
];

packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

var config = {
    map: map,
    packages: packages
}

var System;
System.config(config);