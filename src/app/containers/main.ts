/**
 * Created by Dacrol on 2016-08-24.
 */

import { Component } from '@angular/core';
import { AppBar } from '../ui';
import { Notes } from './notes';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
    selector: 'main-container',
    directives: [
        AppBar,
        Notes,
        ...ROUTER_DIRECTIVES
    ],
    template: `
    <div class="main-container">
        <app-bar></app-bar>
        <main class="main">
            <!--<notes-container></notes-container>-->
            <router-outlet></router-outlet>
        </main>
    </div>
`
})

export class Main {}/**
 * Created by Dacrol on 2016-08-24.
 */
