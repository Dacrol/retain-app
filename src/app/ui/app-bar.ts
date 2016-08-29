/**
 * Created by Dacrol on 2016-08-24.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import {AuthService} from "../services/auth";


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
  font-size: 20px;
  font-weight: 400;
  cursor: pointer; 
  margin-left: 4px;
}`],
    template: `<header class="app-bar row middle-xs">
  <span [routerLink]="['']" class="logo col-xs-10">
    Dac Notes
  </span>
    <nav class="col-xs-2">
        <div class="row middle-xs between-xs">
            <span [routerLink]="['', 'about']" class="link">About</span>
            <!--<span class="link">Settings</span>-->
            <span (click)="signout()" class="link">Logout</span>
        </div>
    </nav>
</header>`
})
export class AppBar {

    constructor(private authService: AuthService){}

    signout(){
        this.authService.signout();
    }

}