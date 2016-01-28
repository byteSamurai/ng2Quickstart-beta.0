import {Component} from 'angular2/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    pipes: [TranslatePipe]
})
export class AppComponent { }