import {bootstrap} from "angular2/platform/browser";
import {ParseComponent} from "./parse_app.component";
import{Http,HTTP_PROVIDERS, Headers, Response,JSONP_PROVIDERS} from "angular2/http";

bootstrap(ParseComponent,[HTTP_PROVIDERS,JSONP_PROVIDERS]);