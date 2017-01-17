import {Component} from "angular2/core";
import {ParseService} from "./services/log_parser.service";

@Component({
    selector: "my-app",
    templateUrl: `../searchbar.html`,
    template: `<parse-log></parse-log>`,
    directives: [ParseService]
})
export class ParseComponent{
}