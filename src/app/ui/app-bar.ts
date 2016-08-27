/**
 * Created by Dacrol on 2016-08-24.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
@Component ({
    selector: 'app-bar',
    directives: [...ROUTER_DIRECTIVES],
    styles:[`
.app-bar {
  height: 65px;
  padding: 5px 30px;
  background-color: #00BCD4;
}
.logo {
  color: white;
  font-size: 30px;
  font-weight: 300;
  cursor: pointer;
}
.link {
  color: white;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer; 
  margin-left: 4px;
}`],
    template: `<header class="app-bar row middle-xs">
  <span [routerLink]="['']" class="logo col-xs-9">
    Dac Notes
  </span>
    <nav class="col-xs-3">
        <div class="row middle-xs between-xs">
            <span [routerLink]="['', 'about']" class="link">About</span>
            <!--<span class="link">Settings</span>-->
            <span class="link">Logout</span>
        </div>
    </nav>
</header>`
})
export class AppBar {}