/**
 * Created by Dacrol on 2016-08-24.
 */

import { Component } from '@angular/core';
import { AppBar } from '../ui';
@Component({
    selector: 'main-container',
    directives: [
        AppBar
    ],
    template: `
    <div>
        <app-bar></app-bar>
        <main class="main">
        Content here
        </main>
    </div>
`
})

export class Main {}/**
 * Created by Dacrol on 2016-08-24.
 */
