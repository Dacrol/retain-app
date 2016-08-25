/**
 * Created by Dacrol on 2016-08-24.
 */

import { Component } from '@angular/core';
import { AppBar } from '../ui';
import { Notes } from './notes';

@Component({
    selector: 'main-container',
    directives: [
        AppBar,
        Notes
    ],
    template: `
    <div class="main-container">
        <app-bar></app-bar>
        <main class="main">
            <notes-container></notes-container>
        </main>
    </div>
`
})

export class Main {}/**
 * Created by Dacrol on 2016-08-24.
 */
