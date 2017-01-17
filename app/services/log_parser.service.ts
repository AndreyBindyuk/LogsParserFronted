import {Component, Injectable} from "angular2/core";
import {Http, HTTP_PROVIDERS, Headers, Response,JSONP_PROVIDERS} from "angular2/http";
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/map'
import "rxjs/Rx"
import {RequestOptions} from "angular2/http";
import {BrowserXhr} from 'angular2/http';
import {$$rxSubscriber} from "rxjs/symbol/rxSubscriber";

@Component({
    selector: "parse-log",
    template:`
    <div style="position: absolute;top: 15%;left: 33%;margin-top: -50px;margin-left: -50px;">
    <button  class="btn btn-primary" (click)="getLogsPost()">Get Logs From Server!</button>
    <select  class="form-check" [(ngModel)]="domainName">
    <option value="D:" selected>D</option>
    <option value="C:">C</option>
    </select>
    <select  class="form-check" [(ngModel)]="projectName">
    <option value="meizu" selected>meizu</option>
    <option value="iphone">iphone</option>
    </select>
    <select  class="form-check" [(ngModel)]="logType">
    <option value="xslt.xml"selected>xslt.xml</option>
    <option value="iphone.xml">iphone.xml</option>
    </select>
    <span [hidden]="hideButtonElement"><button class="btn btn-primary" (click)="downloadFile()">Download Logs!</button></span>

    <textarea [hidden]="hideElement" style="border-color: dodgerblue;
      top: 50px; width: 500px; height: 500px;">
             {{users}}
    </textarea>
    </div>`,
    providers: [HTTP_PROVIDERS,JSONP_PROVIDERS]
})
export class ParseService{
    private parseLogUrl = "http://localhost:8080/countriess";

    users: string;
    domainName: string;
    projectName: string;
    logType: string;
    hideElement: Boolean = true;
    hideButtonElement: Boolean = true;



    constructor (private http: Http){

    }

    getLogs() {
        let headers = new Headers();
        this.http.get(this.parseLogUrl)
            .map((res:Response) =>  res.json())
            .subscribe(
                data => this.users=data,
                error => console.log(JSON.stringify(error)));
    }

    getLogsPost() {
        let data = {
            "domainName" : this.domainName,
            "projectName" : this.projectName,
            "logType" : this.logType
        };
        let body = JSON.stringify(data);
        let head = new Headers({
            'Content-Type': 'application/json'
        });
        this.http.post(this.parseLogUrl,body, {headers : head})
            .map((res:Response) =>  res.text())
            .subscribe(
                data => this.users=data,
                error => console.log(JSON.stringify(error)));
        this.hideElement = false;
        this.hideButtonElement = false;
    }



    public  downloadFile() {
        let data = {
            "domainName" : this.domainName,
            "projectName" : this.projectName,
            "logType" : this.logType
        };
        let body = JSON.stringify(data);
        let head = new Headers({
            'Content-Type': 'application/json'
        });
        this.http.post(this.parseLogUrl,body, {headers : head})
            .map((res:Response) =>  res.text())
            .subscribe(
                data => {
                    let data1 = new Blob([data], {type: 'text/plain;charset=utf-8'});
                    window['saveAs'](data1, 'log.xml');},
                error => console.log(JSON.stringify(error)));
    }

}