import { Component } from '@angular/core';
import { Main } from './containers';

@Component({
    selector: 'app',
    directives: [
        Main
    ],
    template: `
    <div>
    Hello world!
    <main-container></main-container>
    </div>
  `
})
export class App {}
