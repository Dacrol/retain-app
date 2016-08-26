import { Component } from '@angular/core';
// import { Main } from './containers';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
    selector: 'app',
    directives: [
        ...ROUTER_DIRECTIVES
        //Main
    ],
    template: `
    <div>
        <!--<main-container></main-container>-->
        <router-outlet></router-outlet>
    </div>
  `
})
export class App {}
